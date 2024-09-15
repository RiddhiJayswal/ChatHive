import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing_App from '../POC/Routing_App';


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routing_App/>
  </BrowserRouter>
);
