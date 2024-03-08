// ALERT CHAP 1

// alert("Error ! pls enter a valid password");


// alert( "Welcome To Js Land ! \n Happy Coding...");

// alert( "Hey ! I can run JS thru my developers console");


//  Chap 2 Variable

// var userName = "Muhammad Mustafa Ali";
// var age = "I'm 20 Yrs old";
// var certificate = "Soon To be Certified Saylani web & mobile dev student";
// alert(userName);
// alert(age);
// alert( certificate);


// PIZZA 


// var word= "Pizza \n pizz \n piz \n pi \n p";
// alert(word);




// email add and email 
// var name =" My Email Address Is ";
// var email = "mustafaaaly27@gmail.com";
// var sentence = name + email;
// alert(sentence) 



// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);


// var sentence1 =" I'm trying to learn from a book.";
// var sentence2 = " A smarter way to learn javascript";
// alert(sentence1 + sentence2);



//  CHAPTER 3

// var age = " I am 20 Years old";
// alert(age);



// ---> CHAPTER 5

// var num1 = 5;
// var num2 = 3;
// var sum = num1 + num2 ;
// alert("sum of 3 and 5 is " + sum);

// var num1 = 5;
// var num2 = 3;
// var sub = num1 - num2 ;
// alert("sub of 3 and 5 is " + sub);

// var num1 = 5;
// var num2 = 3;
// var product = num1 * num2 ;
// alert("product of 3 and 5 is " + product);

// var num1 = 10;
// var num2 = 2;
// var division = num1 / num2 ;
// alert("division of" +   " " + num1 +" and " + num2 + "is" + " " + division);



// Price of one movie ticket (in PKR)
// const ticketPrice = 600;

// // Number of tickets to buy
// const numTickets = 5;

// // Calculate total cost
// const totalCost = ticketPrice * numTickets;

// // Get the paragraph element where we'll display the cost
// const costElement = document.getElementById("ticketResult");

// // Update the paragraph content with the calculated cost
// costElement.textContent = "The total cost of buying " + numTickets + " tickets is " + totalCost + " PKR.";




// let celsiusTemp = 25;
// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// console.log(celsiusTemp, "°C is equal to", fahrenheitTemp, "°F");
// alert(celsiusTemp+ "°C is equal to"+ fahrenheitTemp+ "°F");


// Function to add an item to the cart
// function addToCart(itemId, itemName, price) {
//     // Get a reference to the cart items list
//     const cartList = document.getElementById("cart-items");

//     // Create a list item element to represent the cart item
//     const cartItem = document.createElement("li");

//     // Set the content of the list item to show product details
//     cartItem.textContent = itemId + ". " + itemName + " - $" + price;

//     // Add the cart item to the list
//     cartList.appendChild(cartItem);
//   }

// let totalMarks = 750 ;
// let marksObtained = 530;
// let Percentage = marksObtained / totalMarks * 100;

// const total = document.getElementById("marks");
// total.textContent ="total Marks =" +  totalMarks;

// const obtained= document.getElementById("obt")
// obtained.textContent = "marks Obtained =" + marksObtained; 

// const result = document.getElementById ("percentageTotal");

// result.textContent = "total Percentage" + Percentage + " %" ;




// var choclate = "choclate chip"
// const snack = document.getElementById("snack")
// snack.textContent = "Favourite Snack :" + choclate ;
// var age1 = 20;
// const cAge = document.getElementById("cAge");
// cAge.textContent = "Current Age :" + age1;

// var estimateAge = 69;
// const eAge = document.getElementById("eAge");
// eAge.textContent = "Estimated Age : " + estimateAge ; 


// // Initialize the number for the multiplication table
// var number = 4;

// // Generate the multiplication table
// var table = "<h2>Table of " + number + "</h2>";
// for (var i = 1; i <= 10; i++) {
//     table += number + " x " + i + " = " + (number * i) + "<br>";
// }

// // Display the multiplication table
// document.getElementById("multiplicationTable").innerHTML = table;



// Store the radius of the circle in a variable
// var radius = 5; // For example, assume the radius is 5

