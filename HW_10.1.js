let usersArr = [
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
    {
        userName:"Neo",
        lastName:"Bro",
        email:"neo.brov@gmail.com" 
    }
];
let trustedEmails = [];
let emailPatern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

for (let i = 0; i < usersArr.length; i++) {
    let usersMails = usersArr[i].email;
    if (usersMails.match(emailPatern)) {
        trustedEmails.push(usersMails);
    }
}

console.log(trustedEmails);