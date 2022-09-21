

const GRAPHQL_API_URL: string = "http://localhost:3000/graphql";

export const getAllProducts = async () => {
  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        query: `query GetAllProducts {
          getAllProducts {
            id
            name
            price
            currency
            rating
            image
            category
            description
          }
        }`
      })
      
      
    });
    const parsedResponse = await response.json();
    console.log('parsedResponse', parsedResponse)
    const products = parsedResponse.data.getAllProducts;
    return products;
  }
  catch(error) {
    console.log('Error at getAllProducts Service: ', error)
  }
}