import './App.css';
import { useState, useEffect } from 'react';
import Container from './components/Container/container';
import Tables from './components/Table/table';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);
  return (
   <div>
        <Container/>
        <Tables/>
   </div>
  );
}

export default App;
