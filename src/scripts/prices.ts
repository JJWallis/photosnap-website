const toggle: HTMLInputElement = document.querySelector('#toggle')
const labelMonthly = document.querySelector('#label-monthly')
const labelYearly = document.querySelector('#label-yearly')
const amounts = document.querySelectorAll('.pricing-card__price__amount')
const timeFrames = document.querySelectorAll('.pricing-card__price__timeframe')

const classList = (actionMonthly: string, actionYearly: string) => {
   labelMonthly.classList[actionMonthly]('active')
   labelYearly.classList[actionYearly]('active')
}

function changeContent(idx: number, strAmount: string, strTime: string) {
   amounts.forEach((amount) => {
      const value = amount.textContent.split('')
      value.splice(3, idx, strAmount)
      amount.textContent = value.join('')
   })
   timeFrames.forEach((timeFrame) => (timeFrame.textContent = strTime))
}

toggle.checked = false
toggle.addEventListener('change', () => {
   if (toggle.checked) {
      classList('remove', 'add')
      changeContent(0, '0', 'year')
      return
   }
   classList('add', 'remove')
   changeContent(1, '', 'month')
})
