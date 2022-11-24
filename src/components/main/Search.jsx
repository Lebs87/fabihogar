import React from 'react'

const Search = ({ greeting }) => {
  return (
    <>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <form className="container d-flex flex-column div_empty" role="search">
        <input className="form-control me-2" type="search" placeholder="Ingresa el N°" aria-label="Search" />
        <button className="btn btn-outline-success m-2" type="submit">Buscar</button>
      </form>
    </>
  )
}

export default Search