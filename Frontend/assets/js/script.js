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
    const employeeLoginForm = document.getElementById('employee-login-form');
    if (employeeLoginForm) {
        employeeLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('employeeId').value;
            const pass = document.getElementById('employeePassword').value;
            try {
                await mockSignIn(email, pass, 'Employee');
                window.location.href = '../pages/employee_home.html';
            } catch (error) {
                alert(error.message);
            }
        });
    }

    const hrLoginForm = document.getElementById('hr-login-form');
    if (hrLoginForm) {
        const hrCredentialsForm = document.getElementById('hr-credentials-form');
        const hrOtpForm = document.getElementById('hr-otp-form');
        const otpVerifyForm = document.getElementById('otp-verify-form');

        // Step 1: Handle ID and Password submission
        hrLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('hrId').value;
            const pass = document.getElementById('hrPassword').value;

            try {
                await mockSignIn(email, pass, 'HR');
                // On successful credential check, hide the first form and show the OTP form.
                hrCredentialsForm.classList.add('hidden');
                hrOtpForm.classList.remove('hidden');
            } catch (error) {
                alert(error.message);
            }
        });

        // Step 2: Handle OTP verification
        if (otpVerifyForm) {
            otpVerifyForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const otp = document.getElementById('otp').value;
                const hrUser = mockUsers.hr;

                if (otp === hrUser.otp) {
                    alert('OTP Verified. Welcome HR Admin!');
                    await logToMongo({
                        userId: hrUser.email,
                        role: 'HR',
                        loginTime: new Date().toISOString(),
                        event: 'login'
                    });
                    window.location.href = '../pages/dashboard.html';
                } else {
                    alert('Invalid OTP. Please try again.');
                }
            });
        }
    }
    
    // --- DASHBOARD PAGE LOGIC ---
    if (document.body.classList.contains('dashboard-page')) {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const logoutBtn = document.getElementById('logout-btn');

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
            });
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async () => {
                try {
                    await mockSignOut();
                    window.location.href = '../index.html';
                } catch (error) {
                    console.error("Logout Failed:", error);
                }
            });
        }
    }
});