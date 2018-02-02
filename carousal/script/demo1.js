class lunBo {
    constructor(type) {
        this.tyle = type;
        this.banner = document.querySelector('.banner');
        this.btnl = document.querySelector('.btnl');
        this.btnr = document.querySelector('.btnr');
        this.lis = document.querySelectorAll('ul>li');
        this.ols = document.querySelectorAll('ol>li');
        this.leftClick();
        this.rightClick();
        this.pagaination();
        this.autoPlay();
        this.overout();
        this.cont = 0;
        this.timer = null;
    }
    leftClick() {
        var that = this;
        this.btnl.onclick = () => {
            that.cont--;
            if (that.cont < 0) {
                that.cont = that.lis.length - 1;
            }
            console.log(that.cont);
            that.hide(that.cont);
        }
    }
    rightClick() {
        var that = this;
        this.btnr.onclick = () => {
            that.cont++;
            if (that.cont > that.lis.length - 1) {
                that.cont = 0;
            }
            console.log(that.cont)
            that.hide(that.cont)
        }
    }
    hide(cont) {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].style.display = "none";
            this.ols[i].style.background = "rgba(255,255,255,.5)";
        }
        this.lis[cont].style.display = "block";
        this.ols[cont].style.background = "#f60";
    }
    pagaination() {
        var that = this;
        for (let i = 0; i < this.ols.length; i++) {
            this.ols[i].onclick = function () {
                that.cont = i;
                that.hide(that.cont);
            }
        }
    }
    autoPlay() {
        var that = this;
        this.timer = setInterval(() => {
            that.cont++;
            if (that.cont > that.lis.length - 1) {
                that.cont = 0;
            }
            that.hide(that.cont);
        }, 1000)
    }
    overout() {
        var that = this;
        this.banner.onmouseover = () => {
            clearInterval(that.timer);
        }
        this.banner.onmouseout = () => {
            that.autoPlay();
        }
    }
}
new lunBo();