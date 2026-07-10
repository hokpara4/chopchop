import {createContext, useState} from 'react';

//step 1-create context : createContext()

export const ProductContext = createContext();

//step 2-create a provider component : ProductProvider. provider is a supercomponent
export const ProductProvider = ({ children }) => {
    //assume we are connected to an api a request will be sent to the api and the response will be stored in the state
    var response = [
        {
            id: 1,
            productname: 'Sunglasses',
            qty: 5
        },

         {
            id: 2,
            productname: 'Slik Scarf',
            qty: 3
        }
    ];

    const [products, setProducts] = useState(response);
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}