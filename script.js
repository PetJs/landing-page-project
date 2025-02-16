// Mobile Menu Toggle
const mobileNav = () => {
    // Create mobile menu button
    const nav = document.querySelector('nav');
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '☰';
    menuBtn.className = 'mobile-menu';
    menuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 36px;
        cursor: pointer;
        color: var(--secondary-color);
    `;

    // Get nav-list
    const navList = document.querySelector('.list-items');

    // Display menu based on screen size
    const handleResize = () => {
        if (window.innerWidth <= 1200) {
            menuBtn.style.display = 'block';
            navList.style.display = 'none';
        } else {
            menuBtn.style.display = 'none';
            navList.style.display = 'flex';
        }
    };

    // Toggle menu on click
    menuBtn.addEventListener('click', () => {
        if (navList.style.display === 'none') {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '100%';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.backgroundColor = 'var(--bg-light)';
            navList.style.padding = '20px';
            navList.style.zIndex = '100';
        } else {
            navList.style.display = 'none';
        }
    });

    // Add button to navigation
    nav.appendChild(menuBtn);

    // Initial check and add resize listener
    handleResize();
    window.addEventListener('resize', handleResize);
};

// Call the function
mobileNav();
