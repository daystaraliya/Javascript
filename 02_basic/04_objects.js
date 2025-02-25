//object singleton

const tinderUser = new Object()//singleton object
tinderUser.id = "123abc"
tinderUser.name = "joe"
tinderUser.isLogged = false
console.log(tinderUser);

const user2 = {
    email :"some@gmail.com",
    fullName: {
        userName : {
            Fname : "john",
            Lname : "wick"
        }
    },
    password : "3241",
}
console.log(user2);
console.log(user2.fullName?.userName.Lname);

console.log(user2.isLogged?.userName.Lname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = Object.assign(obj1 ,obj2)//modify obj1 and then merge obj2 ,obj3 will point to refrence of modified obj1 instead of crearing new object
const obj4 = Object.assign({} ,obj1 ,obj2)//{} refers to creation of new object obj4 assign its property from obj1 and obj2
console.log(obj3);
console.log(obj4);


//destructuring of object
const course = {
    courseName : "B.tech",
    branch : "CSE",
    price : "aukatKeBahar",
    courseInstructor : "Hitesh"
}

const {x:courseInstructor} = course
console.log(x);



