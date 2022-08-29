import React, { FunctionComponent } from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

const Homepage: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  ) 
}
 
export default Homepage 