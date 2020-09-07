项目以 [Create React App](https://github.com/facebook/create-react-app) 创建.

## 可用脚本

在这个项目下，可以执行一下脚本

### `yarn start`

启动服务<br />
在浏览器打开 [http://localhost:3000](http://localhost:3000) 查看运行结果

如果编辑了内容，这个页面回自动加载新内容.<br />
在控制台可以看到相关的输出。

### `yarn test`

测试内容.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

构建app，以src/index.js为入口。<br />
独立部署时请用这种方式构建项目。

### `yarn pkg` ###

构建package，以src/App.js为入口。<br />
其他包关联引入时，请用这种方式构建项目。
注：目前只是一个构思，还没有实现。

### `yarn eject`

如果不清楚，就别用。

### yarn release ###
构建electron内容,并发布到相应的app-store。Linux下会发布到snap上。
呃，如果没有发布需要，请使用yarn electron:build命令来处理。然后手动处理相应的包内容。

## 学习内容。
如果有兴趣或者需要，请研究。

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 项目结构 ##

### build ###
入口文件src/index.js构建后的目录. 目标文件build/main.js。

### dist ###
eletron以build/mainjs为入口构建的client

### .env .env.* ###
我也不知道干什么用的，应该是electron需要的内容。搞清楚后，会处理的。

### .git .git* ###
git 相关的内容

### node_modules ###
引入的外部包。

### package.json ###
项目设置文件

### preload.js ###
electron相关的内容，没有搞清楚。搞清楚后，会处理的。

### public ###
公共资源

### README.md ###
你现在看的就是

### src ###
App的实现代码

### 其他 ###
  * tsconfig.json TypeScript的格式设置
  * yarn-error.log package via yarn的错误信息
  * yarn.lock package via yarn的约束

## src 结构 ##
  * *.test.js 测试代码
  * App.js功能实现代码,package入口
  * index.js访问代码，project入口
  * assets资源文件：images,fonts,css,
  * bricks组件文件
  * electron相关的代码
  * meta元数据文件：string
  * reducers.js redux汇总
  * router.js 路由汇总
  * react-app-env.d.ts不知道用途。
  * serviceWorker.js这个可能干掉，不然electron可能不能正确运行。需要进步学习，才能处理。
  * setupTests.js不知道用途。
  * features业务逻辑实现

### index.js ###
访问入口，如果需要增加界面布局内容（navbar，sideMenu等），请在这里增加。

### App.js ###
业务功能实现入口。

### features/index.js ###
功能汇总

### features/example ###
使用示例
