import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './layout/RootLayout';
import FriendDetails from "./pages/FriendDetails";
import Home from "./pages/Home";
import { TimelineProvider } from "./context/TimelineContext";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
      path:'/',
      element:<Home/> ,
        },
        {
      path:'friend/:id',
      element:<FriendDetails/>,
    },
    
      ],
    },
    
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
  <RouterProvider router={router} />
    </TimelineProvider>
   
  </StrictMode>,
)
