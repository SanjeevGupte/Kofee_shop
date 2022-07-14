
let c_counter = document.querySelector("#counter");
//console.log(c_counter);

if(localStorage.getItem("cartCount")){
    c_counter.innerHTML = localStorage.getItem("cartCount");
}
else{
    c_counter.innerHTML = 0;
}

function incrementCounter() {
    c_counter.innerHTML = parseInt(c_counter.innerHTML) + 1;
    localStorage.setItem("cartCount",c_counter.innerHTML);
}