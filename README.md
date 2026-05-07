# PPT 网页版

这是一个将你的 PowerPoint 幻灯片转换为网页的简单项目。

## 如何使用

1. 将你的 PPT 内容转换为 HTML 结构：
   - 导出 PPT 为图片或手动复制内容到 `index.html` 中的 `.slide` div。
   - 替换占位符文本为你的实际内容。

2. 添加视频：
   - 将视频文件放在项目根目录，命名为 `video.mp4`（或其他格式）。
   - 更新 `index.html` 中的 `<source src="video.mp4">` 为你的视频文件名。

3. 自定义样式：
   - 编辑 `style.css` 来调整外观。

4. 长期托管：
   - 上传到 GitHub 仓库。
   - 启用 GitHub Pages：仓库设置 -> Pages -> Source 选择 "Deploy from a branch" -> Branch 选择 main -> 保存。
   - 你的网页 URL 将是 `https://你的用户名.github.io/仓库名/`。

## 功能

- 响应式设计，适配手机和电脑。
- 幻灯片导航（按钮和键盘箭头键）。
- 视频播放支持。
- 可编辑的 HTML/CSS/JS。

## 注意

- 这是模板，需要你手动替换内容。
- 确保视频文件格式兼容浏览器（MP4 推荐）。