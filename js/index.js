new fullpage("#fullpage", {
  licenseKey: "D3E291AE-D65447D5-84602E0F-3F7962D0",
  sectionsColor: ["#121212", "#121212", "#121212"],
  navigation: true,
  navigationPosition: "right",
  responsiveWidth: 800,
})

const navBtn = document.querySelector(".nav-btn")
const navCloseBtn = document.querySelector(".close-btn")
const navLinkContainer = document.querySelector(".navbar-links")
const navLink = document.querySelector(".navbar-link-container")
const whatIhaveBuilt = document.querySelector(".what-I-have-built")
const whatIhaveBuiltSpan = document.querySelector(".what-I-have-built span")

navBtn.addEventListener("click", openNav)
navCloseBtn.addEventListener("click", closeNav)

// Open Navbar
function openNav() {
  navBtn.style.visibility = "hidden"
  navLink.style.visibility = "hidden"
  navLinkContainer.style.display = "block"
  navLinkContainer.style.animation = "navOpen 1s ease"
  navLink.style.animation = "navLinkOpen 1s linear"
  setTimeout(() => {
    navLink.style.visibility = "visible"
  }, 1000)
}

// Close Navbar
function closeNav() {
  navLinkContainer.style.animation = "navClose 2.1s ease"
  navLink.style.animation = "navLinkClose 2.1s ease"
  navBtn.style.visibility = "visible"
  setTimeout(() => {
    navLinkContainer.style.display = "none"
  }, 2000)

  setTimeout(() => {
    navLink.style.visibility = "hidden"
  }, 2000)
}

// Animation

// // Closing Nav1
document.querySelector(".close-link-nav1").addEventListener("click", () => {
  setTimeout(() => {
    navLinkContainer.style.animation = "navClose 0.8s ease"
    setTimeout(() => {
      navLinkContainer.style.display = "none"
      navBtn.style.visibility = "visible"
    }, 500)
  }, 600)
})

document.querySelector(".close-link-nav2").addEventListener("click", () => {
  setTimeout(() => {
    navLinkContainer.style.animation = "navClose 0.8s ease"
    setTimeout(() => {
      navLinkContainer.style.display = "none"
      navBtn.style.visibility = "visible"
    }, 500)
  }, 600)
})

document.querySelector(".close-link-nav3").addEventListener("click", () => {
  setTimeout(() => {
    navLinkContainer.style.animation = "navClose 0.8s ease"
    setTimeout(() => {
      navLinkContainer.style.display = "none"
      navBtn.style.visibility = "visible"
    }, 500)
  }, 600)
})

document.querySelector(".close-link-nav4").addEventListener("click", () => {
  setTimeout(() => {
    navLinkContainer.style.animation = "navClose 0.8s ease"
    setTimeout(() => {
      navLinkContainer.style.display = "none"
      navBtn.style.visibility = "visible"
    }, 500)
  }, 600)
})
