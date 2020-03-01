import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Footer from './Components/Footer';

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
