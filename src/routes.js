import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Add from './pages/Add'
import Edit from './pages/Edit'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={Login} path='/login' exact/>
            <Route component={Admin} path='/admin' exact/>
            <Route component={Add} path='/add' exact/>
            <Route component={Edit} path='/edit' exact/>
        </BrowserRouter>
    )
}

export default Routes;