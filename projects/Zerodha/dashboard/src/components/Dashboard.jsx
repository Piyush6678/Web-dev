import React from 'react'
import {Routes,Route} from "react-router-dom"

import WatchList from './WatchList.jsx'
import Apps from "./Apps.jsx"
import Orders from "./Orders.jsx"
import { GeneralContextProvider } from "./GeneralContext";

import Holdings from './Holdings.jsx'
import Positions from './Positions.jsx'
import Funds from './Funds.jsx'
import Summary from './Summary.jsx'
function Dashboard() {
    return (<>
    <div className="dashboard-container">
        <GeneralContextProvider>
        <WatchList/>
        </GeneralContextProvider>
        <div className="content">
            <Routes>
                <Route   path='/'  element={< Summary />} />
                <Route   path='/orders'  element={< Orders />} />
                <Route   path='/holdings'  element={< Holdings />} />
                <Route   path='/positions'  element={< Positions />} />
                <Route   path='/funds'  element={< Funds />} />
                <Route   path='/apps'  element={< Apps />} />
            </Routes>
        </div>
    </div>
    </>  );
}

export default Dashboard;