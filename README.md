# Mini Momentum 🌟

一个轻量级、优雅的新标签页浏览器扩展，为你的每一天带来专注与灵感。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## ✨ 功能特性

### 🕐 极简时钟
- 大字体显示当前时间，清晰易读
- 等宽字体设计，数字不跳动
- 每秒自动刷新

### 💬 每日灵感
- 精选励志名言，每次打开随机展示
- 中英文经典语录，激发工作学习动力

### 🖼️ 自定义背景
- 支持上传本地图片作为背景
- 默认使用高质量精美壁纸
- 背景设置自动保存，重启后依然生效
- 毛玻璃效果按钮，优雅不突兀

### ✅ 智能待办
- 可折叠的待办事项面板，节省空间
- 支持添加、完成、删除任务
- 数据本地存储，永久保存
- 流畅的动画交互体验

## 🚀 安装方法

### Chrome / Edge 浏览器

1. 下载本项目源码
   ```bash
   git clone https://github.com/yourusername/mini-momentum.git
   ```

2. 打开浏览器扩展管理页面
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`

3. 开启「开发者模式」

4. 点击「加载已解压的扩展程序」，选择项目文件夹

5. 完成！打开新标签页即可体验

## 📖 使用指南

| 功能 | 操作方式 |
|------|---------|
| 查看时间 | 打开新标签页即显示 |
| 更换背景 | 点击右上角 📷 图标，选择本地图片 |
| 打开待办 | 点击右下角 ✓ 图标 |
| 添加任务 | 在待办面板输入框输入，按回车或点击 + |
| 完成任务 | 点击任务文字或左侧圆圈 |
| 删除任务 | 悬停任务，点击右侧 × |
| 关闭面板 | 点击面板右上角 × |

## 🛠️ 技术亮点

- **纯原生技术栈** - HTML + CSS + JavaScript，零依赖，轻量高效
- **LocalStorage 数据持久化** - 背景设置和待办数据自动保存
- **响应式设计** - 完美适配桌面和移动设备
- **毛玻璃视觉效果** - 使用 `backdrop-filter` 实现现代化 UI
- **流畅动画** - CSS 动画优化，体验丝滑
- **XSS 防护** - 用户输入自动转义，安全可靠

## 🎯 项目结构

```
mini-momentum/
├── newtab.html      # 新标签页主页面
├── script.js        # 核心逻辑脚本
├── css/
│   ├── style.css    # 主样式文件
│   └── robotomono.css # 字体文件
├── fonts/           # Roboto Mono 字体
├── bg.jpg           # 默认背景图
└── manifest.json    # 扩展配置文件
```

## 🔮 未来规划

- [ ] 天气信息显示
- [ ] 搜索引擎快捷入口
- [ ] 更多主题配色方案
- [ ] 每日一言 API 接入
- [ ] 多语言支持

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

---

<p align="center">Made with ❤️ for a more productive browsing experience.</p>
