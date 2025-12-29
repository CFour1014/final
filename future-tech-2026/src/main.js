import './style.scss'; // 引入 SCSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 引入 Bootstrap JS
import AOS from 'aos';
import 'aos/dist/aos.css';

// 初始化 AOS 動畫
AOS.init({
  duration: 1000, // 動畫時長 1 秒
  once: false,    // 每次捲動時是否都觸發
});