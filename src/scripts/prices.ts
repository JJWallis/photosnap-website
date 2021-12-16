const toggle: HTMLInputElement = document.querySelector('#toggle')
const amounts = document.querySelectorAll('.pricing-card__price__amount')

toggle.addEventListener('change', () => {
   if (toggle.checked) {
      amounts.forEach((amount) => {
         const value = amount.textContent.split('')
         value.splice(3, 0, '0')
         amount.textContent = value.join('')
      })
      return
   }

   amounts.forEach((amount) => {
      const value = amount.textContent.split('')
      value.splice(3, 1, '')
      amount.textContent = value.join('')
   })
})
