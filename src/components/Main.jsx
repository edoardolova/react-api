import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

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
                            <PersonCard person={actress} key={index}/>
                        )
                    })
                }

                {selectedList === 'actors' && actorsData?.map((actor, index)=>{
                        return(
                            <PersonCard person={actor} key={index}/>
                        )
                    })
                }

                {selectedList === 'all' && (
                    <>
                   { actressData?.map((actress, index)=>{
                        return(
                            <PersonCard person={actress} key={index}/>
                        )
                    })}

                    {actorsData?.map((actor, index)=>{
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