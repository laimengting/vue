let arr = ['one', 'two', 'three', 'four'];
let data = [{ 'one': ['one'] }, { 'two': ['two'] }, { 'three': ['three'] }, { 'four': ['four'] }]
class Tab {
    constructor() {
        this.init();
    }
    init() {
        this.createBox();
    }
    createBox() {
        let box = document.createElement('div');
        box.className = 'box';
        box.id = 'box';
        document.body.appendChild(box);
        this.createTitle();
    }
    createTitle() {
        let box = document.getElementById('box');
        let title = '<ul id="top">';
        for (let i = 0, len = arr.length; i < len; i++) {
            if (i == 0) {
                title += `<li class='active'>${arr[i]}</li>`;
            } else {
                title += `<li>${arr[i]}</li>`;
            }
        }
        title += '</ul><div id="show" class="center"></div>';
        box.innerHTML = title;
        this.clickHighlighting();
    }
    clickHighlighting() {
        let listTitle = document.getElementById('top').getElementsByTagName('li');
        let show = document.getElementById('show');
        show.innerHTML = data[0]['one'];
        for (let i = 0, length = listTitle.length; i < length; i++) {
            listTitle[i].onclick = function() {
                for (let j = 0, len = listTitle.length; j < len; j++) {
                    listTitle[j].className = '';
                }
                listTitle[i].className = 'active';
                show.innerHTML = data[i][listTitle[i].innerText];

            }
        }
    }
}

new Tab();

/*window.onload = function (){
	var t1 = new Tab();
	t1.init();
}
function Tab(){
	this.oParent = document.getElementById('div1');
	this.aBtn = this.oParent.getElementsByTagName('input');
	this.aDiv = this.oParent.getElementsByTagName('div');
}
Tab.prototype.init = function (){
	var This = this;
	for(var i=0; i<this.aBtn.length; i++){
		this.aBtn[i].index = i;
		this.aBtn[i].onclick = function (){
			This.change(this);
		};
	}
}
Tab.prototype.change = function (obj){
	for(var i=0; i<this.aBtn.length; i++){
		this.aBtn[i].className = ''
		this.aDiv[i].style.display = 'none';
	}
	obj.className = 'active';
	this.aDiv[obj.index].style.display = 'block';
}*/