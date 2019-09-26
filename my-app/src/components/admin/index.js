import React from 'react';
import {
    Route,
    Switch
  } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const dashboard = () => <h2>Dashboard</h2>
const products = () => <h2>Products</h2>
const banners = () => <h2>Banners</h2>
const notFound = () => <h2>404, page not found :(</h2>


const index = () => {
    return (
        <div>
            <Header />
            <Switch>          
                <Route path="/admin" component={dashboard} exact />
                <Route path="/admin/products" component={products} />
                <Route path="/admin/banners" component={banners} />                
                <Route component={notFound} />
            </Switch>
            <Footer />
      </div>
    );
}

export default index; 
