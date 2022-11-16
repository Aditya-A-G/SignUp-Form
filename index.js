const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");
const html = document.querySelector(":root");
console.log(html)

pwd.addEventListener("keyup", verifyPassword)
cpwd.addEventListener("keyup", verifyPassword);

function verifyPassword(e){

    console.log(pwd.value.length);
    if(pwd.value.length >= 8 && cpwd.value.length >= 8){
        if(pwd.value == cpwd.value){
            pwd.style.cssText= "border-color: hsl(317 100% 54%)";
            cpwd.style.cssText= "border-color: hsl(317 100% 54%)";
            html.style.setProperty('--opacity', 0.9);
        }else{
            pwd.style.cssText= "border-color: #2afadf";
            cpwd.style.cssText= "border-color: #2afadf";
            html.style.setProperty('--opacity', 0);
        }
        
    }else{
            pwd.style.cssText= "border-color: #2afadf";
            cpwd.style.cssText= "border-color: #2afadf";
            html.style.setProperty('--opacity', 0);
    }
}