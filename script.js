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
                <div class="actionBtns">
                  <img onclick="editEntry(${i})" class="edit-btn" src="./img/pencil.png" alt="">
                  <img onclick="deleteEntry(${i})" class="trash-bin" src="./img/delete.png" alt="">
                </div>

            </div>
        `;
  }
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

