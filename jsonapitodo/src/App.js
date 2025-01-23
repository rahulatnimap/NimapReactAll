import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import DisplayTodo from './components/DisplayTodo';


const route = createBrowserRouter([
  {
    path : '/',
    element: <DisplayTodo/>
  }
])

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
