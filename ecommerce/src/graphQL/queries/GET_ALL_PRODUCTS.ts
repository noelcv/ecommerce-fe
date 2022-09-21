import { gql } from '@apollo/client';


const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
  getAllProducts {
    id
    name
    price
    currency
    description
    rating
    image
    category
    location
    date
    createdAt
    updatedAt
    isCancelable
    cancelationPolicy
    isRefundable
    refundPolicy
    boughtBy
    quantityInStock
    venueCapacity
  }
}
  `

export default GET_ALL_PRODUCTS;