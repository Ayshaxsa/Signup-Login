function signnup(userName){
    let users = ["Ayesha", "John", "Alex", "Sara"]


    if(users.includes(userName)){
        return "User Already Registered, Please Login";
    }
    else{
        users.push(userName)
        return "Signup Successful, Please Login"
    }
}

console.log(signnup("Ayesha"))