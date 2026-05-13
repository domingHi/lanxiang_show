# 深圳分店点亮地图

这是一个纯前端静态网页项目，用 ECharts 展示深圳城区地图，并按顺序点亮分店。

## 文件说明

- `index.html`：页面结构
- `styles.css`：大屏风格样式
- `app.js`：地图加载、门店数据、点亮动画和控制逻辑
- `index-sequence.html`：顺序点亮版本页面，无中心店、无飞线箭头
- `app-sequence.js`：顺序点亮版本逻辑

## 运行方式

在当前文件夹打开终端，执行：

```bash
python -m http.server 8080
```

然后在浏览器访问：

```text
http://localhost:8080
```

两个版本的访问地址：

```text
http://localhost:8080
http://localhost:8080/index-sequence.html
```

如果你的电脑没有 Python，也可以用任意静态文件服务器运行本项目。

## 修改门店

在 `app.js` 中修改 `stores` 数组即可：

```js
const stores = [
  { name: "南山科技园店", district: "南山区", value: [113.9446, 22.5484] }
];
```

`value` 的格式是：

```text
[经度, 纬度]
```

如果只有门店地址，可以先用高德、百度或腾讯地图的地理编码服务把地址转换为经纬度。
