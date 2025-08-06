// Sidebar management
class SidebarManager {
    constructor() {
        this.sidebarHidden = false;
        this.init();
    }

    init() {
        // Will be initialized after dashboard renders
        setTimeout(() => {
            this.initializeToggle();
        }, 100);
    }

    initializeToggle() {
        const externalToggleBtn = document.getElementById('sidebar-toggle-external');
        const internalToggleBtn = document.getElementById('sidebar-toggle-internal');
        
        if (externalToggleBtn) {
            externalToggleBtn.onclick = () => this.toggle();
        }
        
        if (internalToggleBtn) {
            internalToggleBtn.onclick = () => this.toggle();
        }

        this.updateToggleButtons();
    }

    toggle() {
        this.sidebarHidden = !this.sidebarHidden;
        
        const sidebar = document.querySelector('.sidebar');
        const dashboardMain = document.querySelector('.dashboard-main');
        
        if (this.sidebarHidden) {
            sidebar?.classList.add('hidden');
            dashboardMain?.classList.add('sidebar-hidden');
        } else {
            sidebar?.classList.remove('hidden');
            dashboardMain?.classList.remove('sidebar-hidden');
        }
        
        this.updateToggleButtons();
    }

    updateToggleButtons() {
        const externalBtn = document.querySelector('.sidebar-toggle-btn-external');
        
        if (externalBtn) {
            externalBtn.style.display = this.sidebarHidden ? 'flex' : 'none';
        }
    }
}
