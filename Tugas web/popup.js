
  const buttonKirim = document.querySelector('input[type="submit"]');
  const popup = document.querySelector('.popup');
  const closeButton = document.querySelector('.close_popup');
  const form = document.querySelector('form');


  buttonKirim.addEventListener('click', function (e) {

    e.preventDefault();
    popup.style.display = 'block';
    form.reset();
  });


  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

