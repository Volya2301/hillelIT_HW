var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
let pattern = /\b[^Aa\s]{6,}\b/g;
let matchesReg = text.match(pattern);

for (let i = 0; i < arr.length; i++){
    
    console.log(arr[i])
}

// console.log(arr)

// let valid = "example@example.com"

// let invalid = "1example@.net"

// let matchExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/



// for (let element of arr){
//     let matchExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// }
