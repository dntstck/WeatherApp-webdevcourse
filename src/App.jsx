// React Weather App
// Dru Delarosa | @dntstck

import './App.css'
import Weather from './Weather'
import Logo from './Logo';

function App() {
  const card = [
    { title: 'Discover Weather'}  // sets the Card title
  ];
  return (
    <>
      <Logo />
      <Weather title={card[0].title} /> 
    </>
  )
}

export default App
