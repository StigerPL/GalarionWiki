function check(form)
{
  username = new Array("ja");
  password = new Array("galarion");

  
      if(form.userid.value == username[i]  && form.pswrd.value == password[i])
      {
          location.replace("#home.html");
      }
      else
      {
          alert("Incorrect Username or Password");
      }
  
}
