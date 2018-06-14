import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-images';
import 'react-responsive-carousel/lib/styles/carousel.css';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, caption: 'forest' },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3, caption: "caption" }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event) {
    // if (event.target.tagName === "iframe") {
    //   return null
    // }
    this.setState({
      currentImage: event,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
    });
  }
  
  gotoPrevious() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }));
  }

  gotoNext() {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }));
  }

  getIframeThumbnail(event) {
    console.log(event)
   event.preventDefault()
  }

  render() {
    return (
      <div>
          <Carousel showIndicators={false} emulateTouch={true} showStatus={false} selectedItem={this.state.currentImage} onClickItem={this.openLightbox} >
            {photos.map((source, index) => (
                <div key={index} >
                 <img src = {source.src} alt={source.caption} /> 
                  {source.caption ? <p className="legend">{source.caption}</p> : null}
                </div>
              ))
            }
           </Carousel>
           <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              showCloseButton={true}
              backdropClosesModal={true}
            />
      </div>
    )
  }
}

export default App;



