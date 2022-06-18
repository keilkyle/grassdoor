import React, {useEffect, useState}  from "react";
import LawnCard from "./LawnCard";

function Home() {

    const [homes, homeSetter] = useState([])

    const [name, nameFormer] = useState("")
    const [image, imageFormer] = useState("")
    const [address, addressFormer] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/lawns")
        .then(resp => resp.json())
        .then(data => homeSetter(data))
    }, [])

    function submitHandler(e) {
        e.preventDefault()

        const newLawn = {
            name: name,
            image_url: image,
            address: address
        }
        fetch("http://localhost:9292/lawns", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newLawn)
        })
        .then(resp => resp.json())
        .then(data => adder(data))
    }

    function adder(data){
        const newHomes = {...homes, data}
        homeSetter(newHomes)
    }

    return (
        <>
            <div className="left">
                <h1>Here's all the lawns.</h1>
                <div>
                    {homes.map((lawn) => <LawnCard key={lawn.id} lawn={lawn}/>)}
                </div>  
            </div>
            <div className="right">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        name="name"
                        label="name"
                        value={name}
                        onChange={(e) => nameFormer(e.target.value)}
                    />
                     <input
                        type="text"
                        name="address"
                        label="address"
                        value={address}
                        onChange={(e) => addressFormer(e.target.value)}
                    />
                     <input
                        type="text"
                        name="image_url"
                        label="image url"
                        value={image}
                        onChange={(e) => imageFormer(e.target.value)}
                    />
                    <button type="submit">Add New Lawn</button>
                </form>
            </div>

        </>
    )
}

export default Home