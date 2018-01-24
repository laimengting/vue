class Dialog{
	constructor(title = "标题党", content = "要冻死 手没知觉了") {
        this.title = title;
        this.content = content;
        this.init();
	}
	init() {
		this.createMark();
	}

    // 点击X 或确定隐藏
    hide() {
        let mark = document.querySelector('.mark');
        console.log(mark)
        mark.style.display = 'none';
    }

    addEvent() {
        let span = document.querySelector('.span1');
        let btn1 = document.querySelector('.btn1');
        console.log(span)
        span.addEventListener('click', (event) => {
            this.hide();
        })
        btn1.addEventListener('click', (event) => {
            this.hide();
        })
    }

	// 创建一个遮罩层
    createMark() {
        var mark = document.createElement('div');
        mark.className = 'mark';

        let wrap = this.createWrap();
        mark.append(wrap);
        let p = this.createTitle();
        wrap.append(p);
        let content = this.createContent();
        wrap.append(content);
        let button1 = this.createButton1();
        content.append(button1);
        let button2 = this.createButton2();
        content.append(button2);
        document.body.append(mark);
        this.addEvent();
    }

    //创建一个盒子
    createWrap() {
        let wrap = document.createElement("div");
        wrap.className = "dialog";
        return wrap;
        
    }

    // 创建一个标题
    createTitle() {
        let p = document.createElement('p');
        p.className = 'dialog-title';
        p.innerHTML = this.title;
        let span = document.createElement('span');
        span.innerHTML = 'X';
        span.className = 'span1';
        p.append(span);
        return p;
    }

    //创建一个content
    createContent() {
        let content = document.createElement("div");
        content.className = "dialog-content";
        content.innerHTML = this.content;
        return content;
    }

    createButton1() {
        let button1 = document.createElement('button');
        button1.className = 'btn1';
        button1.innerHTML = '确定';
        return button1;
    }

    createButton2() {
        let button2 = document.createElement('button');
        button2.className = 'btn2';
        button2.innerHTML = '取消';
        return button2;
    }
}
let dialog = new Dialog();
