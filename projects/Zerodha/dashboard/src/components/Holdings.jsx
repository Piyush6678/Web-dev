import React,{useState,useEffect} from 'react'
// import { holdings } from "../data/data"
import axios,{all} from "axios"
import { VerticalGraph } from './VerticalGraph';

function Holdings() {

const [allHoldings,setAllholdings]=useState([]);
useEffect(()=>{
axios.get("http://localhost:3002/allHoldings").then((res)=>{
    // console.log (res.data)
    setAllholdings(res.data)
})
},[])

const labels = allHoldings.map((subArray) => subArray["name"]);

const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

    return ( <>
    
    
    <h3 className="title">Holdings ({allHoldings.length})  </h3>
    <div className="order-table">
        <table>
            <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTp</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
            </tr>

            {allHoldings.map((stock,index)=>{
                const curValue=stock.price *stock.qty
                 const isProfit=curValue-(stock.avg*stock.qty)  >=0.0 
                 const profClass=isProfit?"profit":"loss";
                 const dayClass =stock.isLoss?"loss":"profit"
                 return (

                 <tr key={index}  >
                <td>{stock.name}  </td>
                <td> {stock.qty} </td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td  className={profClass} >{(curValue-(stock.avg*stock.qty)).toFixed(2) }</td>
                <td  className={profClass} > {stock.net} </td>
                <td className={dayClass}  > {stock.day} </td>
             </tr>

                 );

})}
      </table>
    </div>
    
<div className="row">
    <div className="col">
        <h5>
            29,875. <span>55</span>{""}
        </h5>
        <p>Total Investments</p>
    </div>
    <div className="col">
        <h5>
            31,428. <span>95</span>{""}
        </h5>
        <p>Current value</p></div>

    <div className="col">
        <h5>
            153.40 (+5.20% )
        </h5>
        <p>P&L</p>
</div>
</div>
<VerticalGraph data={data}/>

    </> );
}

export default Holdings;