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
document.body.style.backgroundImage = "url('bg1.jpg')";

