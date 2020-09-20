import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const IngredientesContext = createContext();

const IngredientesProvider = (props) => {

     const [ingredientes, changeIngredientes] = useState([]);

     useEffect(() => {
          (async ()=>{
               const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
               changeIngredientes([...data.drinks])
          })();
     }, [])

     return (
          <IngredientesContext.Provider value={{
               ingredientes
          }}>
               {props.children}
          </IngredientesContext.Provider>
     )
}
export default IngredientesProvider;