import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from "../api/product";

export const EditProduct = (prors) => {
    const { id } = useParams();
    const [data, setData] = useState({});

    const [inputValue, setInputValue] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getOne(id).then(({ data }) => setData(data))
    }, [prors]);

    const OnChangeValue = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const OnSubmit = (e) => {
        e.preventDefault();

        prors.editPro(id, inputValue);
        const confirm = window.confirm("Sua thanh cong");
        if (confirm) {
            navigate("/admin/products");
        }
    }


    return (
        <React.Fragment>
            <div className="container">
                <h1>EditProduct</h1>
                <form onSubmit={OnSubmit}>
                    <div className="input-group mb-3">
                        <img src={data.image} alt="anh" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input type="text" name="name" className="form-control" defaultValue={data.name} onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Image</span>
                        <input type="text" name="image" className="form-control" defaultValue={data.image} onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Desc</span>
                        <input type="text" name="desc" className="form-control" defaultValue={data.desc} onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}