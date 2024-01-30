const btn = document.getElementById("my-button");
const voteDisplay = document.getElementById("count");

let countClick = 0;

btn.addEventListener("click", function(){
    countClick++;
    voteDisplay.innerHTML = countClick;
});