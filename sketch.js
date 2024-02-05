const cols = 16; //number of columns
const rows = 16; //number of rows
const spacing = 10; //spacing between rectangles

function setup() {
    createCanvas(1000, 800); //canvas width and height
    colorMode(HSB); //colour mode set to hue, saturation and brightness
    noLoop(); //draw function only called once
    noStroke(); //no border on the rectangles
}
  
function draw() {
    background(255);
    //variables for cell width and height
    let cellWidth = (width -(cols + 1) * spacing) / cols;
    let cellHeight = cellWidth / 2;

    //nested for loop to set up grid system
    for(let j = 0; j< rows; j++) {
        for(let i = 0; i < cols; i++) {
            let x = spacing + i * (cellWidth + spacing);
            let y = spacing + j * (cellHeight + spacing);
            fill(random(360), random(50, 100), random(10, 80))
            rect(x, y, cellWidth, cellHeight);
        }
    }
}