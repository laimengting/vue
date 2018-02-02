vue+webpack

app.js使用.vue

1、先完成.vue模板开发
2、设置别名，解析.vue文件
resolve:{
	alias:{
	".vue$":"vue/dist/vue.ems.js"
}
3、下载vue-loader  vue-template-compiler vue-style-loader
4、app.js 引入 app.vue
5、

new Vue({
	el:"",
	render:h=>h(app)
});


render方法：
1. render方法的实质就是生成template模板； 
2. 通过调用一个方法来生成，而这个方法是通过render方法的参数传递给它的； 
3. 这个方法有三个参数，分别提供标签名，标签相关属性，标签内部的html内容 
4. 通过这三个参数，可以生成一个完整的木模板


