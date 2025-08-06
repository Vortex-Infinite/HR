// Theme management
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Set initial theme based on system preference
        this.setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        // Add theme switch event listener
        const themeSwitch = document.getElementById('theme-switch');
        if (themeSwitch) {
            themeSwitch.onclick = () => {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                this.setTheme(!isDark);
            };
        }
    }

    setTheme(dark) {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme');
    }
}
