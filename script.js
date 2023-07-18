let contacts;

async function getContactData() {
  let response = await fetch("./contacts.json");
  contacts = await response.json();
}

async function init() {
  await getContactData();
  load();
  renderContacts();
}

function renderContacts() {
  let container = document.getElementById("contactsContainer");
  container.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    container.innerHTML += `
            <div class="contactCard">
                <span>${contacts[i].vorname} ${contacts[i].nachname}</span>
                <span>${contacts[i].email}</span>
                <span>${contacts[i].phone}</span>
                <img onclick="deleteEntry(${i})" class="trash-bin" src="./img/delete.png" alt="">
            </div>
        `;
  }
}

function deleteEntry(entry) {
  contacts.splice(entry, 1);
  save();
  renderContacts();
}

function addEntry() {
  let vorname = document.getElementById("vorname").value;
  let nachname = document.getElementById("nachname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let newEntry = {
    vorname: vorname,
    nachname: nachname,
    email: email,
    phone: phone,
  };

  contacts.push(newEntry);
  clearInput();
  save();
  renderContacts();
}

function clearInput() {
  let vorname = document.getElementById("vorname");
  let nachname = document.getElementById("nachname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  vorname.value = "";
  nachname.value = "";
  email.value = "";
  phone.value = "";
}

function save(){
    let contactString = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactString);
}

function load(){
    let contactString = localStorage.getItem('contacts');
    if(contactString){
        contacts = JSON.parse(contactString);
    }
}
