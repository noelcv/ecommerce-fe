import { UserType } from "../../types/UserType";

export async function createUser(newUser: UserType): Promise<any> {
  try {
    console.log("newUserData at createUser service", newUser)
    
    
    //TODO: add user to database, but first adjust the schema in the GRAPHQL API
    const newProfile = await fetch(import.meta.env.VITE_GRAPHQL_API, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        variables: { input: newUser },
        query: `mutation CreateNewUser($input: UserInput!) {
          createNewUser(input: $input) {
            code
            success
            user {
              id
              uid
              email
              username
              role
            }
          }
        }`,
      }),
    });
    if (newProfile.ok) {
      const parsedProfile = await newProfile.json();
      console.log('parsedProfile', parsedProfile);
      console.log('parsed fillet mignon', parsedProfile.data.createNewUser.user);
      return parsedProfile.data.createNewUser.user;
    }
  } catch (err) {
    console.log('Error at createUser Service: ', err);
  }
}
