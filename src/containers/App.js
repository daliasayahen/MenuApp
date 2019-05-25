import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from '../components/Menu/Menu';
import Bill from '../components/Bill/Bill';
import Additem from '../components/Additem/Additem';
import Nav from '../components/Nav/Nav'
import {BrowserRouter} from 'react-router-dom';
import Axios from 'axios';
class App extends Component {
  state = {
    items: [
    //   { id: "1", name: "shawarma", price: "10" },
    //   { id: "2", name: "burgar", price: "20" },
    //   { id: "3", name: "flafel", price: "30" }
    // 
  ],
    bill: [],
    totalPrice: 0
  }



 postMyData = () => {
    let Data = {}
    this.state.bill.map((item, index) => {
      return(
      Data = { 
        orderUserName: "dalia",
        orderItemId: item[0].itemId,
        orderPrice: item[0].itemPrice

      })
      
    });
    
     Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post', Data)
      .then(response => {
         console.log(response)
      })
  }

  componentDidMount() {

    Axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')

      .then(response => {
        const list = response.data
        const updateList = list.map((item) => {

          return { ...item }
        });
        this.setState({ items: updateList })

      })
  }

  
  checkhandle = (id) => {
   // console.log("hii")
    const arr = [...this.state.items];
    //console.log(arr);
    const item = arr.splice(id, 1);
    this.state.bill.push(item);
    this.setState({ items: arr });
  }


  sum = () => {
    let sumation = []
    this.state.bill.map((p) => {
      return (
        sumation.push(p[0].itemPrice)

      )
    }
    )
    let x = 0;
    for (let i = 0; i < sumation.length; i++) {
      x = x + sumation[i];
      //  console.log(x);

    }
    this.setState({ totalPrice: x })

  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">

<Nav />

<Additem/>
<div className="Menu1">
   <h2 className="head" >Menu</h2>
<br/>
  <Menu 
     menu={this.state.items}

     checkhandle={this.checkhandle} />
</div>
     <h2 className="head">Bill</h2>
     <Bill 
     bill={this.state.bill} />

 <button className="sum" onClick={this.sum}>sumation</button>

 <input className="sumresult" type="text" value={this.state.totalPrice} ></input>
 <button className="sum" onClick={this.postMyData}>sendData</button>
 </div>  
 </BrowserRouter>
    );
  }
}

export default App;
