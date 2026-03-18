document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.getAttribute('data-menu-toggle'))
    if (!menu) {
      return
    }

    const isOpen = menu.classList.toggle('is-open')
    button.setAttribute('aria-expanded', String(isOpen))
    button.textContent = isOpen ? 'Close' : 'Menu'
  })
})
