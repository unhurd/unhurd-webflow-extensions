document.addEventListener("DOMContentLoaded", () => {
    console.log("hello light")

    const lightboxLinks = [...document.querySelectorAll(".lightbox-link")];
    
    function openLightbox(e){
        e.preventDefault();
        const lightbox = e.currentTarget.nextSibling;
        console.log(lightbox)
        lightbox.style.display = "flex";
    }

    lightboxLinks.forEach((link) => {
        link.querySelector(".cc-open").addEventListener("click", openLightbox)
    })
})