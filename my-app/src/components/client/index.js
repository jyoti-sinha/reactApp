import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {
    Route,
    Switch
  } from 'react-router-dom'

const home = () => <h2>Home</h2>
const books = () => <h2>Books</h2>
const sales = () => <h2>Sales</h2>
const notFound = () => <h2>404, page not found :(</h2>


function index() {
        return (
            <div>
                <Header />                
                <Switch>          
                    <Route path="/home" component={home} exact />
                    <Route path="/home/books" component={books} />
                    <Route path="/home/sales" component={sales} />        
                    <Route component={notFound} />
                </Switch> 
                <Footer />
          </div>
        );
}

export default index;
