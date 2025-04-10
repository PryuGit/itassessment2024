function contact()
{

let name=document.forms["info"]["name"].value;
if (name==""){
	alert('Fill Name');
}
let email=document.forms["info"]["email"].value;
if (email==""){
	alert('Fill Email');
}
let number=document.forms["info"]["number"].value;
if (number==""){
	alert('Fill Number');
}
let subject=document.forms["info"]["subject"].value;
if (subject==""){
	alert('Fill Subject');
}
let message=document.forms["info"]["message"].value;
if (message==""){
	alert('Fill Message');
}
alert('Delivered');
}
