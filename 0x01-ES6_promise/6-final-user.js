import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(fileName);
    
    promises.push({ status: 'fulfilled', value: user });
    promises.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    promises.push({ status: 'rejected', value: error.message });
  }
  
  return promises;
}

export default handleProfileSignup;
