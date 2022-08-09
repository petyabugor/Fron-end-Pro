//1)
let name1 = 'Petr';
const name2 = 'Petr';
name1= 'Pavel';

//2)
let user;
let superUser;
let listActiveUsers;
let isUserActive;

//3)
let arr = ['1', '2', '3', '4', '5',]

let client = {
    firstName: 'Petr',
    lastName: 'Bugor',
    age: '27'
}

let world= 'мир'
console.log(`Привет ${world}`)

/*4))
1. 10 < 3                  false
2. ‘hi’ != ‘hello’         true
3. 1 == ‘1’                true
4. null == ‘null’          false
5. null === undefined      false
6. 1 === 1 && ‘hi’         hi
7. true && ‘I love js’     I love js
8. 123 && ‘hi’ || ‘hello’  hi
9. 0+ ? true : false       false
10. 1 + 1                  2
11. '12' + '31'            1231
12. 3 / '3'                1
13. 10 * 'hello'           NaN
14. '13'++                 Если это переменая, то 13
15. ++13                   Если это переменая, то 14
*/

//5))
 let admin=true
 let superAdmin= false
 let unUser= false
 if(user) {
    console.log('Hello user')
 } else if(admin){
    console.log('Hello admin')
 } else if(superAdmin){
    console.log('Hello superAdmin')
 } else {
    console.log('Hello unUser')
 }

 (user) ? console.log('Hello user'):
 (admin) ? console.log('Hello admin'):
 (superAdmin) ? console.log('Hello superAdmin'):
 console.log('Hello unUser');

 const switchRole = 'admin';

 switch(switchRole){
    case 'user':
        console.log('Hello User')
        break;
    case 'admin':
        console.log('Hello admin')
        break;   
    case 'superAdmin':
        console.log('Hello superAdmin')
        break; 
    default:
        console.log('Hello unUser')
        break;
 }

 //6)
let switchPlant = 'Potato'
switch (switchPlant) {
    case 'Potato':
    case 'Tomato':
    case 'Cucumber':
    case 'Carrot':
        console.log('Овощь')
        break;
    default:
    case 'Orange':
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
        console.log('Фрукт')
        break;
}




 




