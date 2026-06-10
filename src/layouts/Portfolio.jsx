import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <>
      <NavBar />
      <main className="min-h-[90vh] bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Portfolio
