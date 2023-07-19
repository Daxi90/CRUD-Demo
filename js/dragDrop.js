let currentDraggedElement;

function allowDrop(ev) {
  ev.preventDefault();
}

function startDragging(id) {
  currentDraggedElement = id;
}

function moveTo(event) {
  console.log(event);
}

function removeElementFromArray(contacts, targetId) {
  const updatedContacts = contacts.filter((item) => item.id !== targetId);
  contacts.length = 0; // Leert das ursprüngliche Array
  updatedContacts.forEach((item) => contacts.push(item)); // Fügt die aktualisierten Elemente in das ursprüngliche Array ein
  renderContacts();
  save();
}

function growBin(id) {
  let elem = document.getElementById(id);
  elem.classList.add("bigger");
}

function shrinkBin(id) {
  let elem = document.getElementById(id);
  elem.classList.remove("bigger");
}
