function editEntry(entry){
    let sidebar = document.getElementById('sidebar');

    let editEntryId = document.getElementById('editEntry');
    let vorname = document.getElementById('editVorname');
    let nachname = document.getElementById('editNachname');
    let email = document.getElementById('editMail');
    let phone = document.getElementById('editPhone');

    vorname.value = contacts[entry].vorname;
    nachname.value = contacts[entry].nachname;
    email.value = contacts[entry].email;
    phone.value = contacts[entry].phone;



    sidebar.classList.toggle('showMenu');
    console.log(entry);
  }