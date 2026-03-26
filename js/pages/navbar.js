// This is your "navbar object"
function Navbar() {
    const menuItems = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "index.html#about" },
        { name: "Services", href: "index.html#services" },
        // UNTIL FURTHER NOTICE { name: "Portfolio", href: "index.html#portfolio" },
        { name: "Contact", href: "index.html#contact" }
        // UNTIL FURTHER NOTICE { name: "Submit a Request", href: "index.html#submitarequest"}
    ];

    const desktopLinks = menuItems.map(item => 
        `<a href="${item.href}" class="website-header-text link-hover font-semibold">${item.name}</a>`
      ).join('');
    
    const mobileLinks = menuItems.map(item =>
    `<a href="${item.href}" class="website-header-text link-hover font-semibold">${item.name}</a>`
    ).join('');

    return `
      <div class="flex justify-between items-center p-4">
        <!-- Logo + Name -->
        <div class="website-header-text flex items-center space-x-3">
          <img src="assets/logo.png" alt="Company Icon" class="w-10 h-10">
          <h1 class="text-xl font-bold">WILL HELP</h1>
        </div>
    
        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          ${desktopLinks}
        </nav>
    
        <!-- Hamburger menu icon  -->
        <div class="md:hidden">
          <button id="menu-btn" class="link-hover" style="color: #000;">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    
      <!-- Mobile Menu -->
      <div id="mobile-menu-toggle" class="md:hidden bg-base-200 hover:bg-blue-500 hidden">
        <div class="flex flex-col items-center p-4 space-y-3">
          ${mobileLinks}
        </div>
      </div>
    `;
  }
  