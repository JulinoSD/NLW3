import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import marker from '../assets/logot/Locallogo.svg'
import '../styles/pages/orphanage-pages.css'
import 'leaflet/dist/leaflet.css'
// import { TileLayer } from 'leaflet'

export const Orphanage = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={marker} alt="map Marker" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão
                    esperando a sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>Campinas</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map 
            center={[-22.777735, -47.0926477]}
            zoom={17}
            style={{width: '100%', height: '100%'}}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}