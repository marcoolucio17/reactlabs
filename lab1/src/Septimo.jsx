import React from 'react'
import PropTypes from "prop-types"

export const Septimo = ( {title, subtitle} ) => {


    Septimo.PropTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }

  return (
    // <> and </> are short syntax for React Fragment
    <>
        <h1>
            {title}
        </h1>
        <h2>
            {subtitle}
        </h2>
    </>
  )
}
