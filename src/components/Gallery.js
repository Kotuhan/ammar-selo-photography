import React, {Component} from 'react'
import ReactGallery from 'react-photo-gallery'

const getCategory = (pathname) => {
  return pathname.split('/')[2]
}

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = this.getInitState()
  }

  getInitState = () => {
    const { location: { pathname }} = this.props;

    return {
      category: getCategory(pathname),
      photos: []
    }
  }

  componentDidMount() {
    this.requestData()

    console.log(this.props.category)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const currentPath = this.props.location.pathname;
    const nextPath = nextProps.location.pathname;

    if (currentPath !== nextPath) {
      this.setState({ category: getCategory(nextPath)})
    }
  }

  requestData = () => {
    let dataURL = 'http://198.58.109.189/wp-json/wp/v2/media/?per_page=100'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })
  }

  render () {
    console.log('this.state', this.state);
    const { category, photos } = this.state;

    const filtered_images = photos.filter(photo => {;
      if (!photo.acf.category) {
        return false
      } else {
        return photo.acf.category.toLowerCase() === category.toLowerCase()
      }
    })

    console.log('filtered_images', filtered_images);

    const IMAGES = filtered_images.map((photo, index) => ({
          src: photo
                .media_details
                .sizes
                .medium
                .source_url,
          width: photo
                  .media_details
                  .sizes
                  .medium
                  .width,
          height: photo
                    .media_details
                    .sizes
                    .medium
                    .height
    }))

    const viewPortWidth = window.innerWidth;

    return (
      <div>
        <ReactGallery columns={viewPortWidth <= 400 ? 1 : 3} photos={IMAGES} />
      </div>
    )

  }
}

Gallery.defaultProps= {id: "yo"}

export default Gallery
