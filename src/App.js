import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import LoadingScreen from './Components/LoadingScreen.js';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    };

    handleRouteChange();
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      <TransitionGroup>
        <CSSTransition key={location.key} className="fade" timeout={2000}>
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
