// let name = "Nhan"
// console.log(name);
// let age = 20;
// console.log(age)

// let nameInput = prompt("Enter name");
// console.log(nameInput);

// setTimeout(() => {
//     console.log('nhan');
// },3000)
// setTimeout(() => {
//     let nameInput = prompt("Enter name");
// console.log(nameInput);
// },0)
// let a = 1;
// let b = 2;
// console.log(a + b);

// let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let getWater = false;
//         if (getWater) {
//             resolve("nuoc ve roi");
//         } else {
//             reject("ko co nuoc")
//         }
//     },3000)
// })

// console.log(myPromise)
// console.log("quet nha")
// console.log("play cau long")

// myPromise
//     .then(function (data) {
//         return data + '. di nau com di';
//     }).then(function (rest) { /// nó sẽ là cái kia dữ liệu của then trên
//         console.log(rest);
//     })
//     .catch(function (err) {
//         console.log(err)
//     })



// const transfromData = (users) => {
//     const newUser = [];
//     for (let user of users) {
//        // console.log(user);
//         newUser.push({
//             ...user,
//             fullName: `${user.first_name} ${user.last_name}`,
//         });
       
//     }
//     console.log(newUser);
// }


// getData('https://reqres.in/api/users?page=2',transfromData)
// const getData2 = async () => {
//     try {
//         const request = await fetch('https://reqres.in/api/users?page=2');
//         const data = await request.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
    // }
// getData2()

// const renderUsers = (users) => {
//     for (var i = 0; i < users.length; i++) {
//         console.log(users[i])
//     }
// }
// // getData();
import { mockUser } from "./mockdata.js";

const getData = async(url,callback) => {
    try {
    const request =await fetch(url);
        const data = await request.json();
        callback(data.data);
    } catch (err) {
        alert(err.message)
    }

};
const renderUser = (users) => {
    
    for (let user of users) {
        const userDiv = createUser(user)
        const rootElement = document.getElementById('root')
        rootElement.appendChild(userDiv)
    }
    
}


const createUser = (user) => { 
    //console.log(user);
    const { first_name, last_name, avatar, email } = user;

    const userDiv = document.createElement('div')
    userDiv.classList.add('user')
    
    const avatarElement = document.createElement('img')
    avatarElement.src = avatar;

    const fullNameElement = document.createElement('h2')
    fullNameElement.innerText = `${first_name} ${last_name}`;
    
    const emailElement = document.createElement('p')
    emailElement.innerText=email
    // return `
    // <div class="user">
    //     <img src="${avatar}" alt="">
    //     <h2>${first_name} ${last_name}</h2>
    //     <p>${email}</p>
    // </div>
    // `
    userDiv.appendChild(avatarElement)
    userDiv.appendChild(fullNameElement)
    userDiv.appendChild(emailElement)
    return userDiv;
}
 createUser(mockUser)

getData('https://reqres.in/api/users?page=2', renderUser);

