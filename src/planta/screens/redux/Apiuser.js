import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../resources/help/Axiosinstancer";
export const login = createAsyncThunk(
    'users/login',
    async (data, { rejectWithValue }) => {
        try {
            // console.log(data)
            const response = await AxiosInstance().post('/users/login', data);

            if (response.status == true) {
                return response.data;
            } else {
                console.log("sai mat khau");
                return false
            }
        } catch (error) {
            rejectWithValue(error);
        }
    }
)
export const signup = createAsyncThunk(
    'users/signup',
    async (data, { rejectWithValue }) => {
        console.log(data)

        try {
            const response = await AxiosInstance().post('/users/register', data);
            if (response.status == true) {
                return response.status;
            }
            else {
                return response.messges;
            }
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const get_product_cart_user = createAsyncThunk(
    'users/get_product_cart_user',
    async (data, { rejectWithValue }) => {
        try {

            const response = await AxiosInstance().get('/users?email=' + data);
            return response.data
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const delete_prouct_cart = createAsyncThunk(
    'users/delete_prouct_cart',
    async (data, { rejectWithValue }) => {
        try {
            console.log("đã vo đây")
            console.log(data)
            const response = await AxiosInstance().post('/users/delete', data);
            return response.data
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
export const Delete_purchased_products = createAsyncThunk(
    'users/Delete_purchased_products',
    async (data, { rejectWithValue }) => {

        try {
           
            console.log(data.email)
            console.log(data.data)

            const response = await AxiosInstance().post('/users/Delete_purchased_products', {
                email: data.email,
                data: data.data
            });
            return response.data
        } catch (error) {
            rejectWithValue(error);
        }
    }
)
