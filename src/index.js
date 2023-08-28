
function switchTheme() {
    const html = document.documentElement
    const themeBtn = document.getElementById('themeBtn')
    html.classList.toggle("dark")

    if (html.classList.contains("dark")) {
        themeBtn.setAttribute("src", "src/assets/sun.svg")
      } else {
        themeBtn.setAttribute("src", "src/assets/moon.svg")
      }
}