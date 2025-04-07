import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import './App.scss'
import { PATH } from "./utils/contains.js"
import PublicRoute from "./Components/shared/routes/PublicRoute.jsx"

function App() {
  const routing = createBrowserRouter([
          ...PATH.publicPath.map((paths)=>({
              path : paths.path,
              element : <PublicRoute component = {paths.element}/>
          })),
          {
            path: "*",
            element: <Navigate to="/" />
          },    
  ])

  return (
    <div>
      <RouterProvider router={routing}/>
    </div>
  )

}

export default App
