import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import './App.scss'
import { PATH } from "./utils/contains.js"
import PublicRoute from "./Components/shared/routes/PublicRoute.jsx"
import PrivateRoutes from "./Components/shared/routes/PrivateRoutes.jsx"
import HomeLayout from "./Components/Layout/HomeLayout.jsx"


function App() {
  const routing = createBrowserRouter([
          ...PATH.publicPath.map((paths)=>({
              path : paths.path,
              element : <PublicRoute component = {paths.element}/>
          })),
          {
            path: "/",
            element : <PrivateRoutes component={HomeLayout}/>,
            children: [
              ...PATH.privatePaths.map((paths) => ({
                path : paths.path,
                element : <PrivateRoutes component = {paths.element} /> 
              })),
            ]
          },
          {
            path: "*",
            element: <Navigate to="/NotFound" />
          },    
  ])

  return (
    <>
      <RouterProvider router={routing}/>
    </>
  )

}

export default App
