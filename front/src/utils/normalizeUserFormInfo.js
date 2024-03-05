//function to use allways the same reference of user properties
export function userInfo({
  id = "",
  username = "",
  email = "",
  first_name = "",
  last_name = "",
  password = "",
  is_staff = false,
  is_active = true,
  last_login = null,
  date_joined = null,
}) {
  return {
    id:id,
    username: username,
    email: email,
    firstName: first_name,
    lastName: last_name,
    password: password,
    isStaff: is_staff,
    isActive: is_active,
    lastLogin:last_login,
    dateJoined:date_joined,
  };
}

//function to create the user object to send to the api
export function createUserObjectToAPI({
  values: {
    id = "",
    username = "",
    email = "",
    firstName = "",
    lastName = "",
    password = null,
    isStaff = false,
    isActive = true,
  },
  creating = true,
}) {
  return creating
    ? {
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        is_staff: isStaff,
        is_active: isActive,
      }
    : {
        id:id,
        username: username,
        email: email,
        first_name: firstName,
        last_name: lastName,
        is_staff: isStaff,
        is_active: isActive,
      };
}

//user form initial values
export function userFormInitialValues() {
  return {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    isStaff: false,
    isActive: true,
  };
}
