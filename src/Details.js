import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      })
      // eslint-disable-next-line no-console
    }, console.error)
  }
  render() {
    if (this.state.loading) {
      return (
        <h1>loading...</h1>
      )
    }
    const { animal, breed, location, description, name, media } = this.state;
    return (

      <div className="row bg-light p-5 rounded">
        <div className="col-4">
          <h1>{name}</h1>
          <h2>{`${animal} – ${breed} – ${location}`}</h2>
          <p className="lead">{description}</p>
          <button className="btn btn-danger">Adopt {name}</button>
        </div>
        <div className="col-8">
          <Carousel media={media} />
        </div>
      </div>
    )
  }
}

export default Details;

