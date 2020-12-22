const btn= document.querySelector("#btn");
const container=document.querySelector(".container");
btn.addEventListener("click" , () => {
    createnotification();
});
function createnotification() {
    const notify = document.createElement("div");
    notify.classList.add("toast");
    notify.innerText="These Notifications are crazy!";
    container.appendChild(notify);
    setTimeout(() => {
        notify.remove();
    },6000);
}
const Text=document.getElementById("Text");
const text="Click on this button and you will get notifications.I know this is crazy but still XD.";
let index=0;
function writeText(){
    Text.innerText= text.slice(0, index);
    Text.classList.add("design");
    index++;
    if(index > text.length-1){
        index=0;
    }
}
setInterval(writeText, 150);