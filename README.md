# requirejs-example
bootstrap + less + requirejs + grunt 开发环境实例

## 环境搭建

*   安装Node [[下载地址]](https://nodejs.org/)

    *   点install下载安装包
    *   安装完成后打开cmd
    *   输入 `node -v` 回车，返回版本信息说明安装成功了
    *   Nodejs已经内置Npm包管理器了，`npm -v` 查看npm版本信息
*   全局安装Grunt

    *   在cmd中输入 `npm install -g grunt` 回车，就会自动安装grunt
*   安装Winless [[下载地址]](http://winless.org/)

    *   打开winless,点击Add folder，选中 dev/less 目录，确定
    *   右边列表里只选中style.less
    *   去掉minify选项

## 启动项目

*   下载项目代码 [[下载地址]](https://github.com/93html/requirejs-example/)
*   打开cmd工具，cd进项目根目录
    		`d:` `cd work/amd`
*   安装npm依赖 `npm install`
*   编译项目 `grunt`
