import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/product";

export const ProductsPage = (prors) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAll().then(({ data }) => setData(data))
    }, [prors])


    return (
        <React.Fragment>
            <div className="container">
                <h1>ProductList</h1>
                <div className="text-center d-flex">
                    {data.map(pro => {
                        return (
                            <div className="item mr-3" key={pro.id}>
                                <img src={pro.image} alt="anh" />
                                <h3>{pro.name}</h3>

                                <Link to={"/products/" + pro.id}><button className="btn btn-primary">Product Detail</button></Link>
                            </div>
                        )
                    })}
                </div>
                <Link to={"/admin/products"}><button className="mt-3">Admin Product</button></Link>
            </div>
        </React.Fragment>
    )
}