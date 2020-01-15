import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

import NavBar from './Components/NavBar';

function App() {
  return (
    <container className="App">
      <NavBar />
      <Route 
					exact 
					path="/" 
					render={() => 
						<div className='home-outer-container'>
							<Home />
						</div>
					}
			/>
    </container>
  );
}

export default App;
