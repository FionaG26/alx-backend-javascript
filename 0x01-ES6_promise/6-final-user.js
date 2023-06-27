import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2]).then((results) => {
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value };
      } else {
        return { status: result.status, value: result.reason.message };
      }
    });
  });
}
