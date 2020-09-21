import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();
const ModalProvider = (props) => {

     const [id, changeId] = useState(null);
     const [receta, changeReceta] = useState({});
     const [cantidad, changeCantidad] = useState([]);
     const [spinner, changeSpinner] = useState(false);

     useEffect(()=>{
          (async ()=>{
               if(!id) return null;
               changeSpinner(true);
               const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
               changeReceta({...data.drinks[0]});
                let newcantidad = [];
                for (let i = 1; i <= 15; i++) {
                     if (receta[`strIngredient${i}`]) {
                          newcantidad.push(i);
                     }
                }
                changeCantidad([...newcantidad]);
                changeSpinner(false);
          })();
     },[id, receta]);

     return (
          <ModalContext.Provider value={{
               changeId,
               receta,
               cantidad,
               spinner,
          }} >
               {props.children}
          </ModalContext.Provider>    
     )
}
export default ModalProvider