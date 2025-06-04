document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('profile-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('close-modal');
  const btnSee = document.querySelector('.btn-see');
  const blur = document.getElementById('blur');
  

  btnSee.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('plantilla/ivan.html')
      .then(res => res.text())
      .then(html => {
        modalContent.innerHTML = html;
        modal.showModal();
        blur.classList.add('blur-bg');
  
      });
  });

  closeBtn.addEventListener('click', function() {
    modal.close();
    modalContent.innerHTML = '';
    blur.classList.remove('blur-bg');
  });
});