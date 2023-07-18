function saveEditedEntry(entry){
    let vorname = document.getElementById('editVorname');
    let nachname = document.getElementById('editNachname');
    let email = document.getElementById('editMail');
    let phone = document.getElementById('editPhone');

    contacts[entry].vorname = vorname.value;
    contacts[entry].nachname = nachname.value;
    contacts[entry].email = email.value;
    contacts[entry].phone = phone.value;

    save();
    clearEditInput();
    renderContacts();
    sidebar.classList.remove('showMenu');
}




function clearEditInput() {
    let vorname = document.getElementById('editVorname');
    let nachname = document.getElementById('editNachname');
    let email = document.getElementById('editMail');
    let phone = document.getElementById('editPhone');
  
    vorname.value = "";
    nachname.value = "";
    email.value = "";
    phone.value = "";
  }