function preload() {
    
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480)
fill(255,0,0)
stroke(0,0,255)
    ellipse(16, 8, 55, 55);
    ellipse(335, 8, 55, 55);
    ellipse(335, 340, 55, 55);
    ellipse(16, 340, 55, 55);
}

function Snap() {
    save('Image.png');
}