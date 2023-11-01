// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';
import CustomNav from './components/CustomNav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <CustomNav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
