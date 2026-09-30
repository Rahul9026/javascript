score = "33"  //string type of data
score = Number(score) //converting string to number
console.log(typeof score) //number

//BE CAREFUL WHILE CONVERTING STRING TO NUMBER BECAUSE IF THE STRING IS NOT A NUMBER THEN IT WILL RETURN NAN
score1= "33abc"
score1 = Number(score1)
console.log(score1) //NaN
console.log(typeof score1) //number

let score2 = null
score2 = Number(score2)
console.log(score2) //0
console.log(typeof score2) //number


let score3 = undefined
score3 = Number(score3)
console.log(score3) //NaN
console.log(typeof score3) //number

let score4 = true
score4 = Number(score4)
console.log(score4) //1
console.log(typeof score4) //number



// number is a datatpe and Number is a converter function which is used to convert string to number


/* 
1 => true
0 => false 
"" => false
"rahul" => true


*/