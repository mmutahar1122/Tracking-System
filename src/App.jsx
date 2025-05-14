import React from 'react';
import RouteComponent from './Routes/route';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
<RouteComponent/>
</BrowserRouter>
    </>
  )
}

export default App
