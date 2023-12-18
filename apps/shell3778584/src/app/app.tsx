import * as React from 'react';

import NxWelcome from "./nx-welcome";

import { Link, Route, Routes } from 'react-router-dom';





 const Remote15330346 = React.lazy(() => import('remote15330346/Module'));

 

 const Remote26824250 = React.lazy(() => import('remote26824250/Module'));

 

 const Remote34662089 = React.lazy(() => import('remote34662089/Module'));

 


export function App() {
  return (
    <React.Suspense fallback={null}>
     <ul>
       <li><Link to="/">Home</Link></li>
       
         <li><Link to="/remote15330346">Remote15330346</Link></li>
       
         <li><Link to="/remote26824250">Remote26824250</Link></li>
       
         <li><Link to="/remote34662089">Remote34662089</Link></li>
       
     </ul>
     <Routes>
       
       <Route path="/" element={<NxWelcome title="shell3778584"/>} />
       
       
         <Route path="/remote15330346" element={<Remote15330346/>} />
       
         <Route path="/remote26824250" element={<Remote26824250/>} />
       
         <Route path="/remote34662089" element={<Remote34662089/>} />
       
     </Routes>
    </React.Suspense>
  );
}

export default App;
