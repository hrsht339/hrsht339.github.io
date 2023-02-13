var typed = new Typed(".autotype", {
    strings: ["Full Stack Web Developer", "Backend Developer", "Traveller"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
})

let theme = document.querySelector("#theme")

theme.addEventListener("change", () => {
    // alert("hii")
    document.body.classList.toggle("light")
})