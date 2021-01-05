import React from 'react';
import icon2 from '../image/icon2.png'
import icon3 from '../image/icon3.png'
import icon4 from '../image/icon4.png'
import icon1 from '../image/icon1.png'
import services from '../image/services.jpg'
import {ServicesImage,
        ServicesContainer,
        ServicesH1,
        ServicesMainIcon,
        ServicesWrapper,
        ServicesCard, 
        ServicesH2,
        ServicesIcon,
        ServicesP} from './ServicesElement';

const Services = () => {
    return (
        <div id='services'>
        <ServicesImage src={services} alt='services' />
        <ServicesContainer id='services'>
        <ServicesH1>
            Our services<ServicesMainIcon src={icon1} alt='#'/>
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon2} />
                    <ServicesH2>Birthday Party</ServicesH2>
                    <ServicesP>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon3} />
                    <ServicesH2>Bussiness Meeting</ServicesH2>
                    <ServicesP>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={icon4} />
                    <ServicesH2>Wedding party</ServicesH2>
                    <ServicesP>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </div>)
}

export default Services;