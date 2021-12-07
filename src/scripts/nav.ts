const body = document.querySelector('body')
const hamburgerBtn = body.querySelector('#btn-hamburger')
const hamburger = body.querySelector('.hamburger')
const nav = body.querySelector('.nav-mobile--container')

hamburgerBtn.addEventListener('click', () => {
   const isVisible = nav.getAttribute('data-visible')
   if (isVisible === 'true') {
      nav.setAttribute('data-visible', 'false')
      body.setAttribute('data-visible', 'false')
      hamburger.setAttribute('data-visible', 'false')
   } else {
      nav.setAttribute('data-visible', 'true')
      body.setAttribute('data-visible', 'true')
      hamburger.setAttribute('data-visible', 'true')
   }
})
