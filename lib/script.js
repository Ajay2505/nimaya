
const linkedImagesWrapper = document.querySelector(".linkedImagesWrapper");
if (linkedImagesWrapper) {
    const hoverLinksWrapper = linkedImagesWrapper.querySelectorAll(".hoverLinksWrapper .step");
    const hoverImages = linkedImagesWrapper.querySelectorAll(".hoverImagesWrapper img");
    if (hoverLinksWrapper && hoverImages) {
        hoverLinksWrapper.forEach((link,idx) => {
            link.addEventListener("mouseenter", () => {
                const activeImg = linkedImagesWrapper.querySelector(".hoverImagesWrapper img:not(.d-none)");
                const activeStep = linkedImagesWrapper.querySelector(".hoverLinksWrapper .step.active");
                if (activeStep) {
                    activeStep.classList.remove("active");
                }
                link.classList.add("active");
                if (activeImg) {
                    activeImg.classList.remove("active");
                    activeImg.classList.add("d-none");
                }
                hoverImages[idx].classList.remove("d-none");
                setTimeout(() => {
                    hoverImages[idx].classList.add("active");
                }, 50);
            });
        })
    }
}


window.addEventListener('scroll', () => {
    const backToTop = document.querySelector(".backToTop");
    if (backToTop) {
      if (window.scrollY >= 100) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    }
});