new fullpage("#fullpage", {
  licenseKey: "D3E291AE-D65447D5-84602E0F-3F7962D0",
  sectionsColor: ["#121212", "#121212", "#121212", "#121212", "#121212"],
  navigation: true,
  navigationPosition: "right",
  responsiveWidth: 800,
  navigationTooltips: [
    "Intro",
    "About Me",
    "What I use",
    "What have I build",
    "Contact me",
  ],
  anchors: [
    "landing",
    "about-me",
    "what-i-use",
    "what-have-i-built",
    "contact",
  ],
})

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#slider1", {
    type: "loop",
    autoWidth: true,
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
    perPage: 2,
    breakpoints: {
      800: { perPage: 1, gap: "1rem" },
      640: { gap: 0 },
    },
  }).mount()
})

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
  }).mount()
})
