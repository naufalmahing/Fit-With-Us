document.getElementById("login").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "block";
})

document.getElementById("login1").addEventListener("click",function(){
    document.querySelector(".popup-register").style.display = "none";
    document.querySelector(".popup").style.display = "block";
})

document.getElementById("login2").addEventListener("click",function(){
    document.querySelector(".popup-forgot").style.display = "none";
    document.querySelector(".popup").style.display = "block";
})

document.getElementById("login3").addEventListener("click",function(){
    document.querySelector(".popup-forgot").style.display = "none";
    document.querySelector(".popup-reset").style.display = "none";
    document.querySelector(".popup").style.display = "block";
})

document.getElementById("forgot").addEventListener("click",function(){
    document.querySelector(".popup-forgot").style.display = "block";
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("reset").addEventListener("click",function(){
    document.querySelector(".popup-reset").style.display = "block";
    document.querySelector(".popup-forgot").style.display = "none";
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("register").addEventListener("click",function(){
    document.querySelector(".popup-register").style.display = "block";
    document.querySelector(".popup").style.display = "none";
})