import React, { Component } from 'react'
import Route from 'react-router-dom/Route'
import Router from 'react-router-dom/Router'
import Switch from 'react-router-dom/Switch'
import { createBrowserHistory } from 'history'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Detail from '../components/product/Detail'
import makeAsyncComponent from '../generate_components/makeAsyncComponent'

export const history = createBrowserHistory();

const Loader = () => {
    return (
        <h1>Load ....</h1>
    )
}

const Home = makeAsyncComponent(async () => {
    let c = await import('../pages/Home')
    return c.default
}, Loader)

const Shop = makeAsyncComponent(async () => {
    let c = await import('../pages/Shop')
    return c.default
}, Loader)


export default class extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel className="mt-2" />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/shop" component={Shop}></Route>
                        <Route exact path="/detail" component={Detail}></Route>
                    </Switch>
                </Router>
                <Footer className="mt-5" />
            </div>

        )
    }
}
