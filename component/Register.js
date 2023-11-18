// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNxJpDQAYK31jNaIrZNu6f2LeYzTc7Evo",
    authDomain: "stelmondtechnologycontactform.firebaseapp.com",
    databaseURL: "https://stelmondtechnologycontactform-default-rtdb.firebaseio.com",
    projectId: "stelmondtechnologycontactform",
    storageBucket: "stelmondtechnologycontactform.appspot.com",
    messagingSenderId: "382211108731",
    appId: "1:382211108731:web:6da2a4dc0f6b8ba2dd17de"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   // Reference  our Firebase
    var contactFormDB = firebase.database().ref('contactForm');
    document.getElementById('contactform').addEventListener('submit', submitForm);

    function submitForm(e){
        e.preventDefault();
        var firstName = getElementVal('firstName');
        var lastName = getElementVal('lastName');
        var address = getElementVal('address');
        var email = getElementVal('email');
        var phone = getElementVal('phone');
        var gender = getElementVal('gender');
        var message = getElementVal('message');

        saveMessages(firstName, lastName, address, email, phone, gender, message);
    }
    
     const saveMessages = (firstName, lastName, address, email, phone, gender, message) => {
        var newContactForm = contactFormDB.push();
        newContactForm.set({
            name: firstName + " " + lastName,
            email : email,
            address: address,
            phoneNumber: phone,
            gender : gender,
            message: message
        })
     }

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }