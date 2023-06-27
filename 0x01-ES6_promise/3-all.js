import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
