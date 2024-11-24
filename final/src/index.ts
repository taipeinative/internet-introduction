import 'boxicons';
import './styles/styles.css';
import { sidebarManager } from './snippet';
import { isNight } from './utils';

const themeManager = () => {
    if (isNight()) {
        const th_body = document.getElementsByTagName('body');
        if (th_body.length == 1) {
            th_body[0].classList.add('night');
        }
    }
}

window.onload = () => {
    sidebarManager();
    themeManager();
}