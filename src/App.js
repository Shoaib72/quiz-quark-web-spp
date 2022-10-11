import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Main></Main>
        },
        {

        }
      ]
    }
  ])
  return (<div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
