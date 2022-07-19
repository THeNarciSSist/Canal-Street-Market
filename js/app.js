const panels = document.querySelectorAll(".panel")
const panelsClass = document.getElementsByClassName("panel")
const headerText = document.querySelector(".header-text")
let prevActive

window.onload = function () {
  setTimeout(() => {
    headerText.classList.add("visible-on-load")
  }, 2000)
}

function clearClassesActive() {
  panels.forEach((panel) => panel.classList.remove("active"))
}

function addClassActive(e) {
  e.target.classList.add("active")
}

/// handling delay after clicking on any other section
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return null
  for (const panel of panels) {
    panel.style.pointerEvents = "none"
    setTimeout(() => (panel.style.pointerEvents = "auto"), 1000)
  }
})

setInterval(() => {
  prevActive = document.querySelector(".active")
}, 1000)

// handling closing delay after clicking on any other section
window.addEventListener("click", (e) => {
  if (e.target.id === "" || !Number.isInteger(e.target.id)) return null
  else if (e.target.id < prevActive.id) {
    setTimeout(() => {
      clearClassesActive()
      addClassActive(e)
    }, 300)
  } else if (e.target.id > prevActive.id) {
    clearClassesActive()
    addClassActive(e)
  }
})
