function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("images/Tech-Geek-Background")) {
		image.src = "images/itssafe.jpg";
	} 
	else {
		image.src = "images/Tech-Geek-Background.jpg";
	}
}

function passGenerator() {
	//pull input to variable
	var passPhrase = document.getElementById('inPassPhrase').value;
	var i = 0;
	//pass through loop 2 times
	while (i < 3) {
		passPhrase = passUpperGen(passPhrase);
		i++;
	}
	//remove spaces
	passPhrase = spaceChar(passPhrase);
	//convert letters to special characters
	passPhrase = passCharGen(passPhrase);
	//convert letters to numbers
	passPhrase = passNumGen(passPhrase);
	//print output to html element
	document.getElementById("passOut").innerHTML = passPhrase;
}

function passCharGen (passPhrase) {
	var testPhrase = passPhrase;

	//replace a with @
	testPhrase = testPhrase.replace(/a/, @);
	testPhrase = testPhrase.replace(/i/, !);
	testPhrase = testPhrase.replace(/s/, $);
	testPhrase = testPhrase.replace(/t/, +);
	testPhrase = testPhrase.replace(/x/, %);

	//set passPhrase to equal tempVar
	passPhrase = testPhrase;

	//send passPhrase to main function
	return passPhrase;
}

function passNumGen (passPhrase) {
	var testPhrase = passPhrase;
	var eStr = "36";
	var sStr = "25";

	testPhrase = testPhrase.replace(/i/, 1);
	testPhrase = testPhrase.replace(/s/, sStr.charAt(Math.floor(Math.random() * sStr.length)));
	testPhrase = testPhrase.replace(/e/, eStr.charAt(Math.floor(Math.random() * eStr.length)));
	testPhrase = testPhrase.replace(/h/, 4);
	testPhrase = testPhrase.replace(/t/, 7);
	testPhrase = testPhrase.replace(/a/, 8);
	testPhrase = testPhrase.replace(/g/, 9);
	testPhrase = testPhrase.replace(/o/, 0);

	passPhrase = testPhrase;
	return passPhrase;
}

function spaceChar(firstProd){
	var testPhrase = firstProd;
	testPhrase = testPhrase.replace(/ /g, "");
	//spcChar = spcChar.replace(" ", str.charAt(Math.floor(Math.random() * str.length)));
	firstProd = testPhrase;
	return firstProd;
}

function passUpperGen (passPhrase) {
	var testPhrase = passPhrase;
	var passArr = testPhrase.split("");
	var arrLength = passArr.length;
	var upperGen = Math.floor((Math.random() * arrLength) + 1);
	while (passArr[upperGen] == " ")
		var upperGen = Math.floor((Math.random() * arrLength) + 1);
	var tempPhrase = "";
	var str = passArr[upperGen];
	passArr[upperGen] = str.toUpperCase();
	for (var i = 0; i < passArr.length; i++) 
		tempPhrase += passArr[i];
	passPhrase = tempPhrase;
	
	return passPhrase;
}
