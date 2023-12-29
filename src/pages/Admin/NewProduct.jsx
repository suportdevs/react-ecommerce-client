import ReactSelect, {StylesConfig } from "react-select";
import "./NewProduct.css";
import { useState } from "react";
import makeAnimated from 'react-select/animated';
import {categories} from "../../data";

const categoryOptions  = categories.map(item => {
    return { value: item.name || '', label: item.title || '' };
  });
  const animatedComponents = makeAnimated();
  const colourStyles = {
    control: (styles) => ({ ...styles, border: 'none', borderBottom: '1px solid #525252', margin: '5px 0' }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = chroma(data.color);
    //   return {
    //     ...styles,
    //     backgroundColor: isDisabled
    //       ? undefined
    //       : isSelected
    //       ? data.color
    //       : isFocused
    //       ? color.alpha(0.1).css()
    //       : undefined,
    //     color: isDisabled
    //       ? '#ccc'
    //       : isSelected
    //       ? chroma.contrast(color, 'white') > 2
    //         ? 'white'
    //         : 'black'
    //       : data.color,
    //     cursor: isDisabled ? 'not-allowed' : 'default',
  
    //     ':active': {
    //       ...styles[':active'],
    //       backgroundColor: !isDisabled
    //         ? isSelected
    //           ? data.color
    //           : color.alpha(0.3).css()
    //         : undefined,
    //     },
    //   };
    // },
    // multiValue: (styles, { data }) => {
    //   const color = chroma(data.color);
    //   return {
    //     ...styles,
    //     backgroundColor: color.alpha(0.1).css(),
    //   };
    // },
    // multiValueLabel: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    // }),
    // multiValueRemove: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    //   ':hover': {
    //     backgroundColor: data.color,
    //     color: 'white',
    //   },
    // }),
  };

export default function NewProduct(){
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="newProduct">
            <h3 className="newProductTitle">New Product</h3>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="image">Image</label>
                    <input className="newProductItemInput newProductItemFile" type="file" name="image" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input className="newProductItemInput" type="text" name="name" placeholder="Name" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="description">Description</label>
                    <input className="newProductItemInput" type="text" name="description" placeholder="Description" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Categories</label>
                    <ReactSelect
                        styles={colourStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[categoryOptions[0], categoryOptions[0]]}
                        isMulti
                        options={categoryOptions}
                        />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock</label>
                    <select className="newProductItemInput" name="inStock">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <button className="newProductItemBtn">Update</button>
                </div>
                </form>
        </div>
    )
}