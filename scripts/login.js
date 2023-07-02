function check(form)
{
  username = new Array("ja");
  password = new Array("galarion");

  //for(int i = 0; i<username.length;i++)
  //{
      if(form.userid.value == username[i]  && form.pswrd.value == password[i])
      {
          window.location = "https://stigerpl.github.io/GalarionWiki/home.html";
      }
      else
      {
          alert("Incorrect Username or Password");
      }
    //}
}
