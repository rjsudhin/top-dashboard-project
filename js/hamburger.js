const hamburgerIcon = document.querySelector('#hamburger')
const sideBarContents = document.querySelectorAll('.sidebar-content')
let bodyWidth = window.innerWidth

// getting inner width while resize the window
window.addEventListener('resize', (e) => {
  bodyWidth = window.innerWidth
})


hamburgerIcon.addEventListener('click', (e) => {
  if (bodyWidth < 1100) {
    e.target.classList.toggle('active')
    sideBarContents.forEach(elem => {
      elem.classList.toggle('show')
      console.log(elem)
    })

  }
})