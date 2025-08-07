# Project Structure Overview

## 📁 Complete File Organization

```
HR/Frontend/
│
├── 📄 index.html                    # 🏠 Main Landing Page
├── 📄 README.md                     # 📖 Main Documentation
├── 📄 DEVELOPER_GUIDE.md            # 👨‍💻 Developer Reference
├── 📄 STRUCTURE.md                  # 📋 This File
│
├── 📁 assets/                       # 🎨 Static Resources
│   ├── 📁 css/                      # 🎨 Stylesheets
│   │   ├── 📄 style.css            # 🎨 Main Application Styles
│   │   ├── 📄 dashboard.css        # 🎨 Dashboard Base Styles
│   │   └── 📄 dashboard_style.css  # 🎨 Dashboard Enhanced Styles
│   │
│   ├── 📁 js/                       # ⚙️ JavaScript Files
│   │   ├── 📄 auth.js              # 🔐 Authentication Logic
│   │   ├── 📄 dashboard.js         # 📊 Dashboard Functionality
│   │   └── 📄 script.js            # 🧠 Main Application Logic
│   │
│   └── 📁 images/                   # 🖼️ Image Assets (Future Use)
│
├── 📁 auth/                         # 🔐 Authentication Pages
│   ├── 📄 hr_login.html            # 👨‍💼 HR Admin Login
│   └── 📄 employee_login.html      # 👤 Employee Login
│
├── 📁 pages/                        # 📄 Application Pages
│   ├── 📄 dashboard.html           # 📊 HR Admin Dashboard
│   ├── 📄 hr_home.html             # 🏠 HR Home (Legacy)
│   └── 📄 employee_home.html       # 👤 Employee Dashboard
│
└── 📁 components/                   # 🧩 Reusable Components (Future Use)
```

## 🔗 File Dependencies

### Main Entry Point
```
index.html
├── assets/css/style.css
├── assets/js/script.js
└── Font Awesome CDN
```

### HR Login Flow
```
auth/hr_login.html
├── ../assets/css/style.css
├── ../assets/js/auth.js
├── ../assets/js/script.js
└── Font Awesome CDN
    ↓ (redirects to)
pages/dashboard.html
├── ../assets/css/dashboard.css
├── ../assets/css/dashboard_style.css
├── ../assets/js/dashboard.js
└── Font Awesome CDN
```

### Employee Login Flow
```
auth/employee_login.html
├── ../assets/css/style.css
├── ../assets/js/auth.js
├── ../assets/js/script.js
└── Font Awesome CDN
    ↓ (redirects to)
pages/employee_home.html
├── ../assets/css/dashboard_style.css
├── ../assets/js/auth.js
├── ../assets/js/script.js
└── Font Awesome CDN
```

## 🎯 Key Features by File

### Core Files
- **`index.html`** - Landing page with role selection
- **`assets/js/script.js`** - Main application logic and routing
- **`assets/js/auth.js`** - Authentication system (mock)
- **`assets/css/style.css`** - Global styles and theming

### HR Admin Features
- **`auth/hr_login.html`** - HR login with OTP verification
- **`pages/dashboard.html`** - Complete HR dashboard
- **`assets/js/dashboard.js`** - Dashboard functionality
- **`assets/css/dashboard.css`** - Dashboard base styles
- **`assets/css/dashboard_style.css`** - Enhanced dashboard styles

### Employee Features
- **`auth/employee_login.html`** - Employee login
- **`pages/employee_home.html`** - Employee dashboard

## 🔄 Navigation Flow

```
🏠 index.html
├── 👨‍💼 HR Admin
│   ├── 🔐 auth/hr_login.html
│   │   ├── Email: hr@abcinc.com
│   │   ├── Password: password
│   │   └── OTP: 123456
│   └── 📊 pages/dashboard.html
│
└── 👤 Employee
    ├── 🔐 auth/employee_login.html
    │   ├── Email: employee@abcinc.com
    │   └── Password: password
    └── 👤 pages/employee_home.html
```

## 🎨 Styling Architecture

### CSS Organization
```
assets/css/
├── style.css              # Global styles, login pages, theme
├── dashboard.css          # Dashboard layout and components
└── dashboard_style.css    # Enhanced dashboard features
```

### CSS Variables (Design System)
```css
:root {
    --bg-color: #F7F8FA;           /* Background */
    --card-color: #FFFFFF;         /* Cards */
    --text-primary: #1E1E1E;       /* Primary text */
    --text-secondary: #6c757d;     /* Secondary text */
    --accent-color: #5D3EBC;       /* Primary accent */
    --success: #28a745;            /* Success states */
    --error: #dc3545;              /* Error states */
    --warning: #ffc107;            /* Warning states */
}
```

## 🔐 Authentication System

### Mock Users
```javascript
// assets/js/auth.js
const mockUsers = {
    employee: { 
        email: 'employee@abcinc.com', 
        password: 'password' 
    },
    hr: { 
        email: 'hr@abcinc.com', 
        password: 'password', 
        otp: '123456' 
    }
};
```

### Login Flow
1. **Credentials Check** - Email/password validation
2. **OTP Verification** - For HR admin only (static: 123456)
3. **Session Management** - Local storage for preferences
4. **Redirect** - To appropriate dashboard

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Grid System
```css
.dash-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
}
```

## 🚀 Development Workflow

### Adding New Features
1. **Pages** → Add to `pages/` directory
2. **Styles** → Add to `assets/css/` directory
3. **Scripts** → Add to `assets/js/` directory
4. **Components** → Add to `components/` directory

### File Naming Convention
- **HTML**: `kebab-case.html`
- **CSS**: `kebab-case.css`
- **JavaScript**: `camelCase.js`
- **Directories**: `kebab-case/`

## 🔧 Configuration

### Company Branding
```javascript
// In dashboard.html
const CONFIG = {
    COMPANY_BRAND: "ABC INC"
};
```

### Theme Management
```javascript
// Stored in localStorage
localStorage.setItem('theme', 'dark-mode');
const theme = localStorage.getItem('theme') || 'light-mode';
```

## 📊 Dashboard Widgets

### Available Widgets
- **Clock-in Status** - Employee attendance tracking
- **Inbox** - Messages and notifications
- **Events** - Upcoming company events
- **Who is in** - Employee presence status
- **Colleagues** - Team member birthdays

### Widget Structure
```html
<div class="widget">
    <div class="title">Widget Title</div>
    <div class="widget-content">
        <!-- Widget content -->
    </div>
</div>
```

---

**Last Updated**: August 2025  
**Version**: 1.0.0  
**Status**: Production Ready 