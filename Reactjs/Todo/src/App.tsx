import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import PropertyHeader from './components/PropertyHeader'
import PropertyTree from './components/PropertyTree'
import propertyConfig from './sample.papi copy.json'
function App() {

  return (
    <>
      <div className='text-3xl font-bold'>
        {/* <Todo/> */}
        <PropertyHeader property={propertyConfig}/>
        <PropertyTree data={propertyConfig}/>
        </div>

      
    </>
  )
}

export default App