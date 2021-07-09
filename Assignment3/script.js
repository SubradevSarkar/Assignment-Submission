const input = document.querySelector("#name")
const submitBtn = document.querySelector("#submit-btn")
const text = document.querySelector("#text")


function submit() {
    text.innerHTML = "Hello my name is " + input.value
}