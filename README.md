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

### layout ###
app布局控制

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

## 后续任务 ##

### 特征示例 ###
example，home。完成

### 布局示例 ###
navbar, sideMenu。完成

### build出web与client ###
目标：web与client均可用

### axios ###
已经验证

### react-router ###
已经验证

### redux ###
已经验证

### HoC ###
已经验证

### 使用实际管理项目验证一下 ###
准备用一个实际管理项目验证一下。以便完善整体结构。
  * 经过实战之后发现不靠谱。

### package ###
  * 根据app.js构建出导出包
  * 这个比较麻烦，直接在index.js里export出app.js中的内容即可。问题在于导出包可能过大，需要优化webpack内容，复杂性不确定（通过重新梳理，定制webpack.config一定可以做到预期效果）。

### 配置导出 ###
  * 根据引入内容生成导出包的相应设置文件。
  * 导出包优先修改后的配置文件
  * 原来的设想是在前端上处理数据转换，但是比较麻烦。
  * 感觉用一个代理服务处理数据转换似乎更加合理一些，也好操作。

## 重新规划 ##
  * 目前的内容都需要
  * 异步数据加载，不能放在组件的componentDidMount等方法内。需要放在路由切换上在事件之前或者之后处理（这里还有个问题，如果使用browserRouter，路径更改需要服务端处理，这里的路由是否还有相应事件需要验证。猜测变更后事件还有，）

