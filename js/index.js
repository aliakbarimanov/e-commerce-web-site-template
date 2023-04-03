const previous = document.querySelector("#left-arrow");
const next = document.querySelector("#right-arrow");

let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];
let idx = -1;


function goSlider(){
    idx++;
    let imgSrc = images[idx];
    document.slide.src = "image/slide/" + imgSrc;

    if(idx > images.length-1){
        idx = -1;
    }
}

previous.addEventListener("click", ()=>{
    if(idx < 0){
        idx = 3;
    }

    idx--;
    let imgSrc = images[idx];
    document.slide.src = "image/slide/" + imgSrc;
    clearInterval(corusel);
    // setInterval("goSlider()", 2500);
});

next.addEventListener("click", ()=>{
    if(idx > images.length-1){
        idx = -1;
    }

    idx++;
    let imgSrc = images[idx];
    document.slide.src = "image/slide/" + imgSrc;
    clearInterval(corusel);
    // setInterval("goSlider()", 2500);
});


// window.onload = goSlider;