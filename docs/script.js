/*                             Custom-Cursor                     */

document.addEventListener('mousemove', function(e) {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
})


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
    for (let i = 1; i <= 298; i++) {
        data.push(`/HomePage/Image${i}.jpg`);
    }
    return data;
}

const frameCount = 298;
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
        y:"200%",
        opacity:0,
        ease:Power4,
        scrollTrigger:{
           trigger:"#home",
           scrub:true,
           scroller:"body",
           markers:true,
           start:"bottom 100%",
         
        }
   })
}
hompageheading()
                 // homepage text animation

//                               For responsive nav


const burgerIcon = document.querySelector('.burger-icon');
const openedMenu = document.getElementById('Opened-menu');

burgerIcon.addEventListener('click', () => {
    if (burgerIcon && openedMenu) {
        burgerIcon.addEventListener('click', () => {
            openedMenu.classList.toggle('hidden');
            openedMenu.classList.toggle("show");

            if (openedMenu.classList.contains('hidden')) {
                console.log("hidden");
            } else {
                console.log("show");
            }
        });
    } else {
        console.error('Burger icon or opened menu element not found');
    }
});

window.addEventListener('scroll',function () { 
    var Header = this.document.querySelector('#The-Nav-Bar')
    Header.classList.toggle('sticky',this.window.scrollY > 0)
 })



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
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/vdio/bw.mp4" class="h-[70%] w-[100%]"></video>`
})
ht.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/vdio/HT.mp4" class="h-[70%] w-[100%]"></video>`
})
fn.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/vdio/fn.mp4" class="h-[70%] w-[100%]"></video>`
})
bs.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/vdio/bs.mp4" class="h-[70%] w-[100%]"></video>`
})
ttoi.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/vdio/TTOI.mp4" class="h-[70%] w-[100%]"></video>`
})


// const linkss = document.querySelectorAll('#Text-div h2');

// linkss.forEach((link, index) => {
//   gsap.set(link, { opacity: 0.5, y: '-10px' });

//   gsap.from(link, { opacity: 0, y: '-10px', duration: 5, delay: index * 0.2 });
// });

document.querySelectorAll('.card-category').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.closest('.card').classList.add('glow');
  });
  item.addEventListener('mouseleave', () => {
      item.closest('.card').classList.remove('glow');
  });
});
//bestseller

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

// animation on scroll disables for mobile
AOS.init({disable: 'mobile'});
AOS.init({disable: 'tablet'});
