canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

r_height=100;
r_width=100;

r_xpos=10;
r_ypos=10;

r_image="rover.png";
bg_image="mars.jpg";

function add()
{
  bg=new Image();
  bg.onload=uploadBg;
  bg.src=bg_image;

  rover=new Image();
  rover.onload=uploadRover;
  rover.src=r_image;
}

function uploadBg()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover,r_xpos,r_ypos,r_height,r_width);
}

window.addEventListener("Keydown", my_keydown);
function my_keydown(e)
{
   Kpress=e.keyCode;
   console.log(Kpress);

   if(Kpress=='37')
   {
       Left();
       console.log("left arrow is pressed");
   }

   if(Kpress=='38')
   {
       up();
       console.log("up arrow is pressed");
   }

   if(Kpress=='39')
   {
       Right();
       console.log("right arrow is pressed");
   }

   if(Kpress=='40')
   {
       Down();
       console.log("down arrow is pressed");
   }
}


