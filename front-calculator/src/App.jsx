import { useState, Suspense } from 'react'
import BasicCalculator from './components/Basic_calculator';
import Home from './components/Home';
import Calculator from './components/Calculator';
import RickandMorty from './components/RickandMorty';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showPage = () => {
    switch (currentPage) {
      case 'basicCalculator':
        return <BasicCalculator back={gotoThePage} />;
      case 'calculator':
        return <Calculator back={gotoThePage} />;
      case 'home':
        return <Home goToThePage={gotoThePage} />;
      case 'api':
        return <RickandMorty goToThePage={gotoThePage} />;
      default:
        return <Home goToThePage={gotoThePage} />;
    }
  }
  const gotoThePage = (value) => {
    setCurrentPage(value);
  }

  return (
    <>
      <main>
        {showPage()}
      </main>
    </>
  )
}

export default App;
