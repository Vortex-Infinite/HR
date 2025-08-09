# Developer Guide - ABC INC HR System

## 🚀 Quick Start

### File Structure Overview
```
HR/Frontend/
├── index.html              # Entry point
├── assets/                 # Static resources
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images (future)
├── auth/                  # Login pages
├── pages/                 # Application pages
└── components/            # Reusable components
```

### Key Files
- **Entry Point**: `index.html`
- **Main Logic**: `assets/js/script.js`
- **Authentication**: `assets/js/auth.js`
- **Dashboard**: `assets/js/dashboard.js`
- **Main Styles**: `assets/css/style.css`
- **Dashboard Styles**: `assets/css/dashboard.css`

## 🔧 Development Workflow

### 1. Adding New Pages
```html
<!-- Create new page in pages/ directory -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page - ABC INC</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <!-- Your content here -->
    <script src="../assets/js/script.js"></script>
</body>
</html>
```

### 2. Adding New Styles
```css
/* Add to assets/css/style.css for global styles */
/* Add to assets/css/dashboard.css for dashboard-specific styles */
/* Add to assets/css/dashboard_style.css for enhanced dashboard styles */

/* Example: New component styles */
.new-component {
    background: var(--card-color);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}
```

### 3. Adding New JavaScript Functions
```javascript
// Add to assets/js/script.js for global functions
// Add to assets/js/dashboard.js for dashboard-specific functions

// Example: New utility function
function newUtilityFunction() {
    // Your logic here
    console.log('New function executed');
}
```

## 🎨 CSS Variables & Theming

### Color Scheme
```css
:root {
    --bg-color: #F7F8FA;           /* Background */
    --card-color: #FFFFFF;         /* Card backgrounds */
    --sidebar-color: #FFFFFF;      /* Sidebar background */
    --text-primary: #1E1E1E;       /* Primary text */
    --text-secondary: #6c757d;     /* Secondary text */
    --accent-color: #5D3EBC;       /* Primary accent */
    --accent-light: #F3F0FF;       /* Light accent */
    --border-color: #E9ECEF;       /* Borders */
    --success: #28a745;            /* Success states */
    --error: #dc3545;              /* Error states */
    --warning: #ffc107;            /* Warning states */
}
```

### Dark Mode Support
```css
.dark-mode {
    --bg-color: #1a1a1a;
    --card-color: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --border-color: #404040;
}
```

## 🔐 Authentication System

### Mock Users Configuration
```javascript
// In assets/js/auth.js
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

### Adding New Users
```javascript
// Add to mockUsers object
const mockUsers = {
    // ... existing users
    newRole: { 
        email: 'newuser@abcinc.com', 
        password: 'password',
        otp: '654321' // if needed
    }
};
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

### Grid System
```css
.dash-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
}
```

## 🔄 State Management

### Local Storage Usage
```javascript
// Theme preferences
localStorage.setItem('theme', 'dark-mode');
const theme = localStorage.getItem('theme') || 'light-mode';

// User session (future implementation)
localStorage.setItem('user', JSON.stringify(userData));
const user = JSON.parse(localStorage.getItem('user'));
```

## 🎯 Common Patterns

### Event Handling
```javascript
// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Handle form data
});

// Button clicks
button.addEventListener('click', () => {
    // Handle button action
});
```

### Async/Await Pattern
```javascript
async function handleLogin() {
    try {
        const result = await mockSignIn(email, password, role);
        // Handle success
    } catch (error) {
        // Handle error
        alert(error.message);
    }
}
```

## 🐛 Debugging

### Console Logging
```javascript
// Development logging
console.log('Debug info:', data);
console.error('Error occurred:', error);

// Production logging (remove in production)
if (process.env.NODE_ENV === 'development') {
    console.log('Debug info');
}
```

### Error Handling
```javascript
try {
    // Risky operation
} catch (error) {
    console.error('Operation failed:', error);
    // User-friendly error message
    alert('An error occurred. Please try again.');
}
```

## 📦 File Organization Best Practices

### CSS Organization
```css
/* 1. CSS Variables */
:root { /* variables */ }

/* 2. Reset/Normalize */
* { /* reset styles */ }

/* 3. Base styles */
body { /* base styles */ }

/* 4. Layout */
.container { /* layout styles */ }

/* 5. Components */
.button { /* component styles */ }

/* 6. Utilities */
.hidden { /* utility classes */ }

/* 7. Media Queries */
@media (min-width: 768px) { /* responsive styles */ }
```

### JavaScript Organization
```javascript
// 1. Imports/Dependencies
// 2. Constants/Configuration
// 3. Utility Functions
// 4. Event Handlers
// 5. Initialization
```

## 🚀 Performance Tips

### CSS Optimization
- Use CSS variables for consistent theming
- Minimize CSS selectors
- Use CSS Grid and Flexbox for layouts
- Avoid !important declarations

### JavaScript Optimization
- Use event delegation for dynamic content
- Debounce user input events
- Minimize DOM queries
- Use async/await for better error handling

### Asset Optimization
- Minify CSS and JS for production
- Optimize images
- Use CDN for external libraries
- Enable gzip compression

## 🔧 Build Process (Future)

### Development
```bash
# Start development server
python -m http.server 8000
# or
npx http-server
```

### Production Preparation
```bash
# Minify CSS
# Minify JavaScript
# Optimize images
# Update file paths
```

## 📚 Additional Resources

### Documentation
- [README.md](./README.md) - Main documentation
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [JavaScript ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

### Tools
- Browser Developer Tools
- CSS Grid Inspector
- JavaScript Debugger
- Network Tab for file loading issues

---

**Remember**: This is a demonstration system. For production use, implement proper security measures, database integration, and user management. 