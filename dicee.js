var num=Math.floor(Math.random()*6)+1
var src1= "./images/"+"dice"+num+".png"
document.querySelectorAll("img")[0].setAttribute("src",src1)

var num1=Math.floor(Math.random()*6)+1
var src2= "./images/"+"dice"+num1+".png";
document.querySelectorAll("img")[1].setAttribute("src",src2);

if(num1>num)
{
    document.querySelector("h1").innerHTML="Player 2 win";
}
else if (num1==num)
{
    document.querySelector("h1").innerHTML="tie";
}
else
{
    document.querySelector("h1").innerHTML="player 1 win";
}




