export default function PersonCard({ person }) {
  return (
    <div className="col-3 d-flex">
      <div className="card h-100 border-0 text-white bg-black">
        <img src={person.image} className="card-img" alt={person.name} />
        <div className="card-body px-1 d-flex flex-column bg-black">
          <h3 className="card-title mb-3">{person.name}</h3>
          <p className="card-text mb-2 text-light-emphasis fw-medium"><span className="fw-bold me-1 text-light">Anno di nascita:</span>{person.birth_year}</p>
          <p className="card-text mb-2 text-light-emphasis fw-medium"><span className="fw-bold me-1 text-light">Nazionalità:</span>{person.nationality}</p>
          <p className="card-text mb-2 text-light-emphasis fw-medium"><span className="fw-bold me-1 text-light">Biografia:</span>{person.biography}</p>
          <p className="card-text mt-auto text-light-emphasis fw-medium"><span className="fw-bold me-1 text-light">Awards:</span>{person.awards}</p>
        </div>
      </div>
    </div>
  )
}
