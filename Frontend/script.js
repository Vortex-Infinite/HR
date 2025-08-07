document.addEventListener('DOMContentLoaded', () => {
    // --- THEME SWITCHER LOGIC (Universal) ---
    const themeCheckbox = document.getElementById('theme-checkbox');
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark-mode');
        if (themeCheckbox) themeCheckbox.checked = (theme === 'dark-mode');
    };
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(savedTheme);
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            const newTheme = themeCheckbox.checked ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- LOGIN PAGE LOGIC ---
    const handleLogin = async (email, password, role) => {
        try {
            const userCredential = await signIn(email, password);
            console.log(`${role} sign-in successful:`, userCredential.user.uid);
            
            // Log the login event to MongoDB
            await logToMongo({
                userId: userCredential.user.uid,
                role: role,
                loginTime: new Date().toISOString(),
                event: 'login'
            });

            // Redirect to the appropriate homepage
            window.location.href = role === 'HR' ? 'hr_home.html' : 'employee_home.html';
        } catch (error) {
            alert(`Login Failed: ${error.message}`);
        }
    };

    const employeeLoginForm = document.getElementById('employee-login-form');
    if (employeeLoginForm) {
        employeeLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('employeeId').value;
            const pass = document.getElementById('employeePassword').value;
            handleLogin(email, pass, 'Employee');
        });
    }

    const hrLoginForm = document.getElementById('hr-login-form');
    if (hrLoginForm) {
        hrLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('hrId').value;
            const pass = document.getElementById('hrPassword').value;
            handleLogin(email, pass, 'HR');
        });
    }
    
    // --- DASHBOARD PAGE LOGIC ---
    if (document.body.classList.contains('dashboard-page')) {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const logoutBtn = document.getElementById('logout-btn');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
        
        logoutBtn.addEventListener('click', async () => {
            try {
                await signOut();
                window.location.href = 'index.html';
            } catch (error) {
                console.error("Logout Failed:", error);
            }
        });
    }
});