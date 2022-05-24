var mx=16;
var min=2;
var letters = /^[A-Za-z]+$/;

function firstName_validation(firstName,mx,min)
{
var firstName_len = firstName.value.length;
if (firstName_len == 0 || firstName_len >= mx || firstName_len < min)
{
alert("UserfirstName should not be empty / length be between "+mx+" to "+min);
firstName.focus();
return false;
}

return true;

if(firstName.value.match(letters))
{
return true;
}
else
{
alert('firstName must have alphabet characters only');
}
}

function lastNName_validation(lastName,mx,min)
{
var lastName_len = lastName.value.length;
if (lastName_len == 0 || lastName_len >= mx || lastName_len < min)
{
alert("lastName should not be empty / length be between "+mx+" to "+min);
firstName.focus();
return false;
}

return true;

if(lastName.value.match(letters))
{
return true;
}
else
{
alert('lastName must have alphabet characters only');
}

}

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
} 

function validate(){  
    var password=document.f1.password.value;  
      
    if(password.length<4 && password.length>16){  
    console.log(" password is valid");   
    }
    else{  
    console.log("Invalid password")
    }  
}