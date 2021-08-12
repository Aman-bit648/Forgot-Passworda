
function callIt(){
  var valueF = document.getElementById("checkPasswords").value;
  var valueS = document.getElementById("passwords").value;

if(valueF.length >8){
    document.getElementById("messages").innerHTML = "Password should not more then 8 words";
    return false;
}
if(valueF!= valueS){
    document.getElementById("messages").innerHTML = "Passwords do not match";
    document.querySelector("#checkPasswords").style.borderColor="red";
    return false;
}
 else if(valueF == valueS){
    document.querySelector("h2").innerHTML = "Password Changed";
    document.querySelector("#notify").innerHTML="Your Password has been updated!Now get back in the driver seat ,racers are waiting for you!"
    document.querySelector("#btn").innerText="Join a Race";
    document.querySelector("h6").style.display="none";
    document.querySelector("#passwords").style.display="none";
    document.querySelector("#checkPasswords").style.display="none";
    document.querySelector("#sec").style.display="none";
    return false;
 }
}
