const submit = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you")

let val = ""

document.body.addEventListener("click", (e) => {
    if(e.target.type == "button") {
        val = e.target.value;
    } 
})

submit.addEventListener("click", (e) => {
    if(val !== "") {
        form.classList.add("hidden")
        thankYou.classList.remove("hidden")
        rating.innerText = val
    } else {
        e.preventDefault;
    }
})
