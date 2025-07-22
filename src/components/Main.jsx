import { useEffect, useState } from "react"

export default function Main(){
    const [actressData, setActressData] = useState(null);
    const [actorsData, setActorsData] = useState(null);


    useEffect(()=>{
        fetch('https://lanciweb.github.io/demo/api/actresses/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setActressData(data)
        })
    },[])
    useEffect(()=>{
        fetch('https://lanciweb.github.io/demo/api/actors/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setActorsData(data)
        })
    },[])


    return(
        <>
            <div className="row gy-4">
                {actressData && (
                    actressData.map((actress, index)=>{
                        return(
                            <div className="col-4 d-flex" key={index}>
                                <div class="card h-100">
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
                    }))
                }
                {actorsData && (
                    actorsData.map((actor, index)=>{
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
                    }))
                }
            </div>
        </>
    )
}