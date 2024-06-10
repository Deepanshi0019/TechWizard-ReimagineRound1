/*                                 Home-Page CSS             */

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
    for (let i = 164; i <= 255; i++) {
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
        scrub: true,
        trigger: "#home",
        start: "bottom 100%",
    },
});

dom();

function hompageheading(){
    gsap.from("#home .text-content",{     // 
        y:"500%",
        opacity:0,
        ease:Power4,
        scrollTrigger:{
           trigger:"#home .text-content",
           scrub:true,
           scroller:"body",
           
           start:"bottom 50%",
        }
   })
}
hompageheading()     // homepage text animation

//                               For responsive nav


document.addEventListener('DOMContentLoaded', (event) => {
    const burgerIcon = document.querySelector('.burger-icon');
    const openedMenu = document.getElementById('Opened-menu');

    burgerIcon.addEventListener('click', () => {
        if (openedMenu.classList.contains('hidden')) {
            openedMenu.classList.remove('hidden');
        } else {
            openedMenu.classList.add('hidden');
        }
    });
});


/*                                 Home-Page CSS Ends Here            */


//                                   LifeStyle

function LifeStyleAnime() {
    document.querySelectorAll('.life1').forEach(function(el) {
        el.addEventListener('mousemove', function(dets) {
            gsap.to(this.querySelector('.img-life'), {
                display: 'block', // Ensure the element is visible
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                y: gsap.utils.mapRange(0, window.innerWidth, -60, 60, dets.clientY),
                scale: 1.2, // Scale up for pop effect
                ease: Power4.easeOut,
                duration: 1.1
            });
        });
        el.addEventListener('mouseleave', function(dets) {
            gsap.to(this.querySelector('.img-life'), {
                opacity: 0,
                x: 0, // Reset position
                scale: 0.5, // Reset scale
                ease: Power4.easeOut,
                duration: 1.1,
                onComplete: () => {
                    this.querySelector('.img-life').style.display = 'none'; 
                }
            });
        });
    });
}

LifeStyleAnime();
    


//                                    LifeStyle Ends Here  




//                                      category and the press section by rahul
let imageDiv = document.getElementById('IMG');
let imageDiv2 = document.getElementById('IMG2');
let links = document.querySelectorAll('#Text-div h2');
let txtdiv = document.getElementById('Text-div');
var forHoverCards = document.querySelectorAll('.card-category')
var actualCard = document.querySelectorAll('.card')


imageDiv2.classList.add('reveal')
imageDiv.classList.add('hidden')

// links.addEventListener('mouseenter',function () { 
//   imageDiv2.classList.add('hidden');
//   imageDiv2.classList.remove('reveal');
//  })

//  links.addEventListener('mouseleave', () => {
//   imageDiv2.classList.remove('hidden');
//   imageDiv2.classList.add('reveal');
//   // imageDiv.classList.add('hidden');
// });

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    imageDiv.classList.add('reveal');
    imageDiv.classList.remove('hidden');
    imageDiv2.classList.add('hidden');
    imageDiv2.classList.remove('reveal');
    // imageDiv2.classList.add('hidden');

  });

  link.addEventListener('mouseleave', () => {
    imageDiv.classList.remove('reveal');
    imageDiv.classList.add('hidden');
    imageDiv2.classList.remove('hidden');
  imageDiv2.classList.add('reveal');
  });
});




let bw = document.getElementById('BW');
let fn = document.getElementById('FN');
let ht = document.getElementById('HT');
let bs = document.getElementById('BS');
let ttoi = document.getElementById('TTOI');

bw.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/bw.mp4" class="h-[70%] w-[100%]"></video>`
})
ht.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/HT.mp4" class="h-[70%] w-[100%]"></video>`
})
fn.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/fn.mp4" class="h-[70%] w-[100%]"></video>`
})
bs.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/bs.mp4" class="h-[70%] w-[100%]"></video>`
})
ttoi.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/TTOI.mp4" class="h-[70%] w-[100%]"></video>`
})


const linkss = document.querySelectorAll('#Text-div h2');

linkss.forEach((link, index) => {
  gsap.set(link, { opacity: 0.5, y: '-10px' });

  gsap.from(link, { opacity: 0, y: '-10px', duration: 5, delay: index * 0.2 });
});

document.querySelectorAll('.card-category').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.closest('.card').classList.add('glow');
  });
  item.addEventListener('mouseleave', () => {
      item.closest('.card').classList.remove('glow');
  });
});
//bestseller
var tl = gsap.timeline({scrollTrigger:{
    trigger:".bestsellers",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".text",{
    top: "-30%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "100%"
},'a')
.to("#card-two",{
    top: "45%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "100%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')
.to("#card-four",{
    top: "100%"
},'c')
.to("#card-four",{
    top: "57%"
},'d')
.to("#card-three",{
    width: "75%",
    height: "75vh"
},'d')

//pointer

var pics = document.querySelectorAll(".item img")
var pointer = document.querySelector(".pointer")
pics.forEach(function(image) {
    image.addEventListener("mousemove", function(dets){
        gsap.to(pointer, {
            x: dets.clientX,
            y: dets.clientY
        });
    });
    image.addEventListener("mouseenter", function(){
        gsap.to(pointer, {
            scale: 1,
            opacity: 0.8
        });
    });
    image.addEventListener("mouseleave", function(){
        gsap.to(pointer, {
            scale: 0,
            opacity: 0
        });
    });
});

//animations
var tl = gsap.timeline();
tl.from(".lft h1, .lft h3",{
    x:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3,
    scrollTrigger:{
        trigger:".lft h1, .lft h3",
        scroller:"body",
        start:"top -1%",
        end:"top 80%",
        scrub:3,
        // markers: true
    }
})
tl.from(".rgt .item",{
    y:50,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.5,
    scrollTrigger:{
        trigger:".lft h1, .lft h3",
        scroller:"body",
        start:"top 0%",
        end:"top 80%",
        scrub:3,
        // markers: true
    }
})
tl.from(".bestseller h1, .bestseller h4",{
    y:60,
    opacity:0,
    // delay:0.3,
    duration:0.6,
    stagger:0.5,
    scrollTrigger:{
        trigger:".bestseller h1, .bestseller h4",
        scroller:"body",
        start:"top 50%",
        end:"top 80%",
        scrub:2,
        // markers: true
    }
})
tl.from(".cont .box",{
    y:30,
    opacity:0,
    delay:0.6,
    duration:0.6,
    stagger:0.5,
    scrollTrigger:{
        trigger:".bestseller .cont",
        scroller:"body",
        start:"top 50%",
        end:"top 80%",
        scrub:2,
        // markers: true
    }
})
