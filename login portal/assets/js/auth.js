// Authentication management
class AuthManager {
    static validateHRCredentials(email, password) {
        return email === CONFIG.HR_EMAIL && password === CONFIG.HR_PASS;
    }

    static validateEmployeeCredentials(email, password) {
        return email === CONFIG.EMP_EMAIL && password === CONFIG.EMP_PASS;
    }

    static validateOTP(otp) {
        return otp === CONFIG.HR_OTP;
    }

    static showContactAdmin() {
        alert(`Please contact HR Administrator at ${CONFIG.ADMIN_EMAIL} or call ${CONFIG.ADMIN_PHONE}`);
    }
}
