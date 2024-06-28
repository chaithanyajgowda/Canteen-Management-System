
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


function CarouselPage() {
  return (
    <Carousel interval={1000}
    style={{
      marginTop:200,
     borderRadius:0
    }}
    >
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://www.fusion6.com.au/wp-content/uploads/2022/09/popular-indian-dishes-cuisine.jpg"
          alt="First slide"
          // height={300}
          // width={1000}
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://rs-menus-api.roocdn.com/images/12148e4c-a3a8-435a-8a6a-dd4f7bef1da4/image.jpeg"
          alt="Second slide"
          // height={300}
          // width={1000}
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg"
          alt="Third slide"
          // height={300}
          // width={1000}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;