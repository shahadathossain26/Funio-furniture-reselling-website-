
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { router } from './Routes/Route';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
