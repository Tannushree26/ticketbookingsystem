import React from "react";
import {Carousel} from "react-bootstrap";
const Home= ()=>{
    return(
        <div >
        <Carousel  fade={true} pause={false}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.gannett-cdn.com/presto/2020/01/30/PWES/27fc463f-d2d3-43e1-924b-1676fdfb523f-fb013020amtrak01.jpg?crop=2900,1632,x0,y108&width=2900&height=1632&format=pjpg&auto=webp"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="http://upload.wikimedia.org/wikipedia/commons/d/d4/An_A_train_in_Broad_Channel.JPG"
      alt="Second slide"
    />
    
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://wallup.net/wp-content/uploads/2017/11/17/275011-Japan-train-railway.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Home ;