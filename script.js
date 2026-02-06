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

// ===== TODO 列表 =====
const todoInput = document.getElementById('todo-input');
const todoAddBtn = document.getElementById('todo-add');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
// 从 localStorage 加载 TODO
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('momentum_todos') || '[]');
  todoList.innerHTML = '';
  todos.forEach(todo => addTodoToDOM(todo.text, todo.completed));
  updateCount();
}
// 保存 TODO 到 localStorage
function saveTodos() {
  const todos = [];
  todoList.querySelectorAll('.todo-item').forEach(item => {
    todos.push({
      text: item.querySelector('.todo-text').innerText,
      completed: item.classList.contains('completed')
    });
  });
  localStorage.setItem('momentum_todos', JSON.stringify(todos));
  updateCount();
}
// 更新任务计数
function updateCount() {
  const total = todoList.querySelectorAll('.todo-item').length;
  const completed = todoList.querySelectorAll('.todo-item.completed').length;
  const remaining = total - completed;
  todoCount.innerText = remaining;
}
// 添加 TODO 到 DOM
function addTodoToDOM(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'todo-item' + (completed ? ' completed' : '');

  li.innerHTML = `
    <div class="todo-checkbox"></div>
    <span class="todo-text">${escapeHtml(text)}</span>
    <button class="todo-delete" title="删除">×</button>
  `;

  // 点击完成/取消
  const checkbox = li.querySelector('.todo-checkbox');
  const textSpan = li.querySelector('.todo-text');

  function toggleComplete() {
    li.classList.toggle('completed');
    saveTodos();
  }

  checkbox.addEventListener('click', toggleComplete);
  textSpan.addEventListener('click', toggleComplete);

  // 删除按钮
  li.querySelector('.todo-delete').addEventListener('click', () => {
    li.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      li.remove();
      saveTodos();
    }, 300);
  });

  todoList.appendChild(li);
}
// 添加新 TODO
function addTodo() {
  const text = todoInput.value.trim();
  if (text) {
    addTodoToDOM(text);
    todoInput.value = '';
    saveTodos();
    // 滚动到底部
    todoList.scrollTop = todoList.scrollHeight;
  }
}
// 事件监听
todoAddBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});
// 转义 HTML 防止 XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}
// 添加滑出动画样式
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateX(20px);
    }
  }
`;
document.head.appendChild(style);
// 初始化
loadTodos();



