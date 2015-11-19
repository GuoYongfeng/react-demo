# React基础学习

> 本仓库代码仅供学习交流使用

配合学习文档请点[这里](http://guoyongfeng.github.io/idoc/html/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/React%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB.html)

## 使用说明

- 使用`bower`下载React等前端资源，存放在`vendors`目录
- 使用`babel`解析的`JSX`语法，并将命令配置在`package.json`中，可直接执行以下命令进行编译：

```
npm run build
```

如果你还没有安装babel，请执行：

```
// 最新版的babel需要安装babel和babel-cli
npm install babel babel-cli -g
// 6.0版本之前的直接安装babel即可
npm install babel -g
```

## 目录说明

- `app`使用jsx语法编写的源码
- `build`使用babel编译后的js文件
- `vendors`下载的第三方资源
- `demos`html示例文件
