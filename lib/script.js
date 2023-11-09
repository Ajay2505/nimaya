
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

const selects = document.querySelectorAll("select");
if (selects && selects.length) {
    selects.forEach(select => {
        select.addEventListener("input", evt => {
            if (evt.target.value !== 0) {
                evt.target.classList.add("active");
            } else {
                evt.target.classList.remove("active");
            }
        });
    });
}


const registerForm = new Swiper(".registerForm", {
    allowTouchMove: false,
    // autoHeight: true,
});

document.querySelector("#registerForm button[type=submit]").addEventListener("click", () => {
    document.querySelector("#registerModal .modal-content").scrollTop = 0;
    registerForm.slideTo(1);
});

const gotToFirstSlide = () => {
    document.querySelector("#registerModal .modal-content").scrollTop = 0;
    registerForm.slideTo(0);
}

document.getElementById("registerModalBtn")?.addEventListener("click", gotToFirstSlide);
document.getElementById("backToRegister")?.addEventListener("click", gotToFirstSlide);

const inputImagesWrapper = document.querySelector(".inputImagesWrapper");
if (inputImagesWrapper) {
    const input = inputImagesWrapper.querySelector("#switchInput");
    // const imgSwitchWrapper = inputImagesWrapper.querySelectorAll(".imgSwitchWrapper img");
    if (input) {
        input.addEventListener("input", evt => {
            const activeImg = inputImagesWrapper.querySelector(".imgSwitchWrapper img:not(.d-none)");
            if (activeImg) {
                activeImg.classList.remove("active");
                activeImg.classList.add("d-none");
            }
            const setActive = inputImagesWrapper.querySelector(`.imgSwitchWrapper img[data-batch=${evt.target.value}]`);
            setActive.classList.remove("d-none");
            setTimeout(() => {
                setActive.classList.add("active");
            });
        });
    }
}

//                 imgSwitchWrapper[idx].classList.remove("d-none");
//                 setTimeout(() => {
//                     imgSwitchWrapper[idx].classList.add("active");
//                 }, 50);