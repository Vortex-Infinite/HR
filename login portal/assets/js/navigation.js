// Navigation and screen management
class NavigationManager {
    constructor() {
        this.currentScreen = 'landing';
        this.init();
    }

    init() {
        // Handle browser back button
        window.addEventListener('popstate', (event) => {
            if (event.state) {
                this.navigateToScreen(event.state.screen, false);
            } else {
                this.navigateToScreen('landing', false);
            }
        });

        // Initialize based on current hash
        if (location.hash) {
            const screen = location.hash.substring(1);
            this.navigateToScreen(screen, false);
        } else {
            this.navigateToScreen('landing', false);
        }
    }

    navigateToScreen(screen, pushState = true) {
        this.currentScreen = screen;
        
        if (pushState) {
            history.pushState({ screen: screen }, '', `#${screen}`);
        }

        // Update UI elements visibility
        this.updateUIVisibility(screen);
        
        // Render the appropriate screen
        this.renderScreen(screen);
    }

    updateUIVisibility(screen) {
        const footer = document.querySelector('.footer');
        const chatbotBtn = document.querySelector('.chatbot-button');
        const externalToggleBtn = document.querySelector('.sidebar-toggle-btn-external');
        
        const isLoginScreen = ['landing', 'hr-login', 'hr-otp', 'employee-login'].includes(screen);
        
        if (isLoginScreen) {
            footer?.classList.remove('hidden');
            if (chatbotBtn) chatbotBtn.style.display = 'none';
            if (externalToggleBtn) externalToggleBtn.style.display = 'none';
        } else {
            footer?.classList.add('hidden');
            if (chatbotBtn) chatbotBtn.style.display = 'flex';
        }
    }

    renderScreen(screen) {
        switch (screen) {
            case CONFIG.SCREENS.LANDING:
                if (window.LandingPage) window.LandingPage.render();
                break;
            case CONFIG.SCREENS.HR_LOGIN:
                if (window.HRLoginPage) window.HRLoginPage.render();
                break;
            case CONFIG.SCREENS.HR_OTP:
                if (window.HROTPPage) window.HROTPPage.render();
                break;
            case CONFIG.SCREENS.EMPLOYEE_LOGIN:
                if (window.EmployeeLoginPage) window.EmployeeLoginPage.render();
                break;
            case CONFIG.SCREENS.HR_DASHBOARD:
                if (window.DashboardPage) window.DashboardPage.render();
                break;
        }
    }

    getCurrentScreen() {
        return this.currentScreen;
    }
}
