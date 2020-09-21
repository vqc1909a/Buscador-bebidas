import React, {Fragment, useContext} from 'react';
import {ModalContext} from '../context/ModalContext';
import Spinner from '../components/Spinner';
const Bebida = ({bebida}) => {

     const {changeId, receta, cantidad, spinner} = useContext(ModalContext);

     const {strDrink, strDrinkThumb, idDrink} = bebida;


     return (
          <Fragment>
               <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                    <div className="card bg-primary">
                         <img src={strDrinkThumb} alt={strDrink} className="card-img-top"/>
                         <div className="card-body">
                              <h4 className="lead text-white">{strDrink}</h4>
                         </div>
                         <div className="card-header">
                              <button className="btn btn-secondary btn-block" data-toggle="modal" data-target={`#recetaModal${idDrink}`} onClick={() => changeId(idDrink)}>Ver Receta</button>
                         </div>
                    </div>
               </div>

               <div className="modal fade" id={`recetaModal${idDrink}`}>
                    <div className="modal-dialog">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h4 className="modal-title text-uppercase">Receta</h4>
                                   <button type="button" className="close" data-dismiss="modal">
                                        <span>&times;</span>
                                   </button>
                              </div>
                              {!spinner
                              ?
                              <Fragment>
                              <div className="modal-body">
                                   <div className="text-center">
                                        <img src={strDrinkThumb} alt={strDrink} className="img-fluid rounded-circle" style={{height: '50vh'}}/>
                                   </div>
                                   <div className="ingredientes my-2 py-2">
                                        <h5 className="text-right">Ingredientes</h5>
                                        <ul className="list-group list-group-flush text-right">
                                             {cantidad.map(cant => <li key={cant} className="list-group-item">*{receta[`strMeasure${cant}`]} {receta[`strIngredient${cant}`]}</li>)}
                                        </ul>
                                   </div>
                                   <div className="preparacion my-2 py-2 border-top border-bottom">
                                        <h5>Preparación</h5>
                                        <p>{receta.strInstructions}</p>
                                   </div>
                                   <div className="vaso my-2 py-2 border-bottom">
                                        <h5 className="text-center">Vaso</h5>
                                        <p className="text-center">{receta.strGlass}</p>
                                   </div>
                              </div>
                              <div className="modal-header">
                                   <button className="btn btn-danger ml-auto" data-dismiss="modal">
                                        Cerrar
                                   </button>
                              </div>
                              </Fragment>
                              :
                              <Spinner></Spinner>
                              }

                         </div>
                    </div>
               </div>
          </Fragment>

     
     );
}
 
export default Bebida;