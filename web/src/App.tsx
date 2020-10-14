import React from 'react'
import bckg from './assets/images/chld.svg'
import logo from './assets/logot/Logo.svg'
import './styles/global.css'
import './styles/pages/landing.css'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
            <img src={logo} alt="Logotipo" />
        <main>
          {/* <img src={bckg} alt="crianças" /> */}

          <h1>
            Leve felicidade para o mundo
          </h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>
        </main>

          <div className="location">
            <strong>São Paulo</strong>
            <span>Campinas</span>
          </div>
          <a href="http://" className="enter-app">
            p
          </a>
      </div>
    </div>
  );
}

export default App;
