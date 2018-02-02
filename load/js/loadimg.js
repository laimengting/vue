/*// ajax
let getJson = (url) => {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open("GET", url);
        xml.onreadystatechange = function() {
            if (xml.readyState !== 4) return;
            if (xml.status == 200) {
                resolve(xml.responseText)
            } else {
                reject("error")
            }
        }
        xml.send(null);
    });
}*/
// 动态创建图片
let createImage = (path) => {
	return new Promise((resolve, reject) => {
		let oImg = new Image();
		oImg.onload = function () {
			resolve(path);
		}
		oImg.onerror = function () {
			reject('can error');
		}
		oImg.src = path;
		wrap.append(oImg)
		//return oImg;
	})
	return new Promise((resolve, reject) => {
        let oImg = new Image();
        oImg.onload = function() {
            resolve(oImg);
        }
        oImg.onerror = function() {
            reject("can't find image source");
        }
        oImg.src = path;
        wrap.append(oImg);
    });
}
// 循环遍历 插入到wrap中
let loadImgage = (imgaeArray, wrap) => {
	imgaeArray.map((item, index) => {
		createImage(item.url, wrap);
	})
}

/*let getJson = (url) => {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open("GET", url);
        xml.onreadystatechange = function() {
            if (xml.readyState !== 4) return;
            if (xml.status == 200) {
                resolve(xml.responseText)
            } else {
                reject("error")
            }
        }
        xml.send(null);
    });
}
let createImage = (path) => {
    return new Promise((resolve, reject) => {
        let oImg = new Image();
        oImg.onload = function() {
            resolve(path);
        }
        oImg.onerror = function() {
            reject("can't find image source");
        }
        oImg.src = path;
        wrap.append(oImg);
    });

}

let loadImgage = function(imagesArray, wrap) {
    imagesArray.map((item, index) => {
        createImage(item.url, wrap);

    });
}*/