import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetails from './components/TopicDetails/TopicDetails';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: 'statistics',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'about',
          element: <About></About>
        },
      ]
    },
    {
      path: '*',
      element: <div className='font-bold bg-gray-200 text-gray-900 mx-12 my-40 p-12 shadow-lg'>
        <h1 className='text-4xl mb-4'>Not Found!!!</h1>
        <p className='text-2xl'>Please try again</p>
      </div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
