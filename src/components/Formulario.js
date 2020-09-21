import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {IngredientesContext} from '../context/IngredientesContext';
import {BebidasContext} from '../context/BebidasContext';
import PropTypes from 'prop-types';


const Formulario = ({title}) => {
     const {categorias} = useContext(CategoriasContext);
     const {ingredientes} = useContext(IngredientesContext);
     const {changeBebida} = useContext(BebidasContext);
     
     const [busqueda, changeBusqueda] = useState({
          ingrediente: '',
          categoria: ''
     }) 
     const [error, changeError] = useState(false);

     const {ingrediente, categoria} = busqueda;

     const handleBusqueda = (e) => {
          changeBusqueda({
               ...busqueda,
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          if(ingrediente.trim() === '' && categoria.trim() === ''){
               changeError(true);
               return null;
          }
          changeError(false);
          changeBebida(busqueda);
          changeBusqueda({
               ingrediente: '',
               categoria: ''
          })
     }
     return (
          <div className="formulario py-4">
               <div className="container">
                    <form onSubmit={handleSubmit} >
                         <h2 className="text-center text-capitalize my-4">{title}</h2>
                         <div className="row">
                              <div className="col-md-4">
                                    <select value={ingrediente} name="ingrediente" id="" className="form-control form-control-lg" onChange={handleBusqueda}>
                                        <option value="" disabled>...Seleccionar Ingrediente</option>
                                        {ingredientes.map((ingrediente, i) => <option key={i} value={ingrediente.strIngredient1}>{ingrediente.strIngredient1}</option>)}
                                   </select>
                              </div>
                              <div className="col-md-4">
                                   <select value={categoria} name="categoria" id="" className="form-control form-control-lg" onChange={handleBusqueda}>
                                        <option value="" disabled>...Seleccionar Categoría</option>
                                        {categorias.map((categoria, i) => <option key={i} value={categoria.strCategory}>{categoria.strCategory}</option>)}
                                   </select>
                              </div>
                              <div className="col-md-4">
                                   <button type="submit" className="btn-primary btn-lg btn-block">Buscar Bebidas</button>
                              </div>
                         </div>
                    </form>
                    {error ? <div className="alert alert-danger my-3">Completa al menos un campo</div> : null}
               </div>
          </div>
     );
}
Formulario.propTypes = {
     title: PropTypes.string.isRequired
}
export default Formulario;