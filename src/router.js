import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import UserLogin from './layouts/UserLogin/UserLogin'
import Home from './pages/home/home'

export default class RouterWrap extends Component {
    render() {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout} exact/>
                        <Route path="/login" component={UserLogin}/>
                        <Route path="/home" component={Home} exact/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
