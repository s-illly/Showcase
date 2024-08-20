import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from 'react-router-dom';

import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/project/:id' element={<ProjectScreen />} />
      </Route>
    )
);