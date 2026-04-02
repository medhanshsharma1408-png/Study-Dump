// Contains the main application file, all the components are used in this file. Basically the parent of all the components.

import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  return (
    <>  
      <Navbar />
      <Card user="Medhansh" img="https://imgs.search.brave.com/FNb12VzVsEEt5i_gz_du9d0p4F7xQf0h4SXX6M9L45A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Rp/b25iZ3MuY29tL2kv/Yy8zNjR4MjA1L21l/ZGlhLzM2NC9ibGFj/ay1iYWNrZ3JvdW5k/LXdpdGgtZ29rdS1k/cmFnb24tYmFsbC16/LmpwZw"/>
      <Card user="Shivam" img="https://imgs.search.brave.com/y913HPSPS1HVf9NocilxSvBXc67lHVBVVK_PYGPaFjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Rp/b25iZ3MuY29tL2kv/Yy8zNjR4MjA1L21l/ZGlhLzEzOTcvZ29r/dS11bHRyYS1pbnN0/aW5jdF8yLmpwZw"/>
    </>
  )
}

export default App