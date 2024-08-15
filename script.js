function Getpw() {
    let uppercase = document.getElementsByClassName('Uppercase')[0].checked;
    let lowercase = document.getElementsByClassName('Lowercase')[0].checked;
    let numeric = document.getElementsByClassName('Numeric')[0].checked;
    let special = document.getElementsByClassName('Special')[0].checked;
    let input = document.getElementsByClassName('show');
    let passwordlendth = document.getElementById('quantity').value;

    if(passwordlendth > 15){
        passwordlendth = 15;
    }
    else if(passwordlendth < 4){
        passwordlendth = 4;
    }
  
    let password = "";
    let character = "";
    //let passwordLength = 12;
  
  
    let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LC = "abcdefghijklmnopqrstuvwxyz";
    let NV = "0123456789";
    let SP = "!@#$%^&*()_+";
  
    if (uppercase)
      character += UC;
    if (lowercase)
      character += LC;
    if (numeric)
      character += NV;
    if (special)
      character += SP;
  
  
    if (character.length === 0) {
      alert("Please select at least one option");
      return; // Exit the function if no options are selected
    }
  
    for (let i = 0; i < passwordlendth; i++) {
      let randomIndex = Math.floor(Math.random() * character.length);
      //Each loop only one letter is random generated, menas if i = 1 then onlye one randomly letter genearted and add into randomIndex. We canrun this task untill i<Pwlength
      password += character[randomIndex];
    }
    input[0].value = password;
  
  }
  
  //  document.getElementByClassName("btn").addEventListener("click", Getpw);