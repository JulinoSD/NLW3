import React from 'react'
import bckg from './assets/images/chld.svg'
import logo from './assets/logot/Logo.svg'
import './styles/global.css'
import './styles/pages/landing.css'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="local">

          <div className="logo">
            <img src={logo} alt="Logotipo" />
          </div>

        </div>
        <main>
          <img src={bckg} alt="crianças" />

          <div className="letter">

          </div>

          <h1>
            Leve felicidade para o mundo
          </h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>

          <div className="location">
            <strong>São Paulo</strong>
            <span>Campinas</span>
          </div>
          
        </main>
      </div>
    </div>
  );
}

export default App;
