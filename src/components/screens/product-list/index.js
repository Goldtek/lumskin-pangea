import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { useSelector } from 'react-redux';

import { Product } from '../../custom'
import './product.css';



const ProductList = () =>{
  const Cart = useSelector((state) => state.Cart);
  const currency = Cart.currency;

   
const GET_PRODUCTS = gql`
query {
  products {
    title,
    id,
    image_url,
    price(currency:${currency})
  }
}
`
  return (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
        return (
          <section>
            <div className="row">
              {data.products.map((item)=> 
              <Product item={item} key={item.id} />
              )}
            </div>
          </section>
        )
    }}
  </Query>
  )
}


export default ProductList;