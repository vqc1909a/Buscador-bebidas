import React, {useContext} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import {BebidasContext} from '../context/BebidasContext';
import Spinner from '../components/Spinner';
const Bebidas = () => {
     const {spinner} = useContext(BebidasContext);
     return (
          <section className="bebidas">
               <Formulario title="Busca bebidas por ingrediente o categoría"></Formulario>
               {!spinner
               ?
               <Lista></Lista>
               :
               <Spinner></Spinner>
               }
          </section>     
     );
}
 
export default Bebidas;  