import React from "react";

export default function Hero() {
  return (
    <section className="hero_container">
      <h1 className="display-5 fw-bold">Socrate</h1>
      <div className="col-lg-6 mx-auto">
        <p align="center" className="lead mb-4">
          Corsi per tutti gli alunni
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Visita
          </button>
        </div>
      </div>
    </section>
  );
}
