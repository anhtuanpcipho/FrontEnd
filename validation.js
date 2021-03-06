function validation() {

    // validate the name
    var name = document.myForm.name.value;
    if (name == "") {
        document.getElementById("errorValid").innerHTML = "(*) Please input your name.";
        return false;
    }

    // validate email
    var email = document.myForm.email.value;
    if (email == "") {
        document.getElementById("errorValid").innerHTML = "(*) Please input your email.";
        return false
    } else {
        if (email.indexOf("@") == "-1") {
            document.getElementById("errorValid").innerHTML = "(*) Please input valid email.";
            return false;
        }
    }

    // validate working position
    var position = document.getElementById("select").value;
    if (position == "") {
        document.getElementById("errorValid").innerHTML = "(*) Please select your position.";
        return false;
    }

    // validate password
    var pass = document.myForm.password.value;
    if (pass == "") {
        document.getElementById("errorValid").innerHTML = "(*) Please input your password.";
        return false;
    } else {
        if (pass.length < 6) {
            document.getElementById("errorValid").innerHTML = "(*) Password must have more than 6 characters.";
            return false;
        }
    }

    // validate gender
    if (!document.getElementById("male").checked && !document.getElementById("female").checked && !document.getElementById("secret").checked) {
        document.getElementById("errorValid").innerHTML = "(*) Please select your gender.";
        return false;
    }

    // validate date of birth
    var dob = document.getElementById("birthday").value;
    if(dob == "") {
        document.getElementById("errorValid").innerHTML = "(*) Please input your Date of Birth.";
        return false;
    }
    // reduntdant validate because the input was controlled to enter exact dob
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/
    if(!pattern.test(dob)) {
        document.getElementById("errorValid").innerHTML = "(*) Please input validate Date of Birth.";
        return false;
    }


    // validate image avatar
    var formData = new FormData();
    var file = document.getElementById("rep_img").files[0];
    if (file === undefined) {
        document.getElementById("errorValid").innerHTML = "(*) Please insert your image.";
        document.getElementById("rep_img").value = '';
        return false;
    }
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        document.getElementById("errorValid").innerHTML = "(*) Please select a valid image file.";
        document.getElementById("rep_img").value = '';
        return false;
    }
    if (file.size > 1024000) {
        document.getElementById("errorValid").innerHTML = "(*) Max Upload size is 1MB only.";
        document.getElementById("rep-img").value = '';
        return false;
    }

    // Validate file

    var file = document.getElementById("file").files[0];

    if (file === undefined) {
        document.getElementById("errorValid").innerHTML = "(*) Please insert your file.";
        document.getElementById("file").value = '';
        return false;
    }

    // validate checkbox
    if (!document.myForm.checkform.checked) {
        document.getElementById("errorValid").innerHTML = "(*) Please click the comfirm box to confirm your data.";
        return false;
    }

    return true;
}

