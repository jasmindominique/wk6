
// HW

let users = [];


let signInButton= document.querySelector(".sign-in-button");
let nameInput = document.querySelector(".name");
let companyInput = document.querySelector(".company");
let welcomeNameSpan = document.querySelector(".welcome-name");
let welcomeNumberSpan = document.querySelector(".welcome-number");
let genderInput = document.querySelector(".gender");

	

	// Not working - I believe I need a span

signInButton.onclick = function(){
	console.log("there are " + users.length + " people at speed dating");

	let name = nameInput.value;
	let company = companyInput.value;
	let gender = genderInput.value;
	document.querySelector(".name").value=""
	document.querySelector(".company").value=""
	document.querySelector(".gender").value=""
	

	let blue = "#74D6FF";
	let pink = "#FF82A8";
	let purple = "#A487FF";
	

   if (gender == "m") {
		document.body.style.background = blue;
		
	}

	else if (gender == "f") {
		document.body.style.background = pink;
	}

	else if (gender == "o"){
		document.body.style.background = purple;
	}


	welcomeNameSpan.innerText = name

	let user = {
		name: name,
		company: company,
		gender: gender,
		
	}
	users.push(user)

	welcomeNumberSpan.innerText = convertToOrdinalNumber(users.length);
}

	let convertToOrdinalNumber = function(num){
		if (num === 1){
			return "1st";
		}
		if (num === 2){
			return "2nd";
		}
		if (num === 3){
			return "3rd";
		}
		if (num > 3 && num < 21){
			return num + "th"
		}
		if (num % 10 === 1){
			return num + "st"
		}
		if (num % 10 === 2){
			return num + "nd"
		}
		if (num % 10 === 3){
			return num + "rd"
		}

		return num + "th"
}

	




















