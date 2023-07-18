function saveEditedEntry(entry){
    let vorname = document.getElementById('editVorname');
    let nachname = document.getElementById('editNachname');
    let email = document.getElementById('editMail');
    let phone = document.getElementById('editPhone');
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