import { UserType } from "../../types/UserType";

export async function findUser(user: UserType): Promise<any> {
  try {
    const userExists = await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { uid: user.uid },
        query: `query FindUserByUid($uid: String!) {
          findUserByUid(uid: $uid) {
            code
            success
            message
            user {
              id
              uid
              email
              username
              role
              profile {
                picture
                bio
              }
            }
          }
        }`,
      }),
    });
    if (userExists.ok) {
      const parsedProfile = await userExists.json();
      console.log('userexists', parsedProfile);
      console.log('user Exists fillet mignon', parsedProfile.data.findUserByUid.user);
      return parsedProfile.data.findUserByUid.user;
    }
  } catch (err) {
    console.log('Error at findUser Service: ', err);
  }
}
