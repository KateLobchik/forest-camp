{

  const deliveryButtons = document.querySelectorAll('.button-delivery');
  console.log(deliveryButtons);
  const modalOrder = document.querySelector('.modal-order');

  const isEscEvent = (evt) => {
    return evt.key === 'Escape' || evt.key === 'Esc';
  };


  for (let deliveryButton of deliveryButtons) {
    deliveryButton.addEventListener('click', () => {
      modalOrder.classList.add('modal-order--active');


      const onModalEscKeydown = (evt) => {
        if (isEscEvent(evt)) {
          evt.preventDefault();
          closeModal();
        }
      };

      const closeModal = () => {
        modalOrder.classList.remove('modal-order--active');
        document.removeEventListener('keydown', onModalEscKeydown);
      };


      document.addEventListener('keydown', onModalEscKeydown);

      modalOrder.addEventListener('click', () => {
        closeModal();
      });
    })
  }
}
