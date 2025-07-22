export default function PersonCard({ person }) {
  return (
    <div className="col-4 d-flex">
      <div className="card h-100">
        <img src={person.image} className="card-img-top" alt={person.name} />
        <div className="card-body">
          <h3 className="card-title mb-3">{person.name}</h3>
          <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{person.birth_year}</p>
          <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{person.nationality}</p>
          <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Biografia:</span>{person.biography}</p>
          <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{person.awards}</p>
        </div>
      </div>
    </div>
  )
}
