<<<<<<< HEAD
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
=======
//store the data into an array
let modalInfo =[];

// call the actual ID from the HTML element
const modalName = document.getElementById(`modalName`);
const modalEmail = document.getElementById(`modalEmail`);
const modalText = document.getElementById(`modalText`);
const modalFullName = document.getElementById(`modalFullName`);
const modalPhoneNumber = document.getElementById(`modalPhoneNumber`);
const modalLocation = document.getElementById(`modalLocation`);

function captureModal(){

  // stored Object in array form includes object titles and object values
  let contactInfo = {
    RequestID: Math.floor(Math.random() * 1000000),
    Subject :  modalName.value,
    ClientFullName: modalFullName.value,
    ClientEmail :  modalEmail.value,
    ClienPhoneNumber :  modalPhoneNumber.value,
    ClientLocation :  modalLocation.value,
    ClientMessage :  modalText.value,
  };

  // created variable for calling out the RequestForm inside the local storage 
  let storedContacts = localStorage.getItem('RequestForm');

  /* created variable for ternary condition parsing a JSON object to text format to Javascript object from the LocalStorage
  pushing another object using the variable of contactinfo*/
  let contactForms = storedContacts ? JSON.parse(storedContacts) : []; 
  contactForms.push(contactInfo);

    // Store data for setting the item into a RequestForm  category
    localStorage.setItem(`RequestForm`, JSON.stringify(contactForms));
>>>>>>> 7c699fc234ec6e398bb5b633cda28b537ceb61e5
}

window.onload = function (){
  let contactForm = document.getElementById(`contactForm`);
  contactForm.onsubmit = captureModal;
<<<<<<< HEAD
};
=======
};

//End of Line for Storing data


//AutoFill for Data-base-what-ever
//input default for data-bs-whatever value
const serviceModal = document.getElementById('serviceRequest');
const serviceModal2 = document.getElementById('serviceRequest2');
const serviceModal3 = document.getElementById('serviceRequest3');
const serviceModal4 = document.getElementById('serviceRequest4');

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

serviceModal2.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')

  // Update the modal's content.
  const modalTitle = serviceModal2.querySelector('.modal-title')
  const modalBodyInput = serviceModal2.querySelector('.modal-body input')

  modalTitle.textContent = `Request for a ${recipient}`
  modalBodyInput.value = recipient
})

serviceModal3.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')

  // Update the modal's content.
  const modalTitle = serviceModal3.querySelector('.modal-title')
  const modalBodyInput = serviceModal3.querySelector('.modal-body input')

  modalTitle.textContent = `Request for a ${recipient}`
  modalBodyInput.value = recipient
})

serviceModal4.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')

  // Update the modal's content.
  const modalTitle = serviceModal4.querySelector('.modal-title')
  const modalBodyInput = serviceModal4.querySelector('.modal-body input')

  modalTitle.textContent = `Request for a ${recipient}`
  modalBodyInput.value = recipient
})
>>>>>>> 7c699fc234ec6e398bb5b633cda28b537ceb61e5
