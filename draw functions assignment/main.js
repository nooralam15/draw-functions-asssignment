// main JS code for the draw fuctions assignment 

// setting up the canvas 
let cnv= document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600

// draw a star with top-left corner (x,y), width(h), height(h), line thickness and color
function drawStar(x, y, w, h, thick, color) {
    lineWidth(thick)
    stroke(color)
    triangle(x, y + h/3, x + w, y + h/3, x + w/2, y + h * 0.8 ) // center triangke 
    line(x, y + h, x + w/2, h) //diagnal line on the left 
    line(x + w, y + h, x + w/2, h) //diagnal line on the right
    line(x, y + h, x + w/2, y + h * 0.8) // small diagnol line on the left connecting to the tip of the triangle
    line(x + w, y + h, x + w/2, y + h * 0.8) // small diagnol line on the right connecting to the tip of the triangle
}

drawStar(300, 100, 90, 100, 4, "red")
drawStar(200, 100, 50, 100, 2, "green")
drawStar(300, 200, 80, 200, 3, "orange")


//draw a platform with top-left corner(x,y), width (w), height(h), and colors
function drawPlatform(x, y, w, h, colorTop, colorBottom) {
    fill(colorTop)
    rect(x, y, w, h/2.5) //top rectangle
    fill(colorBottom)
    rect(x, y + h/2.5, w, h) //bottom rectangle   
}

drawPlatform(100, 300, 100, 20, "cyan", "blue")
drawPlatform(500, 300, 200, 50, "brown", "green")
drawPlatform(500, 400, 200, 25, "pink", "orange")
