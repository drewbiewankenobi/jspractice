var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];



// for (var i=0; i <animals.length-1; i++) {
// 	console.log("1" + " " + animals[i])
// }

// for (var i=0; i <animals.length; i+=2) {
// 	console.log("2" + " " + animals[i])
// }


// animals.reverse()
// for (var i=0; i < animals.length; i++) {
// console.log("3." + " " + animals[i])
// }

// for (var i=0; i < animals.length; i++) {
// 			if ( i===0 || i === animals.length-1) {
// 				console.log (animals[i])
// 			}
// 			else {
// 				console.log (animals[i])
// 				console.log (animals[i])
// 			}
// 	}

// var getName = function(user) {
// 	return user.name
// }
// console.log (getName({name: 'Luisa', age: 25}))

// var totalLetters = function(myArray) {
		
// 		var m = myArray.join("");
// 		return m.length
// 	}


// console.log(totalLetters(['javascript', 'is', 'awesome']))

// var keyValue = function(x,y) {
// 	var location = {}
// 	location[x]=y
// 	console.log(location)
// 	return location
// }

// console.log(keyValue('city', 'Denver'))

// negativeIndex = function(arr,x){
// 	var a = arr.length+x
// 	console.log(a)
// 	var newArray = arr.splice(a,1)
// 	var newArray = newArray.join()
// 	return newArray
// }
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

// removeM = function(x) {
// 	var newString = x.replace(/m/g, "")
// 	return newString
// }

// console.log(removeM('fammily'))

// printObject = function(myObj) {
// 	for (i in myObj){
// 		console.log (i + " is " + myObj[i])
// 	}

// }

// printObject({ firstName: 'pork', lastName: 'chops' })

// vowels = function(myString){
// 	var x = myString.match(/a|e|i|o|u/g)
// 	console.log(x)
// }

// vowels("Go out and get yo badself goin!")

// twins = function(aString){
// 	if (aString.length % 2 !== 0){
// 		return false
// 	}
// 	for (var i=0; i<aString.length; i+=2){
// 		if (aString[i]!==aString[i+1]){
// 			return false
// 		}
// 			// if (x === true){
// 			// 	var y = true
// 			// } else {var y = false}
// 			// console.log(y)
// 	}
// 	return true
// }

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))

// or = function(theArray){
// 	for (var i=0; i<theArray.length; i++){
// 		if (theArray[i]===true){
// 			return true
// 		}
// 	}
// 	return false
// }

// console.log(or([false, false, true, false]))

// unique = function(arr){
// 	thisArray = [];
// 	var storage = {}
// 	for (var i = 0; i<arr.length; i++){
// 			storage[i]=arr[i]	
// 			}
// 	return storage
// }
		

// console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))


// var students = [{
//  name: 'Liz',
//  age: 25,
//  city: 'Boulder'
// },{
//  name: 'Meghan',
//  age: 27,
//  city: 'Denver'
// },{
//  name: 'Trent',
//  age: 32,
//  city: 'Boulder'
// },{
//  name: 'Chelsea',
//  age: 24,
//  city: 'Boulder'
// },{
//  name: 'Amir',
//  age: 18,
//  city: 'Denver'
// }];

// for (i=0; i<students.length; i++){
// 		console.log (students[i].age)
// }

// for (i=0; i<students.length; i++){
// 		if (students[i].age > 25) {
// 		console.log (students[i].name + " is older than 25")
// 	}
// }

firstReverse = function(aString){
	return aString.split("").reverse().join("")
}

console.log(firstReverse("this"))

swapCase = function (myString){
	var newString = []
	for (var i=0; i < myString.length; i++)
	if (myString.charAt(i) == myString.charAt(i).toUpperCase()){
		newString.push(myString.charAt(i).toLowerCase())
	}
	else if (myString.charAt(i) == myString.charAt(i).toLowerCase()){
		newString.push(myString.charAt(i).toUpperCase())
	}
	return newString.join("")
}

console.log(swapCase("Hello World"))