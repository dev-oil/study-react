import React from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>,
    errorElement: (
      <>
        <p>Not Found 🥹</p>
      </>
    ),
  },
  {
    path: '/videos',
    element: <p>Videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
