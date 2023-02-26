

// *** DOME SELECTION ***
const stats = document.querySelectorAll('.stat')
const accTitles = document.querySelectorAll('.accordion-title')
const menuBtns = document.querySelector('#menuBtn')
const theme = document.querySelector('.currentMode')
const slides = document.querySelectorAll('.slide')


window.addEventListener('DOMContentLoaded', main)


function main() {
  // document.documentElement.classList.toggle('dark-theme')
  menuBtns.addEventListener('click', () => {
    document.querySelector('.sidenav').classList.toggle('showSidenav')
  })

  theme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
    if (theme.firstElementChild.name === 'moon') {
      theme.firstElementChild.name = 'sunny'
    } else {
      theme.firstElementChild.name = 'moon'
    }
  })

  carousel()

  showStat()

  handleAccordion()


}


function carousel() {
  let counter = 0;
  slides.forEach((slide) => {
    slide.style.display = 'none'
  })
  
  setInterval(() => {
    if (counter >= slides.length){
      counter = 0
      slides.forEach((slide) => {
        slide.style.display = 'none'
      })
    }
    slides[counter].style.display = 'block'
    counter++
  }, 1500)
}




function handleAccordion() {
  accTitles.forEach((acc) => {
    acc.addEventListener('click', () => {
      const accBody = acc.nextElementSibling

      accBody.classList.toggle('show-accordion-body')

    })
  })
}



function showStat() {
  

  stats.forEach((s) => {
    updateStat(s)
 
  })
}


function updateStat(elm){
  const value = parseInt(elm.dataset.stat)
  const increment = Math.ceil(value / 100)
  
  console.log('counter', elm.dataset.stat, increment)
  let start = 0
  setInterval(() => {
    start += increment
    if (start > value) {
      elm.textContent = `${value}+`
      // clearInterval()
      return
    }

    elm.textContent = `${start}+`
  }, 1)
}



// function updateStat(elm) {
//   const value = parseInt(elm.dataset.stat);
//   const increment = Math.ceil(value / 100);
//   let initialValue = 0;

//   setInterval(() => {
//     initialValue += increment

//     if (initialValue > value) {
//       elm.textContent = `${value}+`
//       // clearInterval()
//       return
//     }

//     elm.textContent = `${initialValue}+`
//   }, 1)

// }