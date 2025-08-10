import React from 'react';
import RouteComponent from './Routes/route';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from './components/LoadingBar/loadingbar';
function App() {

  return (
    <>
    <BrowserRouter>
    {/* <LoadingBar/> */}
<RouteComponent/>
</BrowserRouter>
    </>
  )
}

export default App
