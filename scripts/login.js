function check(form)
{
  username = new Array("ja");
  password = new Array("galarion");

  //for(int i = 0; i<username.length;i++)
  //{
      if(form.userid.value == username[i]  && form.pswrd.value == password[i])
      {
          location.replace('home.html')
      }
      else
      {
          alert("Niewłaściwe hasło lub nazwa");
      }
 // }
}
