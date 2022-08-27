const submit = document.querySelector("#submit-btn")
const preview = document.querySelector(".preview")
const result = document.querySelector(".result")

submit.addEventListener("click", () => {
    preview.style.display = "none"
    result.style.display = "block"
})

// prevent form submit
const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})
