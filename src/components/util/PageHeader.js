import React from 'react'
import PropTypes from 'prop-types'

function PageHeader(props) {
    const {img} = props
    return(
        <div style={{ backgroundImage: `url(${img})`}} className='jumbotron header-image'>
        </div>
    )
}

PageHeader.PropTypes = {
    imgPath: PropTypes.string
}

export default PageHeader