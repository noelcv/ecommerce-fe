export async function createUser(isAuthUser: {
  uid: string;
  email: string;
  displayName?: string;
  userName?: string;
}): Promise<any> {
  try {
    const newUserData = {
      uid: isAuthUser.uid,
      email: isAuthUser.email,
      userName: isAuthUser.displayName ? isAuthUser.displayName : 'new user',
    };
    console.log("newUserData at createUser service", newUserData)
    //TODO: add user to database, but first adjust the schema in the GRAPHQL API
    // const newProfile = await fetch(import.meta.env.VITE_GRAPHQL_API, {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json' },
    //   body: JSON.stringify({
    //     query: `mutation CreateProfile($newUserData: ProfileInput!) {
    //       createProfile(newUserData: $newUserData) {
    //         id
    //         uid
    //         email
    //         userName
    //       } 
    //     }`,
    //     variables: {
    //       newUserData,
    //     },
    //   }),
    // });
    // if (newProfile.ok) {
    //   return await newProfile.json();
    // }
  } catch (err) {
    console.log('Error at createUser Service: ', err);
  }
}
