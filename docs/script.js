
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