import main from './images/main.jpg';

import friend1 from './images/friend1.jpg'
import friend2 from './images/friend2.jpg'
import friend3 from './images/friend3.jpg'
import friend4 from './images/friend4.jpg'
import friend5 from './images/friend5.jpg'
import friend6 from './images/friend6.jpg'
import friend7 from './images/friend7.jpg'
import friend8 from './images/friend8.jpg'
import friend9 from './images/friend9.jpg'
import './App.css';

function App() {
  return (
    <body>
      <header className="">
        <nav className='fixed-top ml-4 mt-2'>
          <ul className='nav'>
            <li className='nav-item btn btn-danger mx-1'>Home</li>
            <li className='nav-item btn btn-danger mx-1'>About me</li>
            <li className='nav-item btn btn-danger mx-1'>Star wars</li>
            <li className='nav-item btn btn-danger mx-1'>Contact</li>
          </ul>
        </nav>
        <h1 className='text-center py-3'>Luke Skywalker</h1>
              </header>
      <main className="clearfix">
        <section className='float-left w-25 mr-2'>
          <img className='hero col' src={main} alt="Luke Skywalker"/>
        </section>
          <section className='float-right w-50 row no-gutters border right'>
              <h2 className='col-12 text-center'>Dream Team</h2>
              <img className='col-4 p-1' src={friend1} alt="friend"/>
              <img className='col-4 p-1' src={friend2} alt="friend"/>
              <img className='col-4 p-1' src={friend3} alt="friend"/>
              <img className='col-4 p-1' src={friend4} alt="friend"/>
              <img className='col-4 p-1' src={friend5} alt="friend"/>
              <img className='col-4 p-1' src={friend6} alt="friend"/>
              <img className='col-4 p-1 bottomLeft' src={friend7} alt="friend"/>
              <img className='col-4 p-1' src={friend8} alt="friend"/>
              <img className='col-4 p-1 bottomRight' src={friend9} alt="friend"/>
          </section>
          <p className='farGalaxy'>It is a period of civil war.
              Rebel spaceships, striking
              from a hidden base, have won
              their first victory against
              the evil Galactic Empire.

              During the battle, Rebel
              spies managed to steal secret
              plans to the Empire's
              ultimate weapon, the DEATH
              STAR, an armored space
              station with enough power
              to destroy an entire planet.

              Pursued by the Empire's
              sinister agents, Princess
              Leia races home aboard her
              starship, custodian of the
              stolen plans that can save her
              people and restore
              freedom to the galaxy....</p>
      </main>
        <footer className='row align-items-center'>
            <div className="btn-danger btn col-2 offset-2 text-center">
                Send me <span className='email text-uppercase small'>email</span>
            </div>
        </footer>

    </body>
  );
}

export default App;
