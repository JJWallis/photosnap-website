const toggle: HTMLInputElement = document.querySelector('#toggle')
const amounts = document.querySelectorAll('.pricing-card__price__amount')
const timeFrames = document.querySelectorAll('.pricing-card__price__timeframe')

toggle.addEventListener('change', () => {
   if (toggle.checked) {
      amounts.forEach((amount) => {
         const value = amount.textContent.split('')
         value.splice(3, 0, '0')
         amount.textContent = value.join('')
      })

      timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'year'))
      return
   }

   amounts.forEach((amount) => {
      const value = amount.textContent.split('')
      value.splice(3, 1, '')
      amount.textContent = value.join('')
   })

   timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'month'))
})
