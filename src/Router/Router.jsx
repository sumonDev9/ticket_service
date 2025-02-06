import {
    createBrowserRouter,
     
  } from "react-router-dom";

  import "../../src/index.css";
import Pages from "../app/(dashboard)/Pages";
// import DashboardAnalytics from "../app/(dashboard)/DashboardAnalytics";
import Login from "../views/Login";
import Layout from "../app/(dashboard)/Layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
      // element:  <Pages></Pages>,
      // element:  <Layout></Layout>
    },
    {
      path: '/dashboard',
      element:  <Layout></Layout>,
      children: [
        {
          path: 'page',
          element: <Pages></Pages>,
        }
      ]
    }

 
   
   
  ]);


export default router;
  