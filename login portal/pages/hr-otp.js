// HR OTP Verification page component
window.HROTPPage = {
    render() {
        document.getElementById('root').innerHTML = `
            <div class="centered">
                <div class="card">
                    <div class="card-content">
                        <div class="avatar">
                            <img src="assets/icons/lock.svg" height="32" width="32" alt="Lock">
                        </div>
                        <h2>OTP Verification</h2>
                        <form id="otp-form">
                            <div class="form-group">
                                <label for="otp">Enter 6-digit code</label>
                                <input type="text" id="otp" maxlength="6" pattern="\\d{6}" inputmode="numeric" placeholder="123456" required />
                            </div>
                            <div class="error" id="otp-error"></div>
                            <div class="contact-admin-link">
                                <a href="#" id="contact-admin-otp">Contact your Administrator</a>
                            </div>
                            <button class="btn" type="submit">Verify & Login</button>
                            <button type="button" class="resend" id="resend-btn">Didn't receive the code?</button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('resend-btn').onclick = () => {
            const errorElement = document.getElementById('otp-error');
            errorElement.textContent = 'A new OTP has been sent to your email.';
            errorElement.style.color = 'var(--success)';
            
            setTimeout(() => {
                errorElement.textContent = '';
                errorElement.style.color = 'var(--error)';
            }, 3000);
        };

        document.getElementById('otp-form').onsubmit = (e) => {
            e.preventDefault();
            const otp = document.getElementById('otp').value.trim();
            
            if (!AuthManager.validateOTP(otp)) {
                document.getElementById('otp-error').textContent = 'Incorrect OTP. Please try again.';
                return;
            }
            
            window.navigationManager.navigateToScreen(CONFIG.SCREENS.HR_DASHBOARD);
        };

        document.getElementById('contact-admin-otp').onclick = (e) => {
            e.preventDefault();
            AuthManager.showContactAdmin();
        };

        // Auto-focus on OTP input
        document.getElementById('otp').focus();
    }
};
