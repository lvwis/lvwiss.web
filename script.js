const firebaseConfig = {
    apiKey: "AIzaSyDhz5FOM_PDJR2fbE4JSHWnvy0oI_9WRrk",
    authDomain: "attendanceform-3c5ab.firebaseapp.com",
    databaseURL: "https://attendanceform-3c5ab-default-rtdb.firebaseio.com",
    projectId: "attendanceform-3c5ab",
    storageBucket: "attendanceform-3c5ab.appspot.com",
    messagingSenderId: "1049708444647",
    appId: "1:1049708444647:web:7e7d6e1e95eec0cab3db42"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var attendanceFormDB = firebase.database().ref('attendanceForm')

document.getElementById('attendanceForm').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var idnumber = getElementVal('idnumber');

    saveMessage(fname, lname, email, idnumber);

    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById('attendanceForm').reset();


}

const saveMessage = (fname, lname, email, idnumber) => {
    var newAttendanceForm = attendanceFormDB.push();

    newAttendanceForm.set({
        fname: fname,
        lname: lname,
        email: email,
        idnumber: idnumber,
    });

};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}