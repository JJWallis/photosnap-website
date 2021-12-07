const body = document.querySelector('body')
const hamburger = body.querySelector('#btn-hamburger')
const nav = body.querySelector('.nav-mobile--container')

hamburger.addEventListener('click', () => {
   const isVisible = nav.getAttribute('data-visible')
   if (isVisible === 'true') {
      nav.setAttribute('data-visible', 'false')
      body.setAttribute('data-visible', 'false')
   } else {
      nav.setAttribute('data-visible', 'true')
      body.setAttribute('data-visible', 'true')
   }
})
