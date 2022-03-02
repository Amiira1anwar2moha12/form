function validateForm() {
  let x = document.forms["myForm"]["username"].value;
  let y = document.forms["myForm"]["password"].value;
  if (x == "" && y == "") {
    alert("Username and Password must be filled out");
    return false;
  }
  if(x == "123" && y == "123"){
      alert("Welcome");
  }
  else{
      alert("username or password is incorrecct");
  }
}