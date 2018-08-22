let user = {
    name: 'John',
    age: 32
};

let userStr = JSON.stringify(user);
localStorage.setItem('user', userStr);

let userGot = localStorage.getItem('user');
let userParsed = JSON.parse(userGot);
console.log('-----', userParsed);

user.name = 'Jane';

userStr = JSON.stringify(user);
localStorage.setItem('user', userStr);

userGot = localStorage.getItem('user');
userParsed = JSON.parse(userGot);
console.log('=====', userParsed);

// localStorage.removeItem('user');
// console.log('_____', localStorage.getItem('user'));

localStorage.clear();
console.log('-_-_-', localStorage.getItem('user'));


