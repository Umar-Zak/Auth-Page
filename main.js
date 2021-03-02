const container = document.getElementById("container")

const toggles = document.querySelectorAll(".toggle")

toggles.forEach((t) => {
    t.addEventListener("click", function (event) {
        event.preventDefault()
        container.classList.toggle("animate")
    })
})