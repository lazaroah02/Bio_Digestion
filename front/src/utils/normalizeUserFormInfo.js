//function to use allways the same reference of user properties 
export function userInfo({
    username = "",
    email = "",
    firstName = "",
    lastName = "",
    password = "",
    isStaff = false,
    isActive = true
}){
    return {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        isStaff: isStaff,
        isActive: isActive 
    }
}

//function to create the user object to send to the api
export function createUserObjectToAPI({
    username = "",
    email = "",
    firstName = "",
    lastName = "",
    password = "",
    isStaff = false,
    isActive = true
}){
    return {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        is_staff: isStaff,
        is_active: isActive 
    }
}