import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CategoriesComponent from './CategoriesComponent';
import './MainComponent.css'
import ProductList from './ProductList';
    
export default class MainComponent extends Component {

    


    render() { 
        
        const ProductListId = ({match}) => {
            return(
              
              <ProductList id={match.params.categoryId}/>
            );
          }

        return (
            <div className="main">
                <CategoriesComponent />
                <Switch>
                    <Route path="/category/:categoryId" component={ProductListId} />
                </Switch>
                
            </div>
        )
    }
}
    