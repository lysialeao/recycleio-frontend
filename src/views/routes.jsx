import React from 'react'
import { Route, BrowserRouter, Routes as Router } from "react-router-dom"

import LandingPage from './LandingPage'

function Routes() {
    return(
         <BrowserRouter> 
            <Router>
                  <Route element={<LandingPage />}  path="/" exact />
            </Router>
         </BrowserRouter>
    )
 }
 
 export default Routes