import React, {useEffect, useState}  from "react";
import LawnCard from "./LawnCard";

function Home() {

    const [homes, homeSetter] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/lawns")
        .then(resp => resp.json())
        .then(data => homeSetter(data))
    }, [])

    return (
        <>
            <h1>Here's all the lawns.</h1>
            <div>
                {homes.map((lawn) => <LawnCard key={lawn.id} lawn={lawn}/>)}
            </div>
        </>
    )
}

export default Home