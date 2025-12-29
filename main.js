import './style.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 引入 AOS 樣式檔案

// 初始化 AOS 動畫
AOS.init({
    duration: 1000, // 動畫時長 1 秒
    offset: 100,    // 捲動到距離元素 100px 時觸發
    once: false      // 是否只執行一次
});

console.log("論壇期末版本系統已啟動...");

// 導覽列滾動效果
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    nav.style.boxShadow = '0 0 15px #0dcaf0';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  }
});