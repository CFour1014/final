import './style.scss'; // 確保檔案在同一層，或改為 '../style.scss' 如果在外面
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
});