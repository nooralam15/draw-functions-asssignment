// graphics library for the draw functions assigment 

//function for line width 
function lineWidth(thick) {
    ctx.lineWidth = thick
}

//function for stroke color 
function stroke(color) {
    ctx.strokeStyle = color
}

//function for fill color 
function fill(color) {
    ctx.fillStyle = color
}

//draw a lime segment from x1,y1, to x2,y2
function line(x1, y1, x2, y2 ) { 
    console.log(x1, y1, x2, y2 )
    ctx.beginPath();
    ctx.moveTo(x1, y1); //endpoint 1 
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke()
}

// function for triangles 
function triangle (x1, y1, x2, y2, x3, y3) {

    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.closePath()
    ctx.stroke()    
}

//draw a fill rectangle with a top left corner (x,y) a width of w, and height
function rect(x, y, w, h) {
    ctx.fillRect(x,y,w,h)  
}