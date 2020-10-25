let imArr = document.querySelectorAll(".img");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;




document.addEventListener("mousemove", function(e){
 mousePos(e);
   
})

function mousePos(e){
    moveXAmount = e.pageX - prevX;
    moveYAmount = e.pageY - prevY;

    moveImg(moveXAmount, moveYAmount);


    prevX = e.pageX;
    prevY = e.pageY;
}

function   moveImg(xAmount, yAmount);


igmArr.forEach(function(img){
    let movementStrength = 5 + (math.random()  * 15);
    img.style.left = (img.offsetleft) - (xAmount/movementStrength) + "px";
    img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px" ;
})

