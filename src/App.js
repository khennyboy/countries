import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import DarkModeProvider from './component/darkModeProvider';
import Header from './component/header';
import Homepage from './pages/homepage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountryDetail from './component/contryDetail';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600,
    },
  },
});


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Header />} >
        <Route index element={<Navigate replace to="all-countries" />} />
        <Route path='/all-countries' element={<Homepage />} />
        <Route path='/country/:countryName' element={<CountryDetail />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>

  );
}

export default App;
