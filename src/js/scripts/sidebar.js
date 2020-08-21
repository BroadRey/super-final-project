import { feedbackModule, backCallModule } from "./module";

export let sidebarBlur = document.querySelector('.sidebar-blur');
export let burgerButton = document.querySelector('.link-block__link--theme--menu');
export let sidebar = document.querySelector('.sidebar-nav');
export let buttonExit = document.querySelector('.sidebar-nav__button--exit');

burgerButton.addEventListener('click', function (event) {
    if (sidebar.classList.contains('sidebar-nav--active')) {
        sidebar.classList.remove('sidebar-nav--active');
        sidebarBlur.classList.remove('sidebar-blur--show');
    } else {
        sidebar.classList.add('sidebar-nav--active');
        sidebarBlur.classList.add('sidebar-blur--show');
    }
});

sidebarBlur.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-nav--active');
    sidebarBlur.classList.remove('sidebar-blur--show');
    feedbackModule.classList.remove('module--active');
    backCallModule.classList.remove('module--active');
    sidebarBlur.style.left = '320px';
    sidebarBlur.style.right = 'auto';
});

buttonExit.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-nav--active');
    sidebarBlur.classList.remove('sidebar-blur--show');
});