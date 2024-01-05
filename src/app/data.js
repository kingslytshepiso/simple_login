"use server";
import reactSessionApi from "react-session-api";

const sessKey = "NSession";
const mockUsers = [
  {
    username: "kingslytshepiso@gmail.com",
    password: "12345678",
  },
  {
    username: "john.doe@mail.com",
    password: "12345678",
  },
];

export async function SubmitLogin(formData) {
  let userSession = formData.username + "; " + formData.password + ";";
  await sleep(4000);
  if (validateUser(formData.username, formData.password)) {
    var newSession = { sessionId: userSession, isLogged: true };
    reactSessionApi.config(true, 36900);
    reactSessionApi.set(sessKey, newSession);
    console.log("validated to true");
    return true;
  }
  console.log("validated to false");
  return false;
}
export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function validateUser(username, password) {
  var found = false;
  for (let i = 0; i < mockUsers.length; i++) {
    if (
      username === mockUsers[i].username &&
      password === mockUsers[i].password
    ) {
      console.log(username === mockUsers[i].username);
      console.log(password === mockUsers[i].password);
      found = true;
    }
  }
  return found;
}
