import React from 'react'
import PropTypes from "prop-types"

const Secondaire = ({fullName, profession, bio, children, Numero, handleName}) => {
    return (
        <div>
            <h1 style={{color:"maroon", fontSize:"100px", fontFamily:"fantasy"}}> Bonjour tout le monde!</h1>

            <p style={{textAlign:"center", fontFamily:"cursive", fontSize:"50px"}}>
                Je suis <p style={{fontSize:"70px"}}> <b> {fullName }  </b>  </p>
            </p>

            <p style={{fontSize:"40px", fontFamily:"cursive", color:"maroon"}}>
            {profession} 
            </p>

            <p style={{fontSize:"20px", fontStyle:"italic", textAlign:"center" }}>
            {bio} 
            </p>

            <h2 style={{textAlign:"center", fontFamily:"cursive", fontSize:"30px"}}>Ci-joint ma photo: </h2>
             {children}

            <h4 style={{fontStyle:"oblique"}}>Contact:{Numero} </h4>
            
            <button onClick={() => handleName(fullName)}> Envoie </button>

        </div>
    )
}
//default props
Secondaire.defaultProps={
    fullName: "Profile de JARRAY Fathia"
}

//proptypes
Secondaire.propTypes={
 fullName: PropTypes.string.isRequired,
 profession: PropTypes.string.isRequired,
 bio: PropTypes.string.isRequired,
 Numero: PropTypes.number.isRequired
}

export default Secondaire
