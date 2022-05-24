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