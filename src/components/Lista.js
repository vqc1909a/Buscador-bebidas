import React, {Fragment, useContext} from 'react';
import Bebida from '../components/Bebida';
import {BebidasContext} from '../context/BebidasContext';

const Lista = () => {
     const {bebidas, bebida} = useContext(BebidasContext);
     const {ingrediente, categoria} = bebida;

     let component;
     if(ingrediente || categoria){
          component = 
          <Fragment>
               <h3 className="text-white text-uppercase">Resultados</h3>
               <ul className="list-group list-group-flush my-3">
                    <li className="list-group-item"><span className="text-uppercase">Ingrediente:</span> {ingrediente}</li>
                    <li className="list-group-item"><span className="text-uppercase">Categoría:</span> {categoria ? categoria : 'No definido'}</li>
               </ul>
          </Fragment>
     }else{
          component = null
     }
     return (
          <div className="lista">
               <div className="container">
                    {component}
                    <div className="row my-4">
                         {bebidas.map(bebida => <Bebida key={bebida.idDrink} bebida={bebida}></Bebida>)}
                    </div>
               </div>
          </div>
     );
}
 
export default Lista;