
let imageDiv = document.getElementById('IMG');
let imageDiv2 = document.getElementById('IMG2');
let links = document.querySelectorAll('#Text-div a');
let txtdiv = document.getElementById('Text-div')
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    imageDiv.classList.add('reveal');
    imageDiv.classList.remove('hidden');
    imageDiv2.classList.add('hidden');

  });

  link.addEventListener('mouseleave', () => {
    imageDiv.classList.remove('reveal');
  });
});
txtdiv.addEventListener('mouseleave', function () {
  imageDiv.classList.add('hidden');
  imageDiv2.classList.remove('hidden');
})

let bw = document.getElementById('BW');
let fn = document.getElementById('FN');
let ht = document.getElementById('HT');
let bs = document.getElementById('BS');
let ttoi = document.getElementById('TTOI');

bw.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/bw.mp4" class="h-[100%] w-[100%]"></video>`
})
ht.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/HT.mp4" class="h-[100%] w-[100%]"></video>`
})
fn.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/fn.mp4" class="h-[100%] w-[100%]"></video>`
})
bs.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/bs.mp4" class="h-[100%] w-[100%]"></video>`
})
ttoi.addEventListener('mouseenter', function () {
  imageDiv.innerHTML = `<video loop muted autoplay src="/Devinja-ReimagineRound1/Video/TTOI.mp4" class="h-[100%] w-[100%]"></video>`
})


const linkss = document.querySelectorAll('#Text-div a');

linkss.forEach((link, index) => {
  gsap.set(link, { opacity: 0.5, y: '-10px' });

  gsap.from(link, { opacity: 0, y: '-10px', duration: 5, delay: index * 0.2 });
});
