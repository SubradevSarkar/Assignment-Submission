//Javascript Essentials course(LetsUpgrade)
//Auth - Subradev sarkar
// * * *  Assignment 2 * * * 



// Question 1 -- Fizz Buzz
// 1-100
// 3-Fizz
// 5-Buzz
// 15-fizzBuzz
let mod3
let mod5
for (let i = 1; i <= 100; i++) {
    mod3 = i - (3 * Math.floor(i / 3))
    mod5 = i - (5 * Math.floor(i / 5))

    if (mod3 === 0 && mod5 === 0) {
        console.log("fizzBuzz");
    } else if (mod3 === 0) {
        console.log("Fizz");
    } else if (mod5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



// Question 2 -- Palindrom
// s = "Madam is walking on the road"
let str = "Madam and mom are walking on road"
str = str.toLowerCase()
str += " "

let s1 = ""
let s2 = ""

for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        s1 = s1 + str[i]
        s2 = str[i] + s2
    } else if (str[i] == " ") {
        if (s1 == s2) {
            console.log(s1 + " - palindrom")
        } else {
            console.log(s1 + " - non-palindrom")
        }

        s1 = ""
        s2 = ""
    }
}