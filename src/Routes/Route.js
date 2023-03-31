import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Form } from "../Components/Form/Form";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path: '/',
            element: <Form></Form>
          }
        ]
    }
])