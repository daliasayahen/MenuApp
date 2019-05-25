import React from 'react'
import {NavLink} from 'react-router-dom';
 //import {Route} from 'react-router-dom';
//  import Additem from './Additem/Additem'
// import Menu from './Menu/Menu'
import './Nav.css'
const Nav=()=>{
return (
    <div className="Nav">

        <header>
        <nav>
 <ul>     <li className="nav"><NavLink to="/" exact
     activeClassName="my-active"
     activeStyle={{
     color:"choclate",
        textDecoration:"underline"
 }}> Home  </NavLink> </li>
                    

 <li className="nav"><NavLink  to={{
        pathname:'/new-item',
         hash:'#submit',
     search:'?param1=test'
     }}> Add New item</NavLink></li>
        </ul>
 </nav>

        </header>
        {/* <Route path="/"  component={Menu}/>   
            <Route path="/new-item"  component={Additem}/> 
            */}

</div>
)
}
export default Nav;