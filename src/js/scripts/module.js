import { sidebar, sidebarBlur } from "./sidebar";

export let sidebarMessageButton = document.querySelector('.sidebar-nav__button--message');
export let sidebarPhoneButton = document.querySelector('.sidebar-nav__button--phone');

export let headerMessageButton = document.querySelector('.link-block__link--theme--message');
export let headerPhoneButton = document.querySelector('.link-block__link--theme--phone');

export let feedbackModule = document.querySelector('.module--feedback');
export let backCallModule = document.querySelector('.module--back-call');
export let desktopMedia = window.matchMedia("(min-width: 1120px)");
export let moduleButtonExit = document.querySelectorAll('.module__exit-btn');

sidebarMessageButton.addEventListener('click', function () {
    if (feedbackModule.classList.contains('module--active')) {
        feedbackModule.classList.remove('module--active');
        sidebarBlur.classList.remove('sidebar-blur--show');
    } else {
        sidebarBlur.classList.add('sidebar-blur--show');
        feedbackModule.classList.add('module--active');
        sidebar.classList.remove('sidebar-nav--active');
        sidebarBlur.style.left = 'auto';
        
        if (desktopMedia.matches) {
            sidebarBlur.style.right = '440px'; 
        } else {
            sidebarBlur.style.right = '320px';
        }
    }
});

sidebarPhoneButton.addEventListener('click', function() {
    if (backCallModule.classList.contains('module--active')) {
        backCallModule.classList.remove('module--active');
        sidebarBlur.classList.remove('sidebar-blur--show');
    } else {
        sidebarBlur.classList.add('sidebar-blur--show');
        backCallModule.classList.add('module--active');
        sidebar.classList.remove('sidebar-nav--active');
        sidebarBlur.style.left = 'auto';
        
        if (desktopMedia.matches) {
            sidebarBlur.style.right = '440px'; 
        } else {
            sidebarBlur.style.right = '320px';
        }
    }    
});

headerMessageButton.addEventListener('click', function (event) {
    if (feedbackModule.classList.contains('module--active')) {
        feedbackModule.classList.remove('module--active');
    } else {
        feedbackModule.classList.add('module--active');
        sidebarBlur.classList.add('sidebar-blur--show');
        sidebarBlur.style.left = 'auto';
        
        if (desktopMedia.matches) {
            sidebarBlur.style.right = '440px'; 
        } else {
            sidebarBlur.style.right = '320px';
        }
    }
});

headerPhoneButton.addEventListener('click', function() {
    if (backCallModule.classList.contains('module--active')) {
        backCallModule.classList.remove('module--active');
    } else {
        backCallModule.classList.add('module--active');
        sidebarBlur.classList.add('sidebar-blur--show');
        sidebarBlur.style.left = 'auto';
        
        if (desktopMedia.matches) {
            sidebarBlur.style.right = '440px'; 
        } else {
            sidebarBlur.style.right = '320px';
        }
    }
});

for (let i = 0; i < moduleButtonExit.length; i++) {
    let button = moduleButtonExit[i];
    button.addEventListener('click', function (event) {
        feedbackModule.classList.remove('module--active');
        backCallModule.classList.remove('module--active');
        sidebarBlur.classList.remove('sidebar-blur--show');
        sidebarBlur.style.left = '320px';
        sidebarBlur.style.right = 'auto';
    });
}
