import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
     
     const [categorias, changeCategorias] = useState([]);
     useEffect(()=>{
          (async ()=>{
               const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
               changeCategorias([...data.drinks]);
          })();
          // eslint-disable-next-line
     },[])
     
     return (
          <CategoriasContext.Provider value={{
               categorias
          }}>
               {props.children}
          </CategoriasContext.Provider>
     )
}
export default CategoriasProvider;

