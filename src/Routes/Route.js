import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Form } from "../Components/Form/Form";
import DataTable from "../Components/DataTable/DataTable";
import IndividualData from "../Components/IndividualData/IndividualData";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
        //  {
        //     path: "/courses",
        //     element: <DataTable></DataTable>
        //  },
         {
            path: "/categoryName/:categoryName",
            element:<IndividualData></IndividualData>,
            loader: ({params})=>{
               return fetch(`http://localhost:5000/categoryName/${params.categoryName}`)
            }
         }
        ]
    }
])