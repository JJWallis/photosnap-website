const toggle: HTMLInputElement = document.querySelector('#toggle')
const labelMonthly = document.querySelector('#label-monthly')
const labelYearly = document.querySelector('#label-yearly')
const amounts = document.querySelectorAll('.pricing-card__price__amount')
const timeFrames = document.querySelectorAll('.pricing-card__price__timeframe')
const classList = (actionMonthly: string, actionYearly: string) => {
   labelMonthly.classList[actionMonthly]('active')
   labelYearly.classList[actionYearly]('active')
}

toggle.addEventListener('change', () => {
   if (toggle.checked) {
      classList('remove', 'add')

      amounts.forEach((amount) => {
         const value = amount.textContent.split('')
         value.splice(3, 0, '0')
         amount.textContent = value.join('')
      })

      timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'year'))
      return
   }

   classList('add', 'remove')

   amounts.forEach((amount) => {
      const value = amount.textContent.split('')
      value.splice(3, 1, '')
      amount.textContent = value.join('')
   })

   timeFrames.forEach((timeFrame) => (timeFrame.textContent = 'month'))
})
