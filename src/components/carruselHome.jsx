import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../images/nike-campaign-1.webp'
import imagen2 from '../images/nike-campaign-2.jpg'
import imagen3 from '../images/nike-campaign-3.jpg'
import '../App.css'

export const CarruselHome = () =>{
    return(
        <Carousel className='carrusel-home'>
            <Carousel.Item>
                <img alt='' src={imagen1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' src={imagen2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' src={imagen3}/>
            </Carousel.Item>
      </Carousel>
    )
}