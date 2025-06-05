document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('profile-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('close-modal');
  const btnSeeList = document.querySelectorAll('.btn-see');
  const blur = document.getElementById('blur');

  btnSeeList.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const profile = btn.getAttribute('data-profile');
      fetch('plantilla/' + profile)
        .then(res => res.text())
        .then(html => {
          modalContent.innerHTML = html;
          modal.showModal();
          blur.classList.add('blur-bg');
        });
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.close();
    modalContent.innerHTML = '';
    blur.classList.remove('blur-bg');
  });
});