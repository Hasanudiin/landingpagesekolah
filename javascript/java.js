
//  show and hide password
function change() { 
    let pass = document.getElementById('inputP'); 
    let show = document.getElementById('hide1'); 
    let hide = document.getElementById('hide2'); 

    if (pass.type === 'password') {
        pass.type = "text";
        show.style.display = "block";
        hide.style.display = "none";
    } else { 
        pass.type = "password";
        show.style.display = "none";
        hide.style.display = "block";
    }
};

// vaditation login
function validateForm() {
    var nama = document.getElementById("inputn").value;
    var password = document.getElementById("inputP").value;

    if (nama == "" || password == "") {
        // alert("di isi cok");
        return false;
    }
    else { 
        return true;
    }
};
