import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import card from "../img/card1.png";



export default function ExploreCourses() {
    const [data, setData] = useState([]);

    //     const [getcard,setGetcard] = useState(1);
    //   let Showcard=()=>{
    //     if(getcard===false){
    //         // setGetcard(document.body.style.display="block");
    //         setGetcard(true);
    //       }else{
    //         setGetcard(false);
    //         // setGetcard(document.body.style.display="none");

    //     }
    // };

    let getData = () => {

        fetch("Data.json", { header: { "Content-Type": "application/json", "Accept": "application/json" } })
            .then((response) => {
                return response.json();
            }).then((mydata) => {
                setData(mydata);
                // console.log(data);
            });
    };
    useEffect(() => {
        getData();
        console.log("data is mounted");
    }, []);
    return (
        <div>
            <div className="container-fluid">

                <h1 className="text-center my-3">Get Certified, Get Ahead with Our Programs</h1>
                <h6 className="text-muted text-center my-2">Learn from global experts and get certified by the world&apos;s leading universities</h6>
                <div className="d-flex flex-row">

                    <div className="list-group mx-1 my-5 col ">
                        <p className="list-group-item list-group-item-action active ">Categories</p>
                        <button className="list-group-item ">Software Development</button>
                        <button className="list-group-item ">Cloud Computing</button>
                        <button className="list-group-item ">digital marketing</button>
                        <button className="list-group-item ">Syber Security</button>
                        <button className="list-group-item ">Data Science</button>
                        <button className="list-group-item ">UI & UX</button>
                        <button className="list-group-item ">IOT / Embedded</button>
                        <button className="list-group-item ">Graphics Design</button>
                        <button className="list-group-item ">Drone Technology</button>
                        <button className="list-group-item ">AI & Machine Learning</button>
                        <button className="list-group-item ">OS Linux</button>
                        <button className="list-group-item ">DevOps</button>
                    </div>
                    <div className="card my-5 p-3 col-md-10">
                        {
                            data && data.map((val) => {
                                return (
                                    <div key={val.id}>
                                        <div className="card-container">
                                            <div className="card cards m-2" style={{ width: "18rem" }}>
                                                <img src={val.image} height={100} width={30} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.name}</h5>
                                                    <p className="card-text">{val.content}</p>
                                                    <a href="/" className="btn btn-primary">Learn Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}
