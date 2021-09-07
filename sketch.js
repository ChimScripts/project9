var btn_red;
var btn_green;


function setup() {
    createCanvas(200, 200)
    //background(0)
    btn_red = createButton("red")
    btn_red.position(100, 100)
    btn_green = createButton("green")
    btn_green.position(100, 170)
    
}

function redbg() {
    console.log("redbg.call")
    background(255,0,0)
}
function greenbg() {
    background(0,255,0)
}



function draw() {
    // background("black")
    btn_red.mouseClicked(redbg);
    btn_green.mouseClicked(greenbg)
}