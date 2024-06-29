document.addEventListener('DOMContentLoaded', function() {
    // Get the loader element
    const loader = document.getElementById('loader');
    
    // Get all image elements in the document
    const images = document.querySelectorAll('img');
    let loadedImagesCount = 0;

    // Function to check if all images are loaded
    function checkAllImagesLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === images.length) {
            // Hide the loader and show the content once all images are loaded
            loader.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling if it was disabled
        }
    }

    // Iterate over each image
    images.forEach((img) => {
        // If the image is already loaded from cache, increment the count
        if (img.complete) {
            checkAllImagesLoaded();
        } else {
            // Add event listeners for load and error events
            img.addEventListener('load', checkAllImagesLoaded);
            img.addEventListener('error', checkAllImagesLoaded); // Count errors as loaded
        }
    });

    // If there are no images, hide the loader immediately
    if (images.length === 0) {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});




function ClipPath() {
    // Set initial properties for the animation elements
    gsap.set(".products", { 
        clipPath: "circle(0% at 50% 50%)" // Initial clip-path is a small circle
    });

    // Create the timeline for the animation
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",    // Start the animation when the top of the home section hits the top of the viewport
            end: "bottom top",   // End the animation when the bottom of the home section hits the top of the viewport
            scrub: 1             // Smooth scrolling animation
        }
    });

    // Define the clip-path animation
    tl.to(".products", {
        clipPath: "circle(150% at 50% 50%)", // Expanding the clip-path to cover the section
        ease: "power2.out" // Smooth easing
    });
}

// Run the function to apply the animation
ClipPath();

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
        data.push(``);
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
           markers:false,
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



function resetAnimation(element, className) {
    element.classList.remove(className);
    void element.offsetWidth; 
    element.classList.add(className);
  }
  
  let imageDiv = document.getElementById('IMG');
  let imageDiv2 = document.getElementById('IMG2');
  let links = document.querySelectorAll('#Text-div h2');
  
  imageDiv2.classList.add('reveal');
  imageDiv.classList.add('hidden');
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      resetAnimation(imageDiv, 'reveal');
      resetAnimation(imageDiv2, 'hidden');
  
      imageDiv.classList.add('reveal');
      imageDiv.classList.remove('hidden');
      imageDiv2.classList.add('hidden');
      imageDiv2.classList.remove('reveal');
    });
  });
  
  let bw = document.getElementById('BW');
  let fn = document.getElementById('FN');
  let ht = document.getElementById('HT');
  let bs = document.getElementById('BS');
  let ttoi = document.getElementById('TTOI');
  
  bw.addEventListener('click', function () {
    imageDiv.innerHTML = `<video loop muted autoplay src="/vdio/bw.webm" class="h-[70%] w-[100%]"></video>`;
    resetAnimation(imageDiv, 'reveal');
  });
  
  ht.addEventListener('click', function () {
    imageDiv.innerHTML = `<video loop muted autoplay src="/vdio/HT.webm" class="h-[70%] w-[100%]"></video>`;
    resetAnimation(imageDiv, 'reveal');
  });
  
  fn.addEventListener('click', function () {
    imageDiv.innerHTML = `<video loop muted autoplay src="/vdio/fn.webm" class="h-[70%] w-[100%]"></video>`;
    resetAnimation(imageDiv, 'reveal');
  });
  
  bs.addEventListener('click', function () {
    imageDiv.innerHTML = `<video loop muted autoplay src="/vdio/bs.webm" class="h-[70%] w-[100%]"></video>`;
    resetAnimation(imageDiv, 'reveal');
  });
  
  ttoi.addEventListener('click', function () {
    imageDiv.innerHTML = `<video loop muted autoplay src="/vdio/TTOI.webm" class="h-[70%] w-[100%]"></video>`;
    resetAnimation(imageDiv, 'reveal');
  });
  



document.querySelectorAll('.card-category').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.closest('.card').classList.add('glow');
  });
  item.addEventListener('mouseleave', () => {
      item.closest('.card').classList.remove('glow');
  });
});
let CartInside = document.querySelector('#cartCounter')

let CartButton = document.querySelectorAll('.Cart-buttons');
var ProductInCart = 0;
CartButton.forEach(button => {
    button.addEventListener('click', function() {
        ProductInCart++;
        CartInside.innerHTML = `${ProductInCart}`
        CartInside.classList.toggle("cart-counter-update")
        
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