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