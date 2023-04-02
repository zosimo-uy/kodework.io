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