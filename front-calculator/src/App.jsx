import { useState } from 'react'
import BasicCalculator from './components/Basic_calculator';
import Calculator from './components/Calculator';
import Home from './components/Home';

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
