# my-learn-react
自己学习react.js写的demo
##react+webpack开发环境
    npm init 生成 `package.json` 文件
    安装webpack和webpack-dev-sever
        使用npm install webpack webpack-dev-server -g 全局安装
        使用npm install webpack webapck-dev-server --save-dev直接作为项目的依赖
###安装配置`Babel`
#####1.安转Babel loader
            npm install babel-core --save-dev<br>
            npm install babel-loader --save-dev<br>
            npm install babel-preset-es2015<br>
            npm install babel-react<br>
#####2.配置.babelrc 文件<br>
            在根目录下面创建一个`.babelrc `文件，内容是一段json数据,如下: { "presets": ["es2015", "react"] }
###配置`webpack.config.js`
        新建一个名为webpack.config.js的配置文件，如代码中的文件
###配置启动命令
        在package.json文件中添加:<br>
        "scripts":{<br>
        "build": "webpack",<br>
        "dev": "webpack-dev-server --hot"}
