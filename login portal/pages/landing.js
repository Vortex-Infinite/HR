// Landing page component
window.LandingPage = {
    render() {
        document.getElementById('root').innerHTML = `
            <div class="centered">
                <div class="card" id="landing-card">
                    <div class="card-content">
                        <div class="company-header">
                            <div class="company-logo">
                                <img src="assets/icons/company-logo.svg" height="28" width="28" alt="Company Logo">
                            </div>
                            <div class="company-name">${CONFIG.COMPANY_NAME}</div>
                            <div class="who-question">Who is in?</div>
                        </div>
                        <div class="login-options">
                            <div class="login-option" id="hrOption">
                                <div class="avatar-icon">
                                    <img src="assets/icons/hr-building.svg" width="28" height="28" alt="HR">
                                </div>
                                <div class="title">HR</div>
                            </div>
                            <div class="login-option" id="empOption">
                                <div class="avatar-icon">
                                    <img src="assets/icons/employee-group.svg" width="28" height="28" alt="Employee">
                                </div>
                                <div class="title">Employee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('hrOption').onclick = () => {
            window.navigationManager.navigateToScreen(CONFIG.SCREENS.HR_LOGIN);
        };
        
        document.getElementById('empOption').onclick = () => {
            window.navigationManager.navigateToScreen(CONFIG.SCREENS.EMPLOYEE_LOGIN);
        };
    }
};
