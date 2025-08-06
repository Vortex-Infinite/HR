// Application initialization
class HRMSApp {
    constructor() {
        this.themeManager = null;
        this.navigationManager = null;
        this.chatbotManager = null;
        this.sidebarManager = null;
        this.init();
    }

    init() {
        // Initialize core managers
        this.themeManager = new ThemeManager();
        this.navigationManager = new NavigationManager();
        this.chatbotManager = new ChatbotManager();
        this.sidebarManager = new SidebarManager();

        // Make navigation manager globally accessible
        window.navigationManager = this.navigationManager;
        window.sidebarManager = this.sidebarManager;

        console.log('HRMS Portal initialized successfully');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.hrmsApp = new HRMSApp();
});

// For immediate execution if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.hrmsApp) {
            window.hrmsApp = new HRMSApp();
        }
    });
} else {
    window.hrmsApp = new HRMSApp();
}
