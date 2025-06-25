import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import './App.scss'
import { PATH } from "./utils/contains.js"
import PublicRoute from "./Components/shared/routes/PublicRoute.jsx"
import PrivateRoutes from "./Components/shared/routes/PrivateRoutes.jsx"
import HomeLayout from "./Components/Layout/HomeLayout.jsx"
import React from "react"
import { Toaster } from "react-hot-toast"


function App() {
  const routing = createBrowserRouter([
        ...PATH.publicPath?.map((paths)=>({
              path : paths.path,
              element : <React.Suspense fallback={"...Loading"}><PublicRoute component = {paths.element}/></React.Suspense>
          })),
          {
            path: "/",
            element : <PrivateRoutes component={HomeLayout}/>,
            children: [
              ...PATH.privatePaths.map((paths) => ({
                path : paths.path,
                element : <React.Suspense fallback={"...Loading"}><PrivateRoutes component = {paths.element}/></React.Suspense>
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
    <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    // style: {
    //   background: 'white',
    //   color: '#fff',
    // },

    // Default options for specific types
    // success: {
    //   duration: 3000,
    //   iconTheme: {
    //     primary: 'green',
    //     secondary: 'black',
    //   },
    // },
  }}
/>
      <RouterProvider router={routing}/>
    </>
  )

}

export default App
