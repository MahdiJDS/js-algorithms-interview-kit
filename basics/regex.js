//___________Regex

let email = "-.test@example.com";
console.log(/^[\w.-]+@[a-z]+\.[a-z]{2,}$/.test(email));



let phone = "09121234567";
console.log(/^09\d{9}$/.test(phone));

