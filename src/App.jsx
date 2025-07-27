import { useState } from 'react'
import ResumeForm from './components/form'



function App() {
  return(
   <div className="container md:flex ">
    <div className="flex-1">
        <ResumeForm />
    </div>

    <div className = "flex-1 bg-green-500 ">

    </div>
   </div>
  )
}

export default App
