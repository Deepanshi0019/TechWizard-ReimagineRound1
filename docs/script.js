let context;

function dom() {
    const canvas = document.querySelector("#home>canvas");
    context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });
}

function files() {
    let data = [];
    for (let i = 255; i >= 164; i--) {
        data.push(`/Devinja-ReimagineRound1/media/homa-page-images/Image${i}.jpg`);
    }
    return data;
}

const frameCount = 92;
const images = [];
const imageSeq = {
    frame: 0
};

const imagePaths = files();
let imagesLoaded = 0;

imagePaths.forEach((path, index) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
        imagesLoaded++;
      
        if (index === 0) {
            render();
        }
        if (imagesLoaded === imagePaths.length) {
          
        }
    };
    img.onerror = (e) => {
       
    };
    images.push(img);
});

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 1.8,
        pin: true,
        trigger: "#home",
    },
    onUpdate: render
});

function render() {
    if (images[imageSeq.frame]) {
        scaleImage(images[imageSeq.frame], context);
    }
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home canvas", {
    scrollTrigger: {
        scrub: 0.1,
        trigger: "#home",
        start: "bottom 100%",
    },
});

dom();