import './My.css'
import React from 'react'
import { useEffect, useState } from 'react'
const Statewise = () => {
const [data,setData] = useState([]);


    const getCovidData = async()=>{
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise)
        setData(actualData.statewise)

    }
    
    useEffect(() => {
        getCovidData();

        }
    , [])
    return (
        <>
           
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA </span>COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                            data.map((curElm, ind) => {
                                return(
                                    <tr key={ind}>
                                        <td>{curElm.state}</td>
                                         <td>{curElm.confirmed}</td>
                                        <td>{curElm.recovered}</td>
                                         <td>{curElm.deaths}</td>
                                        <td>{curElm.active}</td>
                                        <td>{curElm.lastupdatedtime}</td>
                                     </tr>
                                )
                            })
                        }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise