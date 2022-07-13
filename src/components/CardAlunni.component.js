import React from "react";
import "bootstrap/dist/js/bootstrap";

export default function CardAlunni(props) {
  const cardAlunno = props.userList.listUserDto.map((elem) => {
    const {
      id,
      name,
      email,
      country,
      dateOfBirth,
      numDocumento,
      age,
      descrizione,
      url_image,
    } = elem;

    return (
      <div className="card align-items-center w-50" key={id}>
        <div className="card-body">
          <figure className="card-img-container">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/200"
              alt=""
            />
          </figure>
          <h5 className="card-title">{name}</h5>
          <p>{descrizione}</p>
          <p>{email}</p>
          <p>{country}</p>
          <p>{age}</p>
          <p>{dateOfBirth}</p>
          <p className="card-text card-text--custom">{numDocumento}</p>
          <a href="#" className="btn btn-primary w-100">
            Informazioni su {name}
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="mt-5">I nostri alunni</h1>
      <div className="container_card d-flex flex-wrap">{cardAlunno}</div>
    </div>
  );
}
