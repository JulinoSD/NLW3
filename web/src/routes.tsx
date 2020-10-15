import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Orphanage } from './pages/orphanageMap'
import Landing from './pages/landing'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/App" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes