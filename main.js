import './style.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. 初始化 AOS 捲動動畫
AOS.init({
    duration: 1000,
    offset: 100,
    once: false
});

// 2. 導覽列滾動背景變化
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.borderBottom = '1px solid #0dcaf0';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.borderBottom = 'none';
    }
});

console.log("2026 未來科技論壇系統已完美啟動！");