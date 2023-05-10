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

let openResume = document.getElementById("resume-button-1");
    
    openResume.addEventListener("click", () => {

    window.open('https://drive.google.com/file/d/1o5aVoIEX1jvMv0Rc4FA6M-fdkuSlXnmp/view?usp=share_link', '_blank'); 
    
   })

   let openResumetwo = document.getElementById("resume-link-2");
    
    openResumetwo.addEventListener("click", () => {
       
            window.open('https://drive.google.com/file/d/1o5aVoIEX1jvMv0Rc4FA6M-fdkuSlXnmp/view?usp=share_link', '_blank'); 
    
        
   })