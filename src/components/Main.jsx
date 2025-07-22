import { useEffect, useState } from "react"

export default function Main(){
    const [actressData, setActressData] = useState(null);
    const [actorsData, setActorsData] = useState(null);
    const [selectedList, setSelectedList] = useState('all');


    useEffect(()=>{
        fetch('https://lanciweb.github.io/demo/api/actresses/')
        .then(res => res.json())
        .then(data => {
            setActressData(data)
        })
    },[])
    useEffect(()=>{
        fetch('https://lanciweb.github.io/demo/api/actors/')
        .then(res => res.json())
        .then(data => {
            setActorsData(data)
        })
    },[])


    return(
        <>
            <div className="d-flex py-3">
                <div className="form-check form-check-inline ms-auto">
                    <input checked={selectedList === 'actress'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="actress" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Attrici</label>
                </div>
                <div className="form-check form-check-inline">
                    <input checked={selectedList === 'actors'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="actors" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Attori</label>
                </div>
                <div className="form-check form-check-inline">
                    <input checked={selectedList === 'all'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="all" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio3">Entrambi</label>
                </div>
            </div>
            <div className="row gy-4">
                {selectedList === 'actress' && actressData?.map((actress, index)=>{
                        return(
                            <div className="col-4 d-flex" key={index}>
                                <div className="card h-100">
                                    <img src={actress.image} className="card-img-top" alt={actress.name}/>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">{actress.name}</h3>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{actress.birth_year}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{actress.nationality}</p>
                                        <p className="card-text mb-2 d-flex d-flex"><span className="fw-semibold me-1">Biografia:</span>{actress.biography}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{actress.awards}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {selectedList === 'actors' && actorsData?.map((actor, index)=>{
                        return(
                            <div className="col-4 d-flex" key={index}>
                                <div className="card h-100">
                                    <img src={actor.image} className="card-img-top" alt={actor.name}/>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">{actor.name}</h3>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{actor.birth_year}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{actor.nationality}</p>
                                        <p className="card-text mb-2 d-flex d-flex"><span className="fw-semibold me-1">Biografia:</span>{actor.biography}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{actor.awards}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {selectedList === 'all' && (
                    <>
                   { actressData?.map((actress, index)=>{
                        return(
                            <div className="col-4 d-flex" key={index}>
                                <div className="card h-100">
                                    <img src={actress.image} className="card-img-top" alt={actress.name}/>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">{actress.name}</h3>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{actress.birth_year}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{actress.nationality}</p>
                                        <p className="card-text mb-2 d-flex d-flex"><span className="fw-semibold me-1">Biografia:</span>{actress.biography}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{actress.awards}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {actorsData?.map((actor, index)=>{
                        return(
                            <div className="col-4 d-flex" key={index}>
                                <div className="card h-100">
                                    <img src={actor.image} className="card-img-top" alt={actor.name}/>
                                    <div className="card-body">
                                        <h3 className="card-title mb-3">{actor.name}</h3>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{actor.birth_year}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{actor.nationality}</p>
                                        <p className="card-text mb-2 d-flex d-flex"><span className="fw-semibold me-1">Biografia:</span>{actor.biography}</p>
                                        <p className="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{actor.awards}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </>

                )}
            </div>
        </>
    )
}