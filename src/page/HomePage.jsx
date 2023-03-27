import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {

    return (
        <React.Fragment>
            <div className="container">
                <h1>Home Page</h1>
                <Link to={"/products"}><button className="mt-3">List Product</button></Link>
            </div>
        </React.Fragment>
    )
}