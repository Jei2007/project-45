var pcImg, pc
var bgImg

function preload() {
    pcImg = loadImage("pc.png")
    bgImg = loadImage("bg.jpg")
}

function setup() {
    createCanvas(displayWidth, displayHeight)
    
    pc = createSprite(displayWidth/2, displayHeight-200, 50, 60 )
    pc.addImage(pcImg)
    pc.scale = 0.6

    image(bgImg, -displayWidth, 0, displayWidth*2, displayHeight)


}

function draw() {

    if(keyDown === "A") {
        pc.velocityX = -2
    }

    if(keyDown === "D") {
        pc.x = pc.x + 2
    }

    drawSprites()
}