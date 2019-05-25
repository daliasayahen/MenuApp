 import React  from 'react'
 import './Menu.css'
 const Menu= (props)=>
 {
     return (   
        props.menu.map((i,index)=>{
           return (
<div className="flex-contanier">
<button   className="itemchoose"onClick={() =>props.checkhandle(index)}>
  <br></br>

  <div className="desc">{ i.itemDesc}   </div>

  <div className="Price ">{i.itemPrice} </div>
    </button>
   </div>
   

  )}  
  )
        
  )
     
        
      }

export default Menu;





