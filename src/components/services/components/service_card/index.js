import React from 'react'
import Heading from '../../../../widgets/typography/heading'
import SubTitle from '../../../../widgets/typography/subtitle'
import './service_card.css'

const ServiceCard = (props) => {
  return (
    <div className="service">
        <img src={props.logo} height="35px"/>
        <Heading>{ props.title }</Heading>
        <p>{ props.description}</p>
      </div>
  )
}

export default ServiceCard