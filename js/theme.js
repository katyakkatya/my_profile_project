function toggleTheme() {
    document.body.classList.toggle('dark');
    
    const btnThemeElement = document.querySelector('.btn-theme');
    if (document.body.classList.contains('dark')) {
        document.documentElement.style.setProperty('--color-light', '#2d2732ff');
        document.documentElement.style.setProperty('--shadow', '0 2px 20px rgba(255, 255, 255, 0.1)');
        document.documentElement.style.setProperty('--gradient-main', 'linear-gradient(113deg, rgba(67, 22, 72, 1) 0%, rgba(71, 19, 48, 1) 100%)');
        document.documentElement.style.setProperty('--color-uh', '#17434eff');
        document.documentElement.style.setProperty('--color-btn', 'linear-gradient(135deg, #6d4475ff 0%, #844454ff 100%)');

        //document.body.style.opacity = '40%';
        btnThemeElement.textContent = "🌞";
    }
    else {
        
        document.documentElement.style.setProperty('--color-light', 'white');
        document.documentElement.style.setProperty('--shadow', '0 2px 20px rgba(0, 0, 0, 0.1)');
        document.documentElement.style.setProperty('--gradient-main', 'linear-gradient(113deg, rgba(161, 52, 173, 1) 0%, rgba(166, 48, 113, 1) 100%)');
        document.documentElement.style.setProperty('--color-uh', '#3495AD');
        document.documentElement.style.setProperty('--color-btn', 'linear-gradient(135deg, #ed94ff 0%, #ff85a3 100%)');

        //document.body.style.opacity = '100%';
        btnThemeElement.textContent = "🌙";
    }
}
