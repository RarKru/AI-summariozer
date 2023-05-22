
import Demo from './components/Demo';
import Hero from './components/Hero';

import './App.css';

const App = () => {
  console.log("raku")
  return (
    <main>
        <div className="main">
            <div className='gradient' />
        </div>
        <div className='app'>
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App