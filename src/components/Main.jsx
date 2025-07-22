import { useEffect, useState } from "react"

export default function Main(){
    const [actressData, setActressData] = useState(null);


    useEffect(()=>{
        fetch('https://lanciweb.github.io/demo/api/actresses/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setActressData(data)
        })
    },[])


    return(
        <>
            <div className="row gy-4">
                {actressData && (
                    actressData.map((actress, index)=>{
                        return(
                            <>
                                <div className="col-4 d-flex" key={index}>
                                    <div class="card h-100">
                                        <img src={actress.image} class="card-img-top" alt={actress.name}/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-3">{actress.name}</h5>
                                            <p class="card-text mb-2 d-flex"><span className="fw-semibold me-1">Anno di nascita:</span>{actress.birth_year}</p>
                                            <p class="card-text mb-2 d-flex"><span className="fw-semibold me-1">Nazionalità:</span>{actress.nationality}</p>
                                            <p class="card-text mb-2 d-flex d-flex"><span className="fw-semibold me-1">Biografia:</span>{actress.biography}</p>
                                            <p class="card-text mb-2 d-flex"><span className="fw-semibold me-1">Awards:</span>{actress.awards}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }))}
            </div>
        </>
    )
}