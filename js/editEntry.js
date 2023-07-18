function editEntry(entry){
    let sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';

    sidebar.innerHTML = `
        <h1 id="sidebarHeadline">Benutzer editieren</h1>
        <img onclick="closeSidebar()" id="close-btn" src="./img/close.png" alt="">
        <input placeholder="Entry" id="editEntry" type="text" class="d-none w-100">
        <input placeholder="Vorname" id="editVorname" type="text" class="w-100">
        <input placeholder="Nachname" id="editNachname" type="text" class="w-100">
        <input placeholder="Email" id="editMail" type="email" class="w-100">
        <input placeholder="Phone" id="editPhone" type="text" class="w-100">
        <button onclick="saveEditedEntry(${entry})">Speichern</button>
    `;

    let vorname = document.getElementById('editVorname');
    let nachname = document.getElementById('editNachname');
    let email = document.getElementById('editMail');
    let phone = document.getElementById('editPhone');

    vorname.value = contacts[entry].vorname;
    nachname.value = contacts[entry].nachname;
    email.value = contacts[entry].email;
    phone.value = contacts[entry].phone;



    sidebar.classList.add('showMenu');
    console.log(entry);
  }