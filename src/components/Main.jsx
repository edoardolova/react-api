import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

export default function Main(){
    const [actressData, setActressData] = useState(null);
    const [actorsData, setActorsData] = useState(null);
    const [selectedList, setSelectedList] = useState('actress');
    const [nameFilter, setNameFilter] = useState('');

    const [randomActors, setRandomActors] = useState([]);
    const [randomActresses, setRandomActresses] = useState([]);

    const filteredActressData = actressData?.filter((actress) =>
        actress.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    const filteredActorsData = actorsData?.filter((actor) =>
        actor.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        if (actressData && actorsData) {
            setRandomActresses(shuffleArray([...actressData]).slice(0, 5)); 
            setRandomActors(shuffleArray([...actorsData]).slice(0, 5)); 
        }
    }, [actressData, actorsData]);

    const randomPeople = [...randomActors, ...randomActresses];





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


    let resultsCount = 0;
    if (selectedList === 'actress' && filteredActressData) {
        resultsCount = filteredActressData.length;
    } 
    else if (selectedList === 'actors' && filteredActorsData) {
        resultsCount = filteredActorsData.length;
    } 
    else if (selectedList === 'all') {
        resultsCount = (filteredActressData?.length || 0) + (filteredActorsData?.length || 0);
    }


    return(
        <>
            <div className="position-fixed filter-div " style={{ width: '300px', zIndex: 10 }}>
                <h3 className="mb-3">Filtri</h3>
                <div className="input-group">
                    <input type="text" aria-label="First name" placeholder="cerca" onChange={ e =>setNameFilter(e.target.value)}  value={nameFilter} className="form-control rounded-5 bg-secondary border-black text-white px-3 "/>
                </div>
                <div className="form-check mt-3 ms-auto">
                    <input checked={selectedList === 'actress'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="actress" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Attrici</label>
                </div>
                <div className="form-check mt-2">
                    <input checked={selectedList === 'actors'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="actors" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Attori</label>
                </div>
                <div className="form-check mt-2">
                    <input checked={selectedList === 'all'} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="all" onChange={ e => setSelectedList(e.target.value)}/>
                    <label className="form-check-label" htmlFor="inlineRadio3">Entrambi</label>
                </div>
            </div>
            <div className="discover-section mb-5">
                <h2 className="text-center mb-4">SCOPRI</h2>
                <div className="d-flex justify-content-center">
                    {randomPeople.map((person, index) => (
                        <div className="rounded-circle mx-3" style={{ width: '100px', height: '100px', overflow: 'hidden' }} key={index}>
                            <img src={person.image} alt={person.name} className="img-fluid w-100 h-100 object-fit-cover" />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="py-2">
                <h2 className="fs-1 fw-semibold mb-0">STARS</h2>
                <p className="text-secondary">Risultati: {resultsCount}</p>

            </div>
            <div className="row gy-4">
                {selectedList === 'actress' && filteredActressData &&(
                    filteredActressData.map((actress, index)=>{
                        return(
                            <PersonCard person={actress} key={index}/>
                        )
                    }))
                }

                {selectedList === 'actors' && filteredActorsData && (
                    filteredActorsData.map((actor, index)=>{
                        return(
                            <PersonCard person={actor} key={index}/>
                        )
                    }))
                }

                {selectedList === 'all' && (
                    <>
                        {filteredActressData?.map((actress, index)=>{
                                return(
                                    <PersonCard person={actress} key={index}/>
                                )
                        })}

                        {filteredActorsData?.map((actor, index)=>{
                            return(
                                <PersonCard person={actor} key={index}/>
                            )
                        })}
                    </>

                )}
            </div>
        </>
    )
}