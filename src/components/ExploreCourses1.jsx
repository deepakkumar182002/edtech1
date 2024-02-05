import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import card from "../img/card1.png";



export default function ExploreCourses() {
    const [data, setData] = useState([]);
    const [getcard,setGetcard]=useState(1);
    const Showcard=(e)=>{
        setGetcard(e);
    };

    

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

                    <div className="nav nav-pills mb-3 list-group mx-1 my-5 col ">
                        <li className="nav-link"style={{background:"#e5f7f9d9",color:"black",border:"none"}}>Categories</li>
                        <li className={getcard === 1 ? "nav-link active":"nav-link"} onClick={()=>Showcard(1)} style={{cursor:"pointer"}}>Software Development</li>
                        <li className={getcard === 2 ? "nav-link active":"nav-link"} onClick={()=>Showcard(2)} style={{cursor:"pointer"}}>Cloud Computing</li>
                        <li className={getcard === 3 ? "nav-link active":"nav-link"} onClick={()=>Showcard(3)} style={{cursor:"pointer"}}>digital marketing</li>
                        <li className={getcard === 4 ? "nav-link active":"nav-link"} onClick={()=>Showcard(4)} style={{cursor:"pointer"}}>Syber Security</li>
                        <li className={getcard === 5 ? "nav-link active":"nav-link"} onClick={()=>Showcard(5)} style={{cursor:"pointer"}}>Data Science</li>
                        <li className={getcard === 6 ? "nav-link active":"nav-link"} onClick={()=>Showcard(6)} style={{cursor:"pointer"}}>UI & UX</li>
                        <li className={getcard === 7 ? "nav-link active":"nav-link"} onClick={()=>Showcard(7)} style={{cursor:"pointer"}}>IOT / Embedded</li>
                        <li className={getcard === 8 ? "nav-link active":"nav-link"} onClick={()=>Showcard(8)} style={{cursor:"pointer"}}>Graphics Design</li>
                        <li className={getcard === 9 ? "nav-link active":"nav-link"} onClick={()=>Showcard(9)} style={{cursor:"pointer"}}>Drone Technology</li>
                        <li className={getcard === 10 ? "nav-link active":"nav-link"} onClick={()=>Showcard(10)} style={{cursor:"pointer"}}>AI & Machine Learning</li>
                        <li className={getcard === 11 ? "nav-link active":"nav-link"} onClick={()=>Showcard(11)} style={{cursor:"pointer"}}>OS Linux</li>
                        <li className={getcard === 12 ? "nav-link active":"nav-link"} onClick={()=>Showcard(12)} style={{cursor:"pointer"}}>DevOps</li>
                    </div>
                    <div className="box cards my-4 p-3 col-md-10">
                        {
                            data && data.map((val) => {
                                return (
                                    <div key={val.id}>
                                            <div className={getcard===1?"card cardcolor m-1 fade show":"fade"} style={{ width: "18rem" }}>
                                                <img src={val.image} height={100} width={30} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.name}</h5>
                                                    <p className="text-muted "style={{fontSize:"0.8rem"}}>{val.content}</p>
                                                    <Link to={val.address} className="btn btn-primary">Know More</Link>
                                                </div>
                                            </div>
                                            {/* <div className={getcard===2?"card cardcolor m-1 fade show":"fade"} style={{ width: "18rem" }}>
                                                <img src={val2.image2} height={100} width={30} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val2.name2}</h5>
                                                    <p className="text-muted "style={{fontSize:"0.8rem"}}>{val.content2}</p>
                                                    <Link to={val2.address2} className="btn btn-primary">Know More</Link>
                                                </div>
                                            </div> */}
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
