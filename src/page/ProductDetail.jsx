import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne } from "../api/product";

export const ProductDetail = (prors) => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getOne(id).then(({ data }) => setData(data))
    }, [prors]);

    return (
        <React.Fragment>
            <div className="container">
                <div className="text-center d-flex">
                    <div className="item mr-3" key={data.id}>
                        <img src={data.image} alt="anh" />
                        <h3>{data.name}</h3>
                        <p>{data.desc}</p>
                    </div>
                </div>
                <Link to={"/products"}><button className="mt-3">List Product</button></Link>
            </div>
        </React.Fragment>
    )
}