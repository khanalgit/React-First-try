import React from 'react';
import Heading from '../../widgets/typography/heading';
import SubTitle from '../../widgets/typography/subtitle';
import Title from '../../widgets/typography/title';
import ServiceCard from './components/service_card';
import './services.css'
import icon1 from './img/icon1.jpg';
import icon2 from './img/icon2.jpg';
import icon3 from './img/icon3.jpg';

const Services = (props) => {
  return <div className="services_container">
    <Title color="#222">Statement of faith</Title>
    <br /><br />
    <div className="services">
      <ServiceCard
        title="Who are you"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo={icon1}
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo={icon2}
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo={icon3}
      />
    </div>
  </div>
}

export default Services;