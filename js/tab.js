document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-working__link').forEach(function(clickBtn) {
    clickBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-working__link').forEach(function(tabContent) {
        tabContent.classList.remove('section-working__link_active')
      })
      event.currentTarget.classList.add('section-working__link_active')
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content_active')
    })
  })
})
