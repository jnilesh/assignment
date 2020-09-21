import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import { createMemoryHistory } from 'history';
import CategoriesComponent from './components/CategoriesComponent';

function App() {

  const history = createMemoryHistory();
        
  const ProductListId = ({match}) => {
      return(
        <ProductList id={match.params.categoryId}/>
      );
    }


  return (
    <div className="App">
      <CategoriesComponent />
        <Switch history={history}>
            <Route path="/category/:categoryId" component={ProductListId} />
        </Switch>
    </div>
  );
}

export default App;
