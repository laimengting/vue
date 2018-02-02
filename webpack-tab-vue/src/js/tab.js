// 数据
let config = {
	tits = ["one", "two", "three"],
	conts = ["one", "two", "three"]
}
class Tab{
	constructor(titles, contents){
		this.titles = titles | config.tits;
		this.contents = contents | config.conts;
		this.init();
	}
	// 实例化
	init () {
		this.createWrap();
		this.addEvent();
	}
	// 绑定事件
	addEvent() {
		let tli = document.querySelectorAll('ol li');
		let cli = document.querySelectorAll('ul li');
		[...tli].map((item, index, arr) => {
			item.addEventListener('click', (event) => {
				this.addAct(item, arr);
				[...cli].map((item, index, arr) => {
					item.style.display = 'none';
				})
				cli[index].style.display = 'block';
			})
		})
		
	}
	// 添加高亮显示
	addAct(item, arr) {
		[...arr].map((item) => {
			item.className = "";
		})
		item.className = 'active';
	}
	// 创建大盒子
	createWrap() {
		let wrap = document.createElement('div');
		wrap.className = 'wrap';

		let ol = this.createTitle();
		wrap.append(ol);
		let ul = this.createContent();
		wrap.append(ul);
		document.body.append(wrap);
	}
	// 创建标题
	createTitle() {
		let ol = document.createElement('ol');
		this.titles.map((item, index, arr) => {
			let li = document.createElement('li');
			li.innerHTML = item;
			ol.append(li);
		}) 
		return ol;
	}
	// 创建content
	createContent() {
		let ul = document.createElement('ul');
		tits.map((item, index, arr) => {
			let li = document.createElement('li');
			li.innerHTML = item;
			ul.append(li);
		}) 
		return ul;
	}
}
export default Tab;