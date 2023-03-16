const input = document.getElementById('action__input_1')
const menu = document.getElementById('action__menu_1')
//Target the switch element
const darkModalToggle = document.getElementById('dark__mode__toggle')
//toggle handler
const darkModalToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
const tableBody = document.querySelector('.table__body')
const chaeckbox = e =>{
  const tableRow = e.target.closest('.table__row')
  tableRow.classList.toggle('checked')
}
//bind the event
darkModalToggle.addEventListener('change', darkModalToggleHandler)

input.addEventListener('click', (event) => {
  menu.classList.toggle('hidden')
})

tableBody.addEventListener('change', chaeckbox)