document.addEventListener("DOMContentLoaded", function(){
	// Button create
	var btnEnter = document.createElement('input');
	btnEnter.setAttribute('type','button');
	btnEnter.setAttribute('value','Заполнить');
	btnEnter.setAttribute('style','height: 28px;');
	btnEnter.className = "btn btn_signup";

	document.getElementsByClassName('btn_signup')[0].parentNode.insertBefore(btnEnter, document.getElementsByClassName('btn_signup')[0])
	btnEnter.addEventListener('click', function(){
		// generator
		var fName = '', lName = '', day, month, year, sex, randNum, passWord, 
		symbArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		randNum = Math.floor(Math.random() * 1000);
		var i = Math.floor(Math.random() * (15 - 4 + 1)) + 4;
			// Name Gen
			while(i != 0){
				var a = Math.floor(Math.random() * (symbArr.length - 0) + 0);
				fName += symbArr[a];
				i--;
			}
		var j = Math.floor(Math.random() * (15 - 4 + 1)) + 4;
			// Last Name Gen
			while(j != 0){
				var b = Math.floor(Math.random() * (symbArr.length - 0) + 0);
				lName += symbArr[b];
				j--;
			}
		passWord = "Hdhdr87tFbd5sr-SrObvctN_d2";

		day = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
		month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		year = Math.floor(Math.random() * (1996 - 1960 + 1)) + 1960;
		sex = Math.floor(Math.random() * 2);
		//
		document.getElementsByClassName('inPut')[0].value = fName; // First Name
		document.getElementsByClassName('inPut')[1].value = lName; // Last Name
		document.getElementsByClassName('days')[0].value = day; // Days
		document.getElementsByClassName('months')[0].value = month; // Month
		document.getElementsByClassName('years')[0].value = year; // Year
		document.getElementsByClassName('vtm')[sex].click(); // Sex
		document.getElementsByClassName('inPut')[3].value = fName + '_' + lName + randNum; // Mail Box
		document.getElementsByClassName('inPut')[4].value = passWord; // Password
		document.getElementsByClassName('inPut')[5].value = passWord; // Retype password
	});
});
