// optional tracking for telegram join button

document.querySelector(".btn").addEventListener("click", function(){
if(typeof fbq !== "undefined"){
fbq('track','Lead');
}
});
