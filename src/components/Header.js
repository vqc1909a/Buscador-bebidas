import React from 'react';
const Header = ({title}) => {
     return (
          <header className="header py-5 bg-primary">
               <div className="container">
                    <div className="row">
                         <div className="col">
                              <h1 className="display-4 text-center text-white">{title}</h1>
                         </div>
                    </div>
               </div>
          </header>
     );
}
 
export default Header;