function checking(form)
{
  username = new Array("ja");
  password = new Array("galarion");

  //for(int i = 0; i<username.length;i++)
  //{
      if(form.userid.value == username[0]  && form.pswrd.value == password[0])
      {
          location.replace('home.html')
      }
      else
      {
          alert("Niewłaściwe hasło lub nazwa");
      }
 // }
}
