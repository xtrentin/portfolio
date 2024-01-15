import React, { useState } from'react';
import "../Summaries.css"
import clustermap from "../../../assets/summaries/01/clusterMap.html"
import { RotatingLines } from 'react-loader-spinner';




const Summary01 = () => {
    const [loading, setLoading] = useState(true)
    const hideSpinner = ()=> {
      setLoading(false)
      let clustermap = document.getElementById("clustermap")
      clustermap.hidden = false
    }
    return (
        <section id="summary">
          <div className="summary-div">
            <h1 className="title-summary-h1">
              <span className="main-summary"><strong>Les arbres de la ville de Paris</strong></span>
            </h1>
            <h1>Objectif</h1>
            <p>Analyser les informations données sur les arbres de la ville de Paris dans le but d'optimiser les tournées d'entretien.</p>
            {loading ? (<div className='spinner-text'><RotatingLines id="spinner" strokeColor="#ff6e40" width="30"/>Loading clustermap</div>) : null }
            <iframe hidden id="clustermap" title="clustermap" className="map" srcDoc={clustermap} onLoad={hideSpinner}/>
          </div>
        </section>
    )
}
export default Summary01;
