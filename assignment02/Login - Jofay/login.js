let name = document.getElementById("name");
let password = document.getElementById("password");
let count = 0;
let users = ["admin", "user"];
let passwords = ["1234", "password"];


function submitForm(){
    if(name.value === null || name.value === ""){
        alert("Insert your name");
    }

    if(password.value === null || password.value === ""){
        alert("Insert your password");
    }

    for(i=0; i<users.length; i++){
        if(name.value === users[i] && password.value === passwords[i]){
            //alert("Successful login");
            window.location.assign("index.html");
        }
        else if(name.value === users[i] && password.value !== passwords[i]){
            count += 1;
            if(count > 3){
                alert("Too many tries ❗❗");
                name.disabled = true;
                name.value = "";
                password.disabled = true;
                password.value = "";
            }
            else{
                alert("Wrong password ❌");
            }
        }
    }
    return false;
}