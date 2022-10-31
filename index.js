let images = ["/image/coffee1.jpg", "/image/coffee2.jpg", "/image/coffee3.jpg"]
let contents = ["The long and winding road", "Happy trees", "Funky roots"]


let num = 0;

function next() {
    let slide = document.getElementById("slide-img");
    let content = document.getElementById("img-name")
    num++;
    if(num >= images.length) num = 0;
    slide.src = images[num];
    content.innerHTML = contents[num];
}

function prev() {
    let slide = document.getElementById("slide-img")
    let content = document.getElementById("img-name")
    num--;
    if(num < 0) num = (images.length - 1);
    slide.src = images[num];
    content.innerHTML = contents[num];
}

function change1() {
    let slide = document.getElementById("slide-img");
    let content = document.getElementById("img-name");
    let background1 = document.querySelector('#change-point-1');
    let background2 = document.querySelector('#change-point-2');
    let background3 = document.querySelector('#change-point-3');
    num = 0;
    slide.src = images[num];
    content.innerHTML = contents[num];
    background1.style.backgroundColor = 'red';
    background2.style.backgroundColor = 'black';
    background3.style.backgroundColor = 'black';
}

function change2() {
    let slide = document.getElementById("slide-img");
    let content = document.getElementById("img-name");console.clear();
    let background1 = document.querySelector('#change-point-1');
    let background2 = document.querySelector('#change-point-2');
    let background3 = document.querySelector('#change-point-3');
    num = 1;
    slide.src = images[num];
    content.innerHTML = contents[num];
    background1.style.backgroundColor = 'black';
    background2.style.backgroundColor = 'red';
    background3.style.backgroundColor = 'black';
}

function change3() {
    let slide = document.getElementById("slide-img");
    let content = document.getElementById("img-name");
    let background1 = document.querySelector('#change-point-1');
    let background2 = document.querySelector('#change-point-2');
    let background3 = document.querySelector('#change-point-3');
    num = 2;
    slide.src = images[num];
    content.innerHTML = contents[num];
    background1.style.backgroundColor = 'black';
    background2.style.backgroundColor = 'black';
    background3.style.backgroundColor = 'red';
}