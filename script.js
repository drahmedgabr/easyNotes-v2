const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notesDiv");
const emptyDiv = document.getElementById("emptyDiv");
const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signupDiv");

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
        getNotes();
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
        showNotes();
    }
}

function showNotes() {

    notesDiv.innerHTML = "";

    if (notesArray.length > 0) {

        emptyDiv.style.display = "none";
        notesDiv.style.display = "block";

        for (let index = 0; index < notesArray.length; index++) {
            const element = notesArray[index];
            
            const newDiv = document.createElement("div");
    
            const newP = document.createElement("p");
            newP.innerText = element;
            newDiv.appendChild(newP);
    
            const deleteIcon = document.createElement("i");
            deleteIcon.className = "bi bi-trash3";

            deleteIcon.onclick = function () {
                if (confirm("are you sure to delete note?") == true) {
                    notesArray.splice(index, 1);
                    saveNotes();
                    getNotes();
                }
            }

            newDiv.appendChild(deleteIcon);
    
            notesDiv.appendChild(newDiv);
    
        }
    
        const lastDiv = document.createElement("div");
        lastDiv.id = "lastDiv";
    
        notesDiv.appendChild(lastDiv);
    } else {
        emptyDiv.style.display = "flex";
        notesDiv.style.display = "none";
    }

}

function showLoginPage() {
    notesDiv.style.display = "none";
    emptyDiv.style.display = "none";
    loginDiv.style.display = "flex";
}

function showHome() {
    emptyDiv.style.display = "flex";
    loginDiv.style.display = "none";
    signupDiv.style.display = "none";
    getNotes();
}

function showSignupPage() {
    loginDiv.style.display = "none";
    signupDiv.style.display = "flex";
}

