import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const result = await Promise.allSettled([userPromise, photoPromise]);
    return result.map((promise) => ({
      status: promise.status,
      value: promise.status === 'fulfilled' ? promise.value : promise.reason,
    }));
  } catch (error) {
    throw new Error(error);
  }
}

export default handleProfileSignup;
