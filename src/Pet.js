import React from "react";
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = 'http://placecorgi.com/600/600';
  if (media.length) {
    hero = media[0].full;
  }
  return (
    <div className="card d-flex mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={hero} className="card-img" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body text-dark">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{`${animal} — ${breed} — ${location}`}</p>
            <a href={`/details/${id}`} className="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
