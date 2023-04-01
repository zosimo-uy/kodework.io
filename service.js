let modalInfo =[];

const modalName = document.getElementById(`modalName`);
const modalEmail = document.getElementById(`modalEmail`);
const modalText = document.getElementById(`modalText`);

function captureModal(){

  let contactInfo = {
    id: Math.floor(Math.random() * 1000000),
    modalName :  modalName.value,
    modalEmail :  modalEmail.value,
    modalText :  modalText.value
  };

  let storedContacts = localStorage.getItem('RequestForm');

  let contactForms = storedContacts ? JSON.parse(storedContacts) : []; 
  contactForms.push(contactInfo);

  
  localStorage.setItem(`RequestForm`, JSON.stringify(contactForms));
}

window.onload = function (){
  let contactForm = document.getElementById(`contactForm`);
  contactForm.onsubmit = captureModal;
};


const serviceModal = document.getElementById('serviceRequest')
serviceModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an Ajax request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = serviceModal.querySelector('.modal-title')
  const modalBodyInput = serviceModal.querySelector('.modal-body input')

  modalTitle.textContent = `Request for a ${recipient}`
  modalBodyInput.value = recipient
})
