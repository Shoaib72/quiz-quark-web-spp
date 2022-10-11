import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,

      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => {
            return fetch('//openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
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
