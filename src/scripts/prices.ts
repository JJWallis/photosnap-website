const toggle: HTMLInputElement = document.querySelector('#toggle')
const labelMonthly = document.querySelector('#label-monthly')
const labelYearly = document.querySelector('#label-yearly')
const amounts = document.querySelectorAll('.pricing-card__price__amount')
const timeFrames = document.querySelectorAll('.pricing-card__price__timeframe')
const classList = (el, action, classN) => {}

toggle.addEventListener('change', () => {
   if (toggle.checked) {
      labelMonthly.classList.remove('active')
      labelYearly.classList.add('active')

      amounts.forEach((amount) => {
         const value = amount.textContent.split('')
         value.splice(3, 0, '0')
         amount.textContent = value.join('')
      })

      timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'year'))
      return
   }

   labelMonthly.classList.add('active')
   labelYearly.classList.remove('active')

   amounts.forEach((amount) => {
      const value = amount.textContent.split('')
      value.splice(3, 1, '')
      amount.textContent = value.join('')
   })

   timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'month'))
})
