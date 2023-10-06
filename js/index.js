new fullpage("#fullpage", {
  licenseKey: "D3E291AE-D65447D5-84602E0F-3F7962D0",
  sectionsColor: ["#121212", "#121212", "#121212", "#121212"],
  navigation: true,
  navigationPosition: "right",
  responsiveWidth: 800,
})

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    autoWidth: true,
    autoplay: false,
    interval: 3000,
    keyboard: "global",
    autoplay: true,
    perMove: 1,
    perPage: 2,
  }).mount()
})
