// HR Login page component
window.HRLoginPage = {
    render() {
        document.getElementById('root').innerHTML = `
            <div class="centered">
                <div class="card">
                    <div class="card-content">
                        <div class="avatar">
                            <img src="assets/icons/lock.svg" height="32" width="32" alt="Lock">
                        </div>
                        <h2>HR Login</h2>
                        <form id="hr-login-form">
                            <div class="form-group">
                                <label for="hr-email">Email Address</label>
                                <input type="email" id="hr-email" autocomplete="username" placeholder="Enter your email" required />
                            </div>
                            <div class="form-group">
                                <label for="hr-password">Password</label>
                                <input type="password" id="hr-password" autocomplete="current-password" placeholder="Enter your password" required />
                            </div>
                            <div class="error" id="hr-error"></div>
                            <div class="contact-admin-link">
                                <a href="#" id="contact-admin">Contact your Administrator</a>
                            </div>
                            <button class="btn" type="submit">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('hr-login-form').onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById('hr-email').value.trim();
            const password = document.getElementById('hr-password').value;
            
            if (!AuthManager.validateHRCredentials(email, password)) {
                document.getElementById('hr-error').textContent = 'Invalid HR credentials.';
                return;
            }
            
            window.navigationManager.navigateToScreen(CONFIG.SCREENS.HR_OTP);
        };

        document.getElementById('contact-admin').onclick = (e) => {
            e.preventDefault();
            AuthManager.showContactAdmin();
        };
    }
};
