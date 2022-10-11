import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quiz from './components/Quiz/Quiz';



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
          loader: () => {
            return fetch('//openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>,
        },
        {
          path: '/home/:uniqueId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.uniqueId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
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
