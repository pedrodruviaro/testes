const btnOpenForm = document.querySelector(".btn-mobile")
const btnCloseForm = document.querySelector(".close-form")
const form = document.querySelector(".form")

btnOpenForm.addEventListener("click", (e) => {
    form.classList.add("open")
    btnOpenForm.style.display = "none"
})

btnCloseForm.addEventListener("click", (e) => {
    form.classList.remove("open")
    btnOpenForm.style.display = "block"
})

//-------------------------  Change select field colors -------------------------
function changeSelectColors() {
    const selects = Array.from(document.querySelectorAll("select"))
    const CSS_VARIABLES = getComputedStyle(document.documentElement)
    const placeholderColor = CSS_VARIABLES.getPropertyValue("--clr-placeholder")
    const fieldColor = CSS_VARIABLES.getPropertyValue("--clr-field")

    selects.forEach((select) => {
        select.style.color = placeholderColor

        select.addEventListener("change", (e) => {
            if (e.target.value === "" || e.target.value === "nulo") {
                select.nextElementSibling.classList.remove("active")
                select.style.color = placeholderColor
            } else {
                select.style.color = fieldColor
                select.nextElementSibling.classList.add("active")
            }
        })
    })
}
changeSelectColors()

function setMarket() {
    const elementsToAnimate = Array.from(document.querySelectorAll(".marker"))

    if (elementsToAnimate.length) {
        const displayFactor = 0.6
        const customWindowSize = window.innerHeight * displayFactor

        const animateScroll = () => {
            elementsToAnimate.forEach((element) => {
                const heightToTop = element.getBoundingClientRect().top
                const isElementVisible = heightToTop - customWindowSize

                isElementVisible < 0 ? element.classList.add("active") : element.classList.remove("active")
            })
        }

        animateScroll()

        window.addEventListener("scroll", animateScroll)
    }
}

setMarket()

// Video Observer
// const transferVideo = document.getElementById("trasnfer--vid")
// const videoObserver = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 transferVideo.play()
//             }
//         })
//     },
//     {
//         threshold: 0,
//     }
// )

// videoObserver.observe(transferVideo)
