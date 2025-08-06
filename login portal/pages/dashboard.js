// HR Dashboard page component
window.DashboardPage = {
    render() {
        document.getElementById('root').innerHTML = `
            <div class="dashboard-container">
                <div class="sidebar">
                    <div class="sidebar-logo">
                        <h2>${CONFIG.COMPANY_BRAND}</h2>
                        <button class="sidebar-toggle-btn-internal" id="sidebar-toggle-internal">
                            <img src="assets/icons/menu-hamburger.svg" width="14" height="14" alt="Menu">
                        </button>
                    </div>
                    
                    <div class="sidebar-section">
                        <div class="sidebar-section-title">Personal</div>
                        <button class="sidebar-menu-item active" data-menu="profile">
                            <img src="assets/icons/profile.svg" width="16" height="16" alt="Profile">
                            Profile
                        </button>
                        <button class="sidebar-menu-item" data-menu="clock">
                            <img src="assets/icons/clock.svg" width="16" height="16" alt="Clock">
                            Clock in
                        </button>
                        <button class="sidebar-menu-item" data-menu="timeoff">
                            <img src="assets/icons/calendar.svg" width="16" height="16" alt="Calendar">
                            Time off
                        </button>
                        <button class="sidebar-menu-item" data-menu="documents">
                            <img src="assets/icons/document.svg" width="16" height="16" alt="Documents">
                            My documents
                        </button>
                        <button class="sidebar-menu-item" data-menu="training">
                            <img src="assets/icons/training.svg" width="16" height="16" alt="Training">
                            My training
                        </button>
                    </div>

                    <div class="sidebar-section">
                        <div class="sidebar-section-title">Company</div>
                        <button class="sidebar-menu-item" data-menu="employees">
                            <img src="assets/icons/employees.svg" width="16" height="16" alt="Employees">
                            Employees
                        </button>
                        <button class="sidebar-menu-item" data-menu="recruitment">
                            <img src="assets/icons/recruitment.svg" width="16" height="16" alt="Recruitment">
                            Recruitment
                        </button>
                        <button class="sidebar-menu-item" data-menu="performance">
                            <img src="assets/icons/performance.svg" width="16" height="16" alt="Performance">
                            Performance
                        </button>
                        <button class="sidebar-menu-item" data-menu="timetracking">
                            <img src="assets/icons/time-tracking.svg" width="16" height="16" alt="Time Tracking">
                            Time tracking
                        </button>
                        <button class="sidebar-menu-item" data-menu="projects">
                            <img src="assets/icons/projects.svg" width="16" height="16" alt="Projects">
                            Projects
                        </button>
                        <button class="sidebar-menu-item" data-menu="analytics">
                            <img src="assets/icons/analytics.svg" width="16" height="16" alt="Analytics">
                            Analytics
                        </button>
                        <button class="sidebar-menu-item" data-menu="spending">
                            <img src="assets/icons/spending.svg" width="16" height="16" alt="Spending">
                            Spending
                        </button>
                        <button class="sidebar-menu-item" data-menu="payroll">
                            <img src="assets/icons/payroll.svg" width="16" height="16" alt="Payroll">
                            Payroll
                        </button>
                    </div>
                </div>

                <div class="dashboard-main">
                    <div class="dashboard">
                        <div class="dash-header">
                            <div class="dash-greeting">
                                <b>Good morning, Hellen!</b>
                                <span style="color: var(--muted); margin-left: 10px;">
                                    ${this.getCurrentDate()}
                                </span>
                            </div>
                            <div class="user-profile">
                                <span style="color: var(--muted); font-size: 0.9rem;">Welcome back</span>
                            </div>
                        </div>
                        
                        <div class="dash-grid">
                            <div class="widget">
                                <div class="title">Clock in</div>
                                <div style="display:flex; flex-direction:column; align-items:center;">
                                    <div style="margin-bottom:9px;font-size:1.09rem;font-weight:500;color:var(--main-text)">
                                        On break
                                    </div>
                                    <svg width="88" height="50">
                                        <circle r="23" cx="45" cy="25" fill="none" stroke-width="7" stroke="#f3d18a" stroke-dasharray="125" stroke-dashoffset="30.9"/>
                                        <circle r="23" cx="45" cy="25" fill="none" stroke="var(--accent)" stroke-dasharray="125" stroke-dashoffset="100"/>
                                        <text x="50%" y="55%" text-anchor="middle" fill="var(--main-text)" dy=".3em" font-size="19">01:00</text>
                                    </svg>
                                    <button class="btn" style="background: var(--success); color:#fff; width:78%;margin-top:8px;" onclick="alert('Resume clock functionality')">Resume</button>
                                </div>
                            </div>
                            
                            <div class="widget">
                                <div class="title">Inbox <span style="color:var(--muted);font-weight:400;">· 69</span></div>
                                <div class="inbox-msg">📧 You have assigned <b>17</b> tasks to do<br><span style="font-size:.97rem;color:var(--muted);">7 Feb 2025</span></div>
                                <div class="inbox-msg">💸 Changes to your expense have been updated<br><span style="font-size:.97rem;color:var(--muted);">29 Jan 2025</span></div>
                                <div class="inbox-msg">🚨 You have received a new complaint<br><span style="font-size:.97rem;color:var(--muted);">7 Feb 2025</span></div>
                                <div class="inbox-msg">🚨 You have received a new complaint<br><span style="font-size:.97rem;color:var(--muted);">7 Feb 2025</span></div>
                            </div>
                            
                            <div class="widget events">
                                <div class="title">Events</div>
                                <div class="event">
                                    <b>Conflict Resolution &amp; Team Dynamics</b> · <span style="color:var(--accent);">Feb 28</span><br>
                                    <span style="font-size:.95rem;color:var(--muted);">Building Cohesive Teams – 09:30–12:30</span>
                                </div>
                                <div class="event">
                                    <b>🚩 New Collection Launch Event</b> · <span style="color:var(--accent);">Mar 3</span><br>
                                    <span style="font-size:.95rem;color:var(--muted);">10:00</span>
                                </div>
                                <div class="event">
                                    <b>Conflict Resolution &amp; Team Dynamics</b> · <span style="color:var(--accent);">Apr 7</span><br>
                                    <span style="font-size:.95rem;color:var(--muted);">Understanding Team Dynamics – 10:00–12:00</span>
                                </div>
                            </div>
                            
                            <div class="widget">
                                <div class="title">Who is in?</div>
                                <div style="font-size:1.17rem;"><b>Not in office:</b> <span style="color:var(--error);">5</span></div>
                                <div style="font-size:.97rem;margin-bottom:7px;"><b>Missing clock in:</b> <span style="color:var(--error);">21</span></div>
                                <div>Clocked in: <b style="color:var(--success)">19</b></div>
                                <div>On a break: <b style="color:var(--accent)">3</b></div>
                            </div>
                        </div>
                        
                        <div class="widget" style="margin-bottom:0;">
                            <span class="title">Colleagues</span>
                            <div class="user-list">
                                <div class="user-card">
                                    <img src="https://randomuser.me/api/portraits/women/57.jpg" alt="Clara Copper">
                                    <span class="name">Clara Copper</span>
                                    <span class="bd">Feb 21 🎂</span>
                                </div>
                                <div class="user-card">
                                    <img src="https://randomuser.me/api/portraits/men/87.jpg" alt="Cristopher Clark">
                                    <span class="name">Cristopher Clark</span>
                                    <span class="bd">Feb 22 🎂</span>
                                </div>
                                <div class="user-card">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Laura Lewis">
                                    <span class="name">Laura Lewis</span>
                                    <span class="bd">Feb 25 🎂</span>
                                </div>
                                <div class="user-card">
                                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Bernarda Baker">
                                    <span class="name">Bernarda Baker</span>
                                    <span class="bd">Feb 25 🎂</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Initialize sidebar toggle and menu interactions after render
        this.initializeInteractions();
    },

    initializeInteractions() {
        // Initialize sidebar toggle functionality
        setTimeout(() => {
            if (window.sidebarManager) {
                window.sidebarManager.initializeToggle();
            }
        }, 100);

        // Add menu item click handlers
        const menuItems = document.querySelectorAll('.sidebar-menu-item[data-menu]');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all items
                menuItems.forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                item.classList.add('active');
                
                // Handle menu actions
                const menuType = item.getAttribute('data-menu');
                this.handleMenuClick(menuType);
            });
        });
    },

    handleMenuClick(menuType) {
        const actions = {
            'profile': () => alert('Profile page - Coming soon!'),
            'clock': () => alert('Clock in/out functionality'),
            'timeoff': () => alert('Time off requests page'),
            'documents': () => alert('Documents management'),
            'training': () => alert('Training modules'),
            'employees': () => alert('Employee management'),
            'recruitment': () => alert('Recruitment portal'),
            'performance': () => alert('Performance reviews'),
            'timetracking': () => alert('Time tracking system'),
            'projects': () => alert('Project management'),
            'analytics': () => alert('Analytics dashboard'),
            'spending': () => alert('Expense management'),
            'payroll': () => alert('Payroll system')
        };

        if (actions[menuType]) {
            actions[menuType]();
        }
    },

    getCurrentDate() {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date().toLocaleDateString('en-US', options);
    }
};
