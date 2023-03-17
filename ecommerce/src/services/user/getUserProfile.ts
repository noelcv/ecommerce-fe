

export async function getUserProfile(uid: string): Promise<any> {
  try {
    const userProfile = await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { uid: uid },
        query: `
        query GetUserProfile($uid: String!) {
          getUserProfile(uid: $uid) {
            bio
            picture
          }
        }
        `,
      }),
    });
    if (userProfile.ok) {
      const parsedProfile = await userProfile.json();
      console.log('userProfile parserd', parsedProfile);
      return parsedProfile.data.getUserProfile;
    }
  } catch (err) {
    console.log('Error at getUserProfile Service: ', err);
  }
}