// // Calculate the circumference of the circle
// var circumference = 2 * Math.PI * radius;

// // Calculate the area of the circle
// var area = Math.PI * radius * radius;

// // Display the results in the browser
// document.write("<p>Radius of Circle : 2</p>");
// document.write("<p>The circumference is : " + circumference.toFixed(2) + "</p>");
// document.write("<p>The area is : " + area.toFixed(2) + " </p>");




//   // Define subjects and obtained marks
//   var subject1 = "Mathematics";
//   var subject2 = "Urdu";
//   var subject3 = "English";
//   var totalMarks = 100;
//   var obtainedMarks1 = 85;
//   var obtainedMarks2 = 90;
//   var obtainedMarks3 = 80;

//   // Calculate total obtained marks and percentage
//   var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//   var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//   // Display the result in a table format
//   document.write("<table>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//   document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//   document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//   document.write("<tr><td colspan='2'>Total Obtained Marks:</td><td>" + totalObtainedMarks + "</td></tr>");
//   document.write("<tr><td colspan='2'>Percentage:</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
//   document.write("</table>");



//  // Prompt the user for city name
//  var cityName = prompt("Enter your city name:");

//  // Check if the entered city is Karachi
//  if (cityName && cityName.toLowerCase() === "karachi") {
//    // If it's Karachi, display the welcome message
//    alert("Welcome to the city of lights!");
//  } else {
//    // If it's not Karachi, display a generic message
//    alert("Welcome!");
//  }






// // Prompt the user for their gender
// var gender = prompt("Enter your gender (male/female):");

// // Check the gender and display the appropriate greeting
// if (gender) {
//   if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
//   } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
//   } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
//   }
// } else {
//   alert("No input provided.");
// }



// // Prompt the user to enter the color of the traffic signal
// var signalColor = prompt("Please enter the color of the traffic signal (Red, Yellow, or Green):");

// // Convert the input to lowercase for easier comparison
// signalColor = signalColor.toLowerCase();

// // Display the corresponding message based on the input color
// if (signalColor === "red") {
//   alert("Must Stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to move");
// } else if (signalColor === "green") {
//   alert("Move now");
// } else {
//   alert("Invalid color. Please enter either Red, Yellow, or Green.");
// }


// function checkFuel() {
//     const fuel = parseFloat(document.getElementById("fuel").value);
//     let message;

//     if (fuel < 0.25) {
//         message = "Please refill the fuel in your car";
//     } else {
//         message = "Your fuel level is sufficient.";
//     }

//     document.getElementById("message").innerText = message;
// }



// function checkDivisibility() {
//     const number = document.getElementById("number").value;
//     let message;

//     if (number % 3 === 0) {
//         message = "The number is divisible by 3.";
//     } else {
//         message = "The number is not divisible by 3.";
//     }

//     document.getElementById("message").innerText = message;
// }



//  function checkEvenOdd() {
    //     const number = document.getElementById("number").value;
    //     let message;
    
    //     if (number % 2 === 0) {
    //         message = "The number is even.";
    //     } else {
    //         message = "The number is odd.";
    //     }
    
    //     document.getElementById("message").innerText = message;
    // }


    // function checkTemperature() {
//     const temperature = document.getElementById("temperature").value;
//     let message;

//     if (temperature > 40) {
//         message = "It is too hot outside.";
//     } else if (temperature > 30) {
//         message = "The Weather today is Normal.";
//     } else if (temperature > 20) {
//         message = "Today’s Weather is cool.";
//     } else if (temperature > 10) {
//         message = "OMG! Today’s weather is so Cool.";
//     } else {
//         message = "The temperature is below 10 degrees. Bundle up!";
//     }

//     document.getElementById("message").innerText = message;
// }



function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operation = document.getElementById("operation").value;
    let result;

    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            result = "Error: Division by zero";
        } else {
            result = firstNumber / secondNumber;
        }
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
    } else {
        result = "Error: Invalid operation";
    }

    document.getElementById("result").innerText = "Result: " + result;
}