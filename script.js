const noteInput = document.getElementById("noteInput");
var notesArray = [];

getNotes();

function addNote() {
    const newNote = noteInput.value;
    if(newNote == ""){
        alert("Please enter your note");
    } else {
        notesArray.push(newNote);
        noteInput.value = "";
        saveNotes();
        console.log(notesArray);
    }
}

function saveNotes() {
    const notesString = JSON.stringify(notesArray);
    localStorage.setItem("notes", notesString);
}

function getNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes == null) {
        console.log("no notes found in localstorage");
    } else {
        notesArray = JSON.parse(savedNotes);
    }
}

