
//lets create a function that will count to a series of number depending on the input of the user.

//get the value of the input field in order to get the value of the input, using a dot(.) notation call out it's value property.

//THERE ARE 5 WAYS to select elements (5 DOM selectors)
//1. getElementByTagName ()		//collective through the use of the element/tag name
//2. getElementByClassName()	//collective through the use of their class attributes.
//3. getElementById()			//select a distint/specific through the use of it's id attribute.
//4. querySelector()			//neutral/verstatile selection.
//5. querySelector()			//collective approach when selecting multiple components/elements at once.

function countUsingWhile() {
	let input1 = document.getElementById('task1').value;
	if (input1 <= 0) {
		//NOT VALID
		//inform the user that the input is not Valid.
		//innerHTML property.
		let msg = document.getElementById('message');
		msg.innerHTML = 'Value Not Valid';
	} else {
		//VALID
		while (input1 !==0) {
		//what will happen if the condition has not/ been met.
		alert(input1);
		input1-- //decrease the value of the input by 1 per iteration of the loop.
	}
}
}

//