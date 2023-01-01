import React from "react"
import PropTypes from "prop-types"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height:props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.propsType ={
    cardColor: PropTypes.string.isRequired,
    height: PropTypes.number
}

Card.defaultProps ={
    cardColor: PropTypes.oneOf(["red","blue"]).isRequired,
    height: 150,
    width: 150
}

export default Card