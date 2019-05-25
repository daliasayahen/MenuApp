import React,{Component} from 'react'
import Axios from 'axios'
import './Additem.css'
class Additem extends Component{
  state = {
    itemDesc: '',
    itemPrice: '',
    itemImage: '',
    
    submittedData:false
}

onChangeimage=(event)=>
{

 this.setState({itemImage: event.target.value})
}

onChangePrice=(event)=>
{

 this.setState({itemPrice: event.target.value})
}
onChangeDesc=(event)=>
{

 this.setState({itemDesc: event.target.value})
}
postMyNewData=()=>{
   

  let  Data={
    "itemDesc":this.state.itemDesc,
    "ItemPrice":this.state.itemPrice,
    "itemImage":this.state.itemImage
  }
    
    Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',Data)
    .then(response=>{
     console.log(response) 
     console.log("hello") 
     })
    .catch(error=>{
        console.log(error)
        
    });    
  }
render ()
{
return (
<div  className="form">
<form  name="myForm"  >
<h3 className="head">Add new item to the menu</h3>

<div className="font">Item Name: <input  className="input" type="text" name="name"   placeholder="Enter item name" value={this.state.ItemDesc}
onChange={this.onChangeDesc}
/> </div>

<div className="font">Item price: <input className="input" type="number" name="price" placeholder="Enter item price" value={this.state.Price}
onChange={this.onChangePrice}
/>
</div>

<div className="font">"url" image:<input className="input"  type="text" name="photo" placeholder="Enter url address for image"  value={this.state.ItemImage}
 onChange={this.onChangeimage}/></div>
 
  <button className="submite"  onClick={this.postMyNewData}>Add Item</button>

</form>
</div>
)
}
}
export default Additem ;