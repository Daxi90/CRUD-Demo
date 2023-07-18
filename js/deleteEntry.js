function deleteEntry(entry) {
    contacts.splice(entry, 1);
    save();
    renderContacts();
  }
  