// Employee Login page component
window.EmployeeLoginPage = {
    render() {
        document.getElementById('root').innerHTML = `
            <div class="centered">
                <div class="card">
                    <div class="card-content">
                        <div class="avatar">
                            <img src="assets/icons/user.svg" height="32" width="32" alt="User">
                        </div>
                        <h2>Employee Login</h2>
                        <form id="emp-login-form">
                            <div class="form-group">
                                <label for="emp-email">Email Address</label>
                                <input type="email" id="emp-email" autocomplete="username" placeholder="Enter your email" required />
                            </div>
                            <div class="form-group">
                                <label for="emp-password">Password</label>
                                <input type="password" id="emp-password" autocomplete="current-password" placeholder="Enter your password" required />
                            </div>
                            <div class="error" id="emp-error"></div>
                            <div class="contact-admin-link">
                                <a href="#" id="contact-admin-emp">Contact your Administrator</a>
                            </div>
                            <button class="btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('emp-login-form').onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById('emp-email').value.trim();
            const password = document.getElementById('emp-password').value;
            
            if (!AuthManager.validateEmployeeCredentials(email, password)) {
                document.getElementById('emp-error').textContent = 'Invalid Employee credentials.';
                return;
            }
            
            // Show success message for employee login (since employee dashboard isn't implemented yet)
            document.getElementById('emp-error').innerHTML = `
                <span class="success">Success! (The employee home page will be designed next.)</span>
            `;
        };

        document.getElementById('contact-admin-emp').onclick = (e) => {
            e.preventDefault();
            AuthManager.showContactAdmin();
        };

        // Auto-focus on email input
        document.getElementById('emp-email').focus();
    }
};
