import React from 'react'
import PropTypes from "prop-types"
import Secondaire from './Secondaire'


const Principal = () => {
    const handleName =(fullName) => {
          alert(`Bonne chance ${fullName}`)
     }
    return (
        <div>
            
            <Secondaire 
            fullName="JARRAY Fathia" 
            profession=" Ingénieur principal en hydraulique et aménagement rural " 
            bio="Je suis à la recherche active d'un emploi au cours duquel je pourrais mettre en valeur 
            les acquis tout au long mon cursus universitaire.
            En fait, je possède des riches compétences en Hydraulique urbaine (Alimentation en eau potable, Assainissement en eau usée et pluviale), 
            en Ressources en eaux (Gestion des ressources, Mobilisation des eaux superficielles et souterraines) 
            et en Hydraulique agricole (Aménagement et réhabilitation des périmètres irrigués, Drainage agricole). "
            Numero=" 51 237 737"
            handleName={handleName}
            >
            
            <div>
                 <img src="./profile.jpg"></img>
            </div>

            </Secondaire>
        </div>
    )
}



export default Principal
