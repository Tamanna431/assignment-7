import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './layout/RootLayout';
import FriendDetails from "./pages/FriendDetails";
import Home from "./pages/Home";
import Timeline from './pages/Timeline';
import { TimelineProvider } from "./context/TimelineContext";
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      errorElement: <NotFound />,  
      children:[
        {
      path:'/',
      element:<Home/> ,
        },
        {
      path:'friend/:id',
      element:<FriendDetails/>,
    },
     { 
      path: '/timeline',
     element: <Timeline /> 
    },
    { 
      path: '/stats',
     element: <Stats/> 
    },
    { 
      path: '/notfound',
     element: <NotFound/> 
    },
      ],
    },
      {
    path: '*',
    element: <NotFound />
  }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
  <RouterProvider router={router} />
    </TimelineProvider>
   
  </StrictMode>,
)
