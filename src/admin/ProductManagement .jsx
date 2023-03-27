import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../api/product";

export const ProductManagement = (prors) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAll().then(({ data }) => setData(data))
    }, [prors])

    const deleteProduct = (id) => {
        const confirm = window.confirm("Ban co chac muon xoa khong ?");
        if (confirm) {
            prors.deletePro(id)
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1>Product Manager</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Desc</th>
                            <th>Aciton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(pro => {
                            return (
                                <tr key={pro.id}>
                                    <td>{pro.id}</td>
                                    <td>{pro.name}</td>
                                    <td><img src={pro.image} alt="anh" width={"50px"} /></td>
                                    <td>{pro.desc}</td>
                                    <td>
                                        <button className="btn btn-danger mr-3" onClick={() => deleteProduct(pro.id)}>Delete</button>
                                        <Link to={"/admin/products/" + pro.id}><button className="btn btn-warning mf-3">Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to={"/admin/products/add"}><button className="btn btn-primary mf-3">+</button></Link>
            </div>
        </React.Fragment>
    )
}