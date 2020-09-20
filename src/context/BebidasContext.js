import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const BebidasContext = createContext();

const BebidasProvider = (props) => {
     const [bebidas, changeBebidas] = useState([]);
     const [bebida, changeBebida] = useState({
          ingrediente: '',
          categoria: ''
     });
     const [spinner, changeSpinner] = useState(false);

     const {ingrediente, categoria} = bebida;
     useEffect(()=>{
          (async ()=>{
               if(ingrediente){
                    changeSpinner(true);
                    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
                    changeBebidas(data.drinks);
                    changeSpinner(false);
               }else if(categoria){
                    changeSpinner(true);
                    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`);
                    changeBebidas(data.drinks);
                    changeSpinner(false);
               }else if (ingrediente && categoria){
                    changeSpinner(true);
                    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`);
                    changeBebidas(data.drinks);
                    changeSpinner(false);
               }
          })();
          // eslint-disable-next-line
     },[bebida]);




     return (
          <BebidasContext.Provider value={{
              bebidas,
              bebida,
              spinner,
              changeBebida
          }}>
               {props.children}
          </BebidasContext.Provider>
     )
}

export default BebidasProvider