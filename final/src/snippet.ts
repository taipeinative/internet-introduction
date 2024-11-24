import './styles/snippet.css';
import { isNight } from './utils';

// Modified from: https://bbbootstrap.com/snippets/bootstrap-5-sidebar-menu-toggle-button-34132202
export const sidebarManager = () => {
    const snpt_container  = document.getElementById('topContainer');
    const snpt_menuButton = document.getElementById('menuButton');
    if ((snpt_container  instanceof HTMLDivElement) &&
        (snpt_menuButton instanceof HTMLElement)) {
            if (isNight()) {
                snpt_menuButton.setAttribute('color', '#EEE');
            }
            snpt_menuButton.addEventListener('click', (e) => {
            snpt_menuButton.getAttribute('name') == 'menu' ? snpt_menuButton.setAttribute('name', 'x') : snpt_menuButton.setAttribute('name', 'menu');
            snpt_container.classList.toggle('navbarExpanded');
            e.preventDefault();
        });
    }
    const snpt_navLinks = document.querySelectorAll('nav>ul>li:not(:first-child)>a');
    if (snpt_navLinks.length > 0) {
        snpt_navLinks.forEach(navLink => {
            navLink.addEventListener('click', (e) => {
                snpt_navLinks.forEach(navLink2 => {
                    navLink2.classList.remove('active');
                });
                navLink.classList.add('active');
                e.preventDefault();
            });
        });
    }
}