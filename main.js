
var last_x = "";
var last_y = "";
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
var width = screen.width;
var new_width = width - 70
var new_height = - 300
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


 canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(E)
 {
     color = document.getElementById("color").value;
     width_of_line = document.getElementById("width_of_line").value;

     last_x = E.touches[0].clientX - canvas.offsetLeft;
     last_y = E.touches[0].clientY - canvas.offsetTop;
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(E)
 {
     new_x = E.clientX - canvas.offsetLeft;
     new_y = E.clientY - canvas.offsetTop;

     if (mouseEvent == "mousedown") {
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.moveTo(last_x, last_y);
         ctx.lineTo(new_x, new_y);
         ctx.stroke();
        
     }
         last_x = new_x;
         last_y = new_y;

 }

 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(E)
 {
     mouseEvent = "mouseleave";
 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(E)
 {
     mouseEvent = "mouseUp";
 }

 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(E)
 {
     new_x = E.touches[0].clientX - canvas.offsetLeft;
     new_y = E.touches[0].clientY - canvas.offsetTop;

    
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;

         console.log("Last position of x and y coordinates = ");
         console.log("x = " + last_x + "y = " + last_y);
         ctx.moveTo(last_x, last_y);

         console.log("current position of x and y coordinates = ");
         console.log("x = " + new_x + "y = " + new_y);
         ctx.lineTo(new_x, new_y);
         ctx.stroke();

     last_x = new_x;
     last_y = new_y;
 }

function on_click()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}