import React from 'react'
import { Route, BrowserRouter, Routes as Router } from "react-router-dom"

import LandingPage from './LandingPage'
import FindCollectPoint from './FindCollectPoint'
import PickResidues from './PickResidues'
import ListPoints from './ListPoints'

function Routes() {
    return(
         <BrowserRouter>
            <Router>
                  <Route element={<LandingPage />}  path="/" exact />
                  <Route element={<FindCollectPoint />}  path="coleta/ache-um-ponto-de-coleta" exact />
                  <Route element={<PickResidues />}  path="/coleta/escolha-os-residuos" exact />
                  <Route element={<ListPoints />}  path="/coleta/listagem-pontos" exact />
            </Router>
         </BrowserRouter>
    )
 }

export default Routes