// Import Modules //
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

// Tab Switch //
function initTabSwitching() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const contactBtn = document.getElementById('contactBtn');
    const contentDiv = document.getElementById('content');

    // Init Page Load //
    loadHomePage();

    // Tab Buttons //
    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHomePage();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenuPage();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        loadContactPage();
    });

    // Clear Content //
    function clearContent() {
        contentDiv.innerHTML = '';
    }
}

// Init Tab Switch //
initTabSwitching();