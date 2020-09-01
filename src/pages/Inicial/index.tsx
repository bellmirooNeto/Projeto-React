import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './styles.css';

function Inicial(){
 return (
   <div>  
  <div className="container center">
  <nav className="menu">
      

      <div className="menu__Left">
          <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link menu__link" href="#"><img src={Logo} alt= "SPI" /></a></li>
              <li className="menu__list-item"><a className="menu__link menu__link" href="teste">Início</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">Serviços</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">Sugestões</a></li>
              <li className="menu__list-item"><a className="menu__link" href="#">Contatos</a></li>
          </ul>
      </div> 
      
   </nav>     
     
</div>
      
    
       
</div>
     
)
}


export default Inicial;