import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const userStatus = userResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';
    const photoStatus = photoResult.status === 'fulfilled' ? 'fulfilled' : 'rejected';

    return [
      {
        status: userStatus,
        value: userStatus === 'fulfilled' ? userResult.value : userResult.reason,
      },
      {
        status: photoStatus,
        value: photoStatus === 'fulfilled' ? photoResult.value : photoResult.reason,
      },
    ];
  } catch (error) {
    console.log(error);
    return [];
  }
}
