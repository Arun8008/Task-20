   let but=document.querySelector('button');
		 function gen() {
			var letters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var passwordLength = 12;
			var result = "";
		 for (var i = 0; i <= passwordLength; i++) {
		   var randomNumber = Math.floor(Math.random() * letters.length);
		   result += letters.substring(randomNumber, randomNumber +1);
		  }
				document.getElementById("pass").value = result;
		 }	