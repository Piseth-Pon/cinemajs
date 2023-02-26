import MOVIES from "./data.js";

// DOM
const moviesWrapper = document.querySelector('.movies-wrapper')




window.addEventListener('DOMContentLoaded', start)


function start() {
  console.log('start running')
  // Generate 
  generateMovies()
  

  const showDetailBtns = document.querySelectorAll('#showDetailBtn')

  showDetailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log("click to show modal", e.target.dataset.movie)

      const movieId = parseInt(e.target.dataset.movie)
        
      const currentMovie = MOVIES.find((mov) => mov.id === movieId)

      const detail = displayMovieDetail(currentMovie)
      const movieModal = document.querySelector('.movie-modal')
      movieModal.classList.toggle('hideModal')
      movieModal.innerHTML = detail

      document.querySelector('.closeBtn').addEventListener('click', () => {
        document.querySelector('.movie-modal').classList.toggle('hideModal')
      })

      handleTab()
    })
  })

}


function displayMovieDetail(mov) {
  return `<div class="modal-container">
            <div class="modal-header">
              <h1>${mov.title} <span class="closeBtn"><ion-icon name="close-circle"></ion-icon></span></h1>
              <div class="tabbar">
                <button class="tab-btn active" data-id="detail">Detail</button>
                <button class="tab-btn" data-id="video">Video</button>
                <button class="tab-btn" data-id="reviews">Reviews</button>
              </div>
            </div>
            <div class="modal-body">
              <section class="tab detail-tab active-tab" id="detail">
                <p>
                  <ion-icon name="information-circle"></ion-icon>
                  <span class="text">${mov.overview}</span>
                </p>
                <p>
                  <ion-icon name="pricetags"></ion-icon>
                  <span class="text">${mov.category}</span>
                </p>
                <p>
                  <ion-icon name="alarm"></ion-icon>
                  <span class="text">${mov.duration}</span>
                </p>
                <p>
                  <ion-icon name="calendar-number"></ion-icon>
                  <span class="text">${mov.releasedDate.toLocaleDateString()}</span>
                </p>
              </section>

              <section class="tab video-tab" id="video">
                <iframe src=${mov.trailerId} allowfullscreen></iframe>
              </section>

              <section class="tab review-tab" id="reviews">
                <div class="review">
                  <img src="./images/profile.png" alt="">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, porro!
                  </p>
                </div>

              </section>



            </div>
          </div>`
}


function generateMovies() {
  let displayMovies = MOVIES.map((mov) => {
    return `
    <div class="movie">
      <div class="movie-thumbnail">
        <img src="${mov.cover}" alt="">
      </div>
      <div class="movie-detail">
        <h4>${mov.title}</h4>
        <div class="movie-info">
          <p>
            <ion-icon name="calendar-number"></ion-icon>
            ${mov.releasedDate.toLocaleDateString()}
          </p>
          <p>
            <ion-icon name="alarm"></ion-icon>
            ${mov.duration}
          </p>
          <p>
            <ion-icon name="pricetag"></ion-icon>
            ${mov.category}
          </p>
        </div>

        <div class="btn-group">
          <button class="btn btn-main" id="showDetailBtn" data-movie="${mov.id}">SHOW DETAIL</button>
        </div>

      </div>
    </div>`
  })

  displayMovies = displayMovies.join("")
  // console.log(displayMovies)
  moviesWrapper.innerHTML = displayMovies
}

function handleTab() {
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabs = document.querySelectorAll('.tab')
  const tabbar = document.querySelector('.tabbar')

  tabbar.addEventListener('click', (e) => {
    const index = e.target.dataset.id
    if (index) {
      tabBtns.forEach((btn) => {
        btn.classList.remove('active')
      })

      e.target.classList.add('active')

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab')
      })

      const targetTab = document.getElementById(index)
      targetTab.classList.add('active-tab')
    }
  })
  
}