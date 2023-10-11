var form = document.getElementById("myForm"),
    firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    relationship = document.getElementById("relationship"),
    phoneNumber = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    birthday = document.getElementById("birthday"),
    notes = document.getElementById("notes"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data")

let getData = localStorage.getItems('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []
let isEdit = false. editID

File.onchange = function(){
    if(file.files[0].size < 1000000) {
        var fileReader = new FileReader();

        fileReader.readAsDataURL(file.files[0])
    }
    else {
        alert("This file is too large!")
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        friendFirstName: firstName.value,
        friendLastName: lastName.value,
        friendRelationship: relationship.value,
        friendPhoneNumber: phoneNumber.value,
        friendEmail: email.value,
        friendBirthday: birthday.value,
        friendNotes: notes.value
    }
})