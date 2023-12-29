import ReactSelect, {StylesConfig } from "react-select";
import "./NewProduct.css";
import { useState } from "react";
import makeAnimated from 'react-select/animated';
import {categories, sizes, colors} from "../../data";
import { useStoreProductMutation } from "../../services/productApi";

const categoryOptions  = categories.map(item => {
    return { value: item.name || '', label: item.title || '' };
});
const sizeOptions  = sizes.map(item => {
    return { value: item.name || '', label: item.name || '' };
});
const colorOptions  = colors.map(item => {
    return { value: item.color || '', label: item.name || '' };
});
const animatedComponents = makeAnimated();
const defaultSelectStyles = {
control: (styles) => ({ ...styles, border: 'none', borderBottom: '1px solid #525252', margin: '5px 0' }),
};

export default function NewProduct(){
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [file, setFile] = useState(null);
    const [inputs, setInputs] = useState({});
    const [storeProduct, {isLoading, isSuccess, isError, error}] = useStoreProductMutation();
    const handleSelectCategoryChange = (cat) => {
        setCategory(cat);
    }
    const handleSelectSizeChange = (s) => {
        setSize(s);
    }
    const handleSelectColorChange = (c) => {
        setColor(c);
    }
    const handleInputs = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value};
        })
    };
    
    const handleProductSubmit = async () => {
        await storeProduct({...inputs, image: file, categories: category, sizes: size, colors: color}).unwrap();
    }
    console.log('s' +isSuccess);
    console.log('e=' + error);

    return (
        <div className="newProduct">
            <h3 className="newProductTitle">New Product</h3>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="image">Image</label>
                    <input className="newProductItemInput newProductItemFile" type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input className="newProductItemInput" type="text" name="name" placeholder="Name" onChange={handleInputs} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="description">Description</label>
                    <input className="newProductItemInput" type="text" name="description" placeholder="Description" onChange={handleInputs} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Categories</label>
                    <ReactSelect
                        styles={defaultSelectStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={handleSelectCategoryChange}
                        isMulti
                        options={categoryOptions}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Size</label>
                    <ReactSelect
                        styles={defaultSelectStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={handleSelectSizeChange}
                        isMulti
                        options={sizeOptions}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Color</label>
                    <ReactSelect
                        styles={defaultSelectStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        onChange={handleSelectColorChange}
                        isMulti
                        options={colorOptions}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock</label>
                    <select className="newProductItemInput" name="inStock" onChange={handleInputs}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label htmlFor="rate">Rate</label>
                    <input className="newProductItemInput" type="number" name="rate" placeholder="Rate" step='any' onChange={handleInputs} />
                </div>
                <div className="newProductItem">
                    <button onClick={handleProductSubmit} className="newProductItemBtn" disabled={isLoading}>{isLoading ? 'Loading...' : 'Save'}</button>
                </div>
            </form>
        </div>
    )
}