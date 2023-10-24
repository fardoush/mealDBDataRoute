import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Restaurents from './components/restaurents/Restaurents';
import Error from './components/error/Error';
import MealDataDetails from './components/mealDataDetails/MealDataDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [

      {
        path:'/about',
        element: <About/> 
      },
      {
        path:'/restaurents',
        element: <Restaurents/> ,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      },
      {
        path:'/mealData/:mealDataId',
        element: <MealDataDetails></MealDataDetails> ,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.mealDataId}`)
      
      },
      
      {
        path: '*',
        element:<Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
