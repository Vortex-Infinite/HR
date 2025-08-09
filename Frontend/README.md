# ABC INC - HR Management System

A comprehensive Human Resources management system with role-based access control, featuring HR Admin and Employee portals.

## 📁 Project Structure

```
HR/Frontend/
├── index.html                 # Main landing page
├── README.md                  # This documentation file
├── assets/                    # Static assets
│   ├── css/                   # Stylesheets
│   │   ├── style.css         # Main application styles
│   │   ├── dashboard.css     # Dashboard base styles
│   │   └── dashboard_style.css # Dashboard enhanced styles
│   ├── js/                    # JavaScript files
│   │   ├── auth.js           # Authentication logic
│   │   ├── dashboard.js      # Dashboard functionality
│   │   └── script.js         # Main application logic
│   └── images/                # Image assets (future use)
├── auth/                      # Authentication pages
│   ├── hr_login.html         # HR Admin login
│   └── employee_login.html   # Employee login
├── pages/                     # Application pages
│   ├── dashboard.html        # HR Admin dashboard
│   ├── hr_home.html          # HR home page (legacy)
│   └── employee_home.html    # Employee dashboard
└── components/                # Reusable components (future use)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Navigate to the `HR/Frontend` directory
3. Open `index.html` in your browser or start a local server

### Running with Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 👥 User Roles & Access

### HR Admin Portal
- **URL**: `/auth/hr_login.html`
- **Credentials**:
  - Email: `hr@abcinc.com`
  - Password: `password`
  - OTP: `123456`

**Features:**
- Complete HR dashboard with analytics
- Employee management tools
- Recruitment portal
- Performance tracking
- Time tracking system
- Document management

### Employee Portal
- **URL**: `/auth/employee_login.html`
- **Credentials**:
  - Email: `employee@abcinc.com`
  - Password: `password`

**Features:**
- Personal profile management
- Time off requests
- Document access
- Clock in/out functionality

## 🎨 Features

### Authentication System
- **Static OTP Verification**: Uses "123456" as the static OTP for HR admin
- **Mock Authentication**: No external dependencies
- **Session Management**: Local storage for theme preferences
- **Role-based Access**: Separate portals for HR and employees

### User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes
- **Modern UI**: Clean, professional interface
- **Font Awesome Icons**: Consistent iconography

### Dashboard Features
- **Real-time Analytics**: Employee status, attendance tracking
- **Interactive Widgets**: Clock-in status, inbox, events
- **Navigation**: Sidebar with categorized menu items
- **Logout Functionality**: Secure session termination

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No framework dependencies
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Dependencies
```
index.html
├── assets/css/style.css
├── assets/js/script.js
└── Font Awesome CDN

auth/hr_login.html
├── ../assets/css/style.css
├── ../assets/js/auth.js
├── ../assets/js/script.js
└── Font Awesome CDN

pages/dashboard.html
├── ../assets/css/dashboard.css
├── ../assets/css/dashboard_style.css
├── ../assets/js/dashboard.js
└── Font Awesome CDN
```

## 🔐 Security Features

### Authentication
- **Static OTP**: Predefined OTP for demo purposes
- **Mock Validation**: Simulated authentication without external services
- **Session Cleanup**: Proper logout with localStorage clearing

### Data Protection
- **No External APIs**: All data is mock/simulated
- **Local Storage Only**: Theme preferences stored locally
- **No Sensitive Data**: Demo credentials only

## 🚀 Deployment

### Local Development
1. Clone the repository
2. Navigate to `HR/Frontend/`
3. Start a local server
4. Access via `http://localhost:8000`

### Production Deployment
1. Upload all files to your web server
2. Ensure proper file permissions
3. Configure your web server to serve static files
4. Update any absolute paths if needed

## 📝 Customization

### Adding New Features
1. **New Pages**: Add to `pages/` directory
2. **New Styles**: Add to `assets/css/` directory
3. **New Scripts**: Add to `assets/js/` directory
4. **New Components**: Add to `components/` directory

### Modifying Authentication
- Edit `assets/js/auth.js` for authentication logic
- Update `assets/js/script.js` for login flow
- Modify login forms in `auth/` directory

### Styling Changes
- Main styles: `assets/css/style.css`
- Dashboard styles: `assets/css/dashboard.css`
- Enhanced styles: `assets/css/dashboard_style.css`

## 🐛 Troubleshooting

### Common Issues

**1. Files not loading**
- Check file paths in HTML files
- Ensure all files are in correct directories
- Verify server is running properly

**2. Login not working**
- Verify credentials are correct
- Check browser console for JavaScript errors
- Ensure all JS files are loading

**3. Styling issues**
- Clear browser cache
- Check CSS file paths
- Verify Font Awesome CDN is accessible

### Debug Mode
Open browser developer tools (F12) to:
- Check console for errors
- Verify network requests
- Debug JavaScript functionality

## 📞 Support

For technical support or questions:
- Check browser console for error messages
- Verify all file paths are correct
- Ensure all dependencies are loading

## 📄 License

This project is for demonstration purposes. Powered by Vortex Infinite.

---

**Last Updated**: August 2025
**Version**: 1.0.0
**Status**: Production Ready 