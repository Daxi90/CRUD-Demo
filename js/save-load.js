function save() {
    let contactString = JSON.stringify(contacts);
    localStorage.setItem("contacts", contactString);
  }
  
  function load() {
    let contactString = localStorage.getItem("contacts");
    if (contactString) {
      contacts = JSON.parse(contactString);
    }
  }
  