import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./ProductList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
// import {productRows} from "../../utilies/productData";
import { useEffect, useState } from "react";
import { useDeleteProductByIdMutation, useGetProductsQuery } from "../../services/productApi";
import { useDispatch, useSelector } from "react-redux";
import { deleteStoreProductById, getProducts } from "../../services/productSlice";

export default function AdminProductList(){
    const dispatch = useDispatch();
    const {data, isLoading, isSuccess} = useGetProductsQuery("");
    const [deleteProductById, {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess}] = useDeleteProductByIdMutation();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        isSuccess && dispatch(getProducts(data.products));
    }, [dispatch]);

    const handleProductDelete = async (id) => {
        await deleteProductById(id).unwrap();
        isDeleteSuccess && dispatch(deleteStoreProductById(id));
    }

    const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'image', headerName: 'Image', width: 100, renderCell: (params) => {
        return (
            <div className="productListProduct">
                <img className="productListProductImg" src={params.row.image} alt="" />
            </div>
        )
    }},
    { field: 'product', headerName: 'Product', width: 300, renderCell: (params) => {
        return (
            <div className="productListProduct">
                <span className="productListName">{params.row.name}</span>
            </div>
        )
    }},
    { field: 'isStock', headerName: 'Stock', width: 200, renderCell: (params) => {
        return <div>{params.row.isStock}</div>
    }},
    { field: 'rate', headerName: 'Price', width: 150, renderCell: (params) => {
        return <div>{params.row.rate}</div>
    } },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
        return (
            <div className="productTableAction">
                <Link to={"/admin/products/edit/" + params.row._id}>
                <EditNote className="productListIcon edit" />
                </Link>
                <DeleteOutline className="productListIcon delete" onClick={() => handleProductDelete(params.row._id)} />
            </div>
        )
    } },
    ];
    return (
        <div className="productList">
            <div className="productListTop">
            <h3 className="productListTitle">Product List</h3>
            <Link to="/newProduct">
            <button className="productListCreateBtn">Create</button>
            </Link>
            </div>
            <div className="productListContent">
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 20]}
                checkboxSelection
            />
            </div>
        </div>
    )
}