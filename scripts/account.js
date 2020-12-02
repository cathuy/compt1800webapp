function change() {
    var profile = document.getElementById("profile");
    var account = document.getElementById("account");
    var button = document.getElementById("btnUpdate");
    var user = firebase.auth().currentUser;
    if (user) {
        profile.href = "account.html";
        if (account != null) {
            account.onclick = "window.location.href='account.html'";
        }
        button.onclick = update();
    }
    else {
        profile.href = "login.html";
        if (account != null) {
            account.onclick = "window.location.href='login.html'";
        }
    }
    
}
change();

function update() {
    var user = firebase.auth().currentUser;
    var name, email, city, streetNumber, streetName, state, zip, phoneNumber, password;

    if (user != null) {
        name = user.name;
        email = user.email;
        city = user.address.city;
        streetName = user.address.streetName;
        streetNumber = user.address.streetNumber;
        phoneNumber = user.phoneNumber;
        state = user.address.state;
        zip = user.address.postcode;
        admin.auth().updateUser(uid, {
            email: email,
            name: name,
            phoneNumber: phoneNumber,
            emailVerified: true,
            password: 'newPassword',
            displayName: 'Jane Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: true,
        })
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully updated user', userRecord.toJSON());
            })
            .catch((error) => {
                console.log('Error updating user:', error);
            });
    }
}