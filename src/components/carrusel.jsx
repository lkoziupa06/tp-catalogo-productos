import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../images/nike_campaign_1.png'
import imagen2 from '../images/nike_campaign_2.jpg'
import imagen3 from '../images/nike_campaign_3.jpg'
export const Carrusel = () =>{
    return(
        <Carousel>
            <Carousel.Item>
            <img alt='' src={imagen1}/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt='' src={imagen2}/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img alt='' src={imagen3}/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    )
}