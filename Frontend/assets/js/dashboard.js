// HR Dashboard page component
window.DashboardPage = {
    init() {
        // Check if user is authenticated
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            window.location.href = '../auth/hr_login.html';
            return;
        }
        
        const user = JSON.parse(currentUser);
        if (user.role !== 'HR') {
            window.location.href = '../auth/hr_login.html';
            return;
        }
        
        this.render();
        this.initializeInteractions();
    },

    render() {
        document.getElementById('root').innerHTML = `
            <div class="dashboard-container">
                <div class="sidebar">
                    <div class="sidebar-logo">
                        <h2>${CONFIG.COMPANY_BRAND}</h2>
                        <button class="sidebar-toggle-btn-internal" id="sidebar-toggle-internal">
                            <img src="https://img.icons8.com/ios-glyphs/30/menu--v1.png" width="16" height="16" alt="Menu">
                        </button>
                    </div>
                    
                    <div class="sidebar-section">
                        <div class="sidebar-section-title">Personal</div>
                        <button class="sidebar-menu-item active" data-menu="profile">
                            <img src="../assets/images/home-icon-silhouette.png" width="18" height="18" alt="Profile">
                            Home
                        </button>
                        <button class="sidebar-menu-item" data-menu="clock">
                            <img src="https://img.icons8.com/ios-glyphs/30/clock--v1.png" width="18" height="18" alt="Clock">
                            Clock in
                        </button>
                        <button class="sidebar-menu-item" data-menu="timeoff">
                           <img src="https://img.icons8.com/ios-glyphs/30/calendar.png" width="18" height="18" alt="Time Off">
                            Time off
                        </button>
                         <button class="sidebar-menu-item" data-menu="documents">
                            <img src="https://img.icons8.com/ios-glyphs/30/document.png" width="18" height="18" alt="Documents">
                            My documents
                        </button>
                    </div>

                    <div class="sidebar-section">
                        <div class="sidebar-section-title">Company</div>
                        <button class="sidebar-menu-item" data-menu="employees">
                            <img src="https://img.icons8.com/ios-glyphs/30/groups.png" width="18" height="18" alt="Employees">
                            Employees
                        </button>
                        <button class="sidebar-menu-item" data-menu="recruitment">
                            <img src="https://img.icons8.com/ios-glyphs/30/search-job.png" width="18" height="18" alt="Recruitment">
                            Recruitment
                        </button>
                        <button class="sidebar-menu-item" data-menu="performance">
                            <img src="https://img.icons8.com/ios-glyphs/30/goal--v1.png" width="18" height="18" alt="Performance">
                            Performance
                        </button>
                         <button class="sidebar-menu-item" data-menu="analytics">
                            <img src="https://img.icons8.com/ios-glyphs/30/combo-chart.png" width="18" height="18" alt="Analytics">
                            Analytics
                        </button>
                    </div>
                </div>

                <div class="dashboard-main">
                    <div class="dash-header">
                        <div class="dash-greeting">
                            <b>Good morning, Gowshik!</b>
                            <span style="color: var(--text-secondary); margin-left: 10px;">
                                ${this.getCurrentDate()}
                            </span>
                        </div>
                        <div class="dash-actions">
                            <button class="btn" style="background: var(--error); color: white;" onclick="DashboardPage.logout()">
                                <i class="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </div>
                    </div>
                    
                    <div class="dash-grid">
                        <div class="widget">
                            <div class="title">Clock in</div>
                            <div style="display:flex; flex-direction:column; align-items:center;">
                                <div style="margin-bottom:9px;font-size:1.09rem;font-weight:500;">On break</div>
                                <svg width="88" height="50">
                                    <circle r="23" cx="45" cy="25" fill="none" stroke-width="7" stroke="#f3d18a" stroke-dasharray="125" stroke-dashoffset="30.9"/>
                                    <circle r="23" cx="45" cy="25" fill="none" stroke="var(--accent-color)" stroke-dasharray="125" stroke-dashoffset="100"/>
                                    <text x="50%" y="55%" text-anchor="middle" fill="var(--text-primary)" dy=".3em" font-size="19">01:00</text>
                                </svg>
                                <button class="btn" style="background: var(--success); color:#fff; width:78%;margin-top:8px;" onclick="alert('Resume clock functionality')">Resume</button>
                            </div>
                        </div>
                        
                        <div class="widget">
                            <div class="title">Inbox <span style="color:var(--text-secondary);font-weight:400;">· 4</span></div>
                            <div class="inbox-msg">📧 You have assigned <b>17</b> tasks to do<br><span style="font-size:.9rem;color:var(--text-secondary);">7 Feb 2025</span></div>
                            <div class="inbox-msg">💸 Changes to your expense have been updated<br><span style="font-size:.9rem;color:var(--text-secondary);">29 Jan 2025</span></div>
                            <div class="inbox-msg">🚨 You have received a new complaint<br><span style="font-size:.9rem;color:var(--text-secondary);">7 Feb 2025</span></div>
                        </div>
                        
                        <div class="widget events">
                            <div class="title">Events</div>
                            <div class="event">
                                <b>Conflict Resolution</b> · <span style="color:var(--accent-color);">Feb 28</span><br>
                                <span style="font-size:.9rem;color:var(--text-secondary);">Building Cohesive Teams – 09:30</span>
                            </div>
                            <div class="event">
                                <b>🚩 New Collection Launch</b> · <span style="color:var(--accent-color);">Mar 3</span><br>
                                <span style="font-size:.9rem;color:var(--text-secondary);">10:00 AM</span>
                            </div>
                        </div>
                        
                        <div class="widget">
                            <div class="title">Who is in?</div>
                            <div style="font-size:1.1rem;"><b>Not in office:</b> <span style="color:var(--error);">5</span></div>
                            <div style="font-size:.9rem;margin-bottom:7px;"><b>Missing clock in:</b> <span style="color:var(--error);">21</span></div>
                            <div>Clocked in: <b style="color:var(--success)">19</b></div>
                            <div>On a break: <b style="color:var(--accent-color)">3</b></div>
                        </div>
                </div>
                
                <div class="widget" style="margin-top:20px;">
                <span class="title">Colleagues</span>
                <div class="user-list">
                    <div class="user-card">
                    <img src="https://randomuser.me/api/portraits/women/57.jpg" alt="Clara Copper">
                    <span class="name">Clara</span>
                    <span class="bd">Feb 21 🎂</span>
                    </div>
                    <div class="user-card">
                    <img src="https://randomuser.me/api/portraits/men/87.jpg" alt="Cristopher Clark">
                    <span class="name">Cristopher</span>
                    <span class="bd">Feb 22 🎂</span>
                    </div>
                    <div class="user-card">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Laura Lewis">
                    <span class="name">Laura</span>
                    <span class="bd">Feb 25 🎂</span>
                    </div>
                    <div class="user-card">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Bernarda Baker">
                    <span class="name">Bernarda</span>
                    <span class="bd">Feb 25 🎂</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        `;

        // Initialize interactions after the content has been rendered
        this.initializeInteractions();
    },

    initializeInteractions() {
        const menuItems = document.querySelectorAll('.sidebar-menu-item[data-menu]');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
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
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    },

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            // Clear any stored session data
            localStorage.removeItem('user');
            localStorage.removeItem('theme');
            // Redirect to login page
            window.location.href = '../auth/hr_login.html';
        }
    }
};

// Initial render when the script loads
DashboardPage.init();