import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
  } catch {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
