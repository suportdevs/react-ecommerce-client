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
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isStock, setIsStock] = useState("");
    const [rate, setRate] = useState("");
    const [storeProduct, {isLoading, isSuccess, isError, error}] = useStoreProductMutation();
    const handleSelectCategoryChange = (cat) => {
        console.log(cat);
        setCategory(cat);
    }
    const handleSelectSizeChange = (s) => {
        setSize(s);
    }
    const handleSelectColorChange = (c) => {
        setColor(c);
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('categories', category);
        formData.append('sizes', size);
        formData.append('colors', color);
        formData.append('isStock', isStock);
        formData.append('rate', rate);
        await storeProduct(formData).unwrap();
    }
    console.log('c' +category);
    console.log('s' +isSuccess);
    console.log('e=' + error);

    return (
        <div className="newProduct">
            <h3 className="newProductTitle">New Product</h3>
            <form className="newProductForm" onSubmit={handleProductSubmit} >
                <div className="newProductItem">
                    <label htmlFor="image">Image</label>
                    <input className="newProductItemInput" type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input className="newProductItemInput" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="description">Description</label>
                    <input className="newProductItemInput" type="text" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Categories</label>
                    <ReactSelect
                        styles={defaultSelectStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        value={category}
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
                    <select className="newProductItemInput" name="inStock" onChange={(e) => setIsStock(e.target.value)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label htmlFor="rate">Rate</label>
                    <input className="newProductItemInput" type="number" name="rate" placeholder="Rate" step='any' onChange={(e) => setRate(e.target.value)} />
                </div>
                <div className="newProductItem">
                    <button type='submit' className="newProductItemBtn" disabled={isLoading}>{isLoading ? 'Loading...' : 'Save'}</button>
                </div>
            </form>
        </div>
    )
}