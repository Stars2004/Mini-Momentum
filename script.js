// ===== 时间 =====
function updateTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("time").innerText = `${h}:${m}`;
}
setInterval(updateTime, 1000);
updateTime();

// ===== 名言 =====
const quotes = [
  "专注，就是把一件事做到极致。",
  "厚德、笃学、崇实、尚新。"
];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// ===== 背景图 =====
const DEFAULT_BG = 'bg.jpg';

function setBackground(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

function loadBackground() {
  const savedBg = localStorage.getItem('momentum_bg');
  if (savedBg) {
    setBackground(savedBg);
  } else {
    setBackground(DEFAULT_BG);
  }
}

// 更换背景功能
const changeBgBtn = document.getElementById('change-bg-btn');
const bgFileInput = document.getElementById('bg-file-input');

changeBgBtn.addEventListener('click', () => {
  bgFileInput.click();
});

bgFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      setBackground(imageUrl);
      localStorage.setItem('momentum_bg', imageUrl);
    };
    reader.readAsDataURL(file);
  }
});

loadBackground();

