import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CategoriesComponent from './CategoriesComponent';
import './MainComponent.css'
import ProductList from './ProductList';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from "react-router-dom";
    
export default class MainComponent extends Component {

    


    render() { 

        const history = createMemoryHistory();
        
        const ProductListId = ({match}) => {
            return(
              
              <ProductList id={match.params.categoryId}/>
            );
          }

        return (
            <div className="main">
                <CategoriesComponent />
                <Switch history={history}>
                    <Route path="/category/:categoryId" component={ProductListId} />
                </Switch>

               {/* <Router>
              <div>
                <CategoriesComponent />
                <Route path="/category/:categoryId" component={ProductListId} />
                </div>
            </Router> */}
                
             </div>
        )
    }
}
    