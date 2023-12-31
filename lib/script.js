
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

// document.querySelector("#registerForm button[type=submit]").addEventListener("click", () => {
//     document.querySelector("#registerModal .modal-content").scrollTop = 0;
//     registerForm.slideTo(1);
// });

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
            if (setActive) {
                setActive.classList.remove("d-none");
                setTimeout(() => {
                    setActive.classList.add("active");
                });                
            }
        });
    }
}

const accordianSwiper = new Swiper(".accordianSwiper", {
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1200: {
            slidesPerView: 3
        }
      }
});

const sendEmail = (evt) => {
    evt.preventDefault();
    document.querySelector("#registerModal .modal-content").scrollTop = 0;
    registerForm.slideTo(1);
    const toEmail = evt.target.email.value;
    try {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ajaykumar.tetramind@gmail.com",
            Password : "79688CC5D9395866BEB6F929C4D18E282620",
            To : toEmail,
            From : "ajaykumar.tetramind@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => {
            console.log(message);
          }
        );
    } catch (error) {
        console.log(error);
    }
    
}

document.getElementById("registerForm").addEventListener("submit", sendEmail);