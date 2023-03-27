import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = (prors) => {
    const [inputValue, setInputValue] = useState({
        name: "",
        desc: "",
        image: ""
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const OnChangeValue = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    const OnSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.name) {
            setError("Moi nhap ten day du");
            return;
        } else if (!inputValue.image) {
            setError("Moi nhap anh day du");
            return;
        }
        else if (!inputValue.desc) {
            setError("Moi nhap mo ta day du");
            return;
        }
        else {
            prors.addPro(inputValue);
            const confirm = window.confirm("Them thanh cong");
            if (confirm) {
                navigate("/admin/products");
            }
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1>AddProduct</h1>
                {error ? <div className="alert alert-danger">{error}</div> : ""}
                <form onSubmit={OnSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input type="text" name="name" className="form-control" onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Image</span>
                        <input type="text" name="image" className="form-control" onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Desc</span>
                        <input type="text" name="desc" className="form-control" onChange={OnChangeValue} />
                    </div>
                    <div className="input-group mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}