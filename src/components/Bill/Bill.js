import React  from 'react'
import './Bill.css';

const Bill= (props)=>
{
    return(
        props.bill.map((x)=>{
            return (
    <table className="billStyle">
        <tbody>
            <tr> 
            <th>
            {x[0].itemDesc}
            </th>
            <th>
              {x[0].itemPrice}  
            </th>
               

            </tr>
        </tbody>
    </table>
            )
})
);
}


export default Bill;