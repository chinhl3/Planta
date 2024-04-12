import { createSlice } from "@reduxjs/toolkit";
import { login, signup, get_product_cart_user, delete_prouct_cart,Delete_purchased_products } from "./Apiuser";
import { action_cart } from "./Cartaction";

const initialState = {
    user: null,
    cart: [],
    products: [],
    result_sign_up: null,
    arr_products_pay:[],
    history: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // them san pham vao mang cart
        ...action_cart,

    },
    extraReducers: (builder) => {
        // su ly dang nhap
        // dang su ly 
        builder.addCase(login.pending, (state, action) => {

            console.log("....pending running");
        })
        // su ly thanh cong thuc action
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            console.log("....fulfilled running đăng nhập");
        })
        // su ly that bai thong bao loi
        builder.addCase(login.rejected, (state, action) => {

            console.log("....rejected running");
        });
        // ket thuc 

        // su ly dang ki
        builder.addCase(signup.pending, (state, action) => {
            console.log("....pending running");
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.result_sign_up = action.payload;
            console.log("....fulfilled running đăng kí");

        })
        builder.addCase(signup.rejected, (state, action) => {
            console.log("....rejected running");
        });
        // ket thuc

        // su ly lay du lieu go hang
        builder.addCase(get_product_cart_user.pending, (state, action) => {
            console.log("....pending running");
        })
        builder.addCase(get_product_cart_user.fulfilled, (state, action) => {
            state.cart = action.payload;
            console.log("....fulfilled running lấy dữ liêu");
        })
        builder.addCase(get_product_cart_user.rejected, (state, action) => {
            console.log("....rejected running");
        });
        // ket thuc
        // su ly xoa san pham
        builder.addCase(delete_prouct_cart.pending, (state, action) => {
            console.log("....pending running");
        })
        builder.addCase(delete_prouct_cart.fulfilled, (state, action) => {
            state.cart = action.payload;
            console.log("....fulfilled running xoa san pham");
        })
        builder.addCase(delete_prouct_cart.rejected, (state, action) => {
            console.log("....rejected running");
        })
        // ket thuc

        //xoa cac san pham da mua
        builder.addCase(Delete_purchased_products.pending, (state, action) => {
            console.log("....pending running");
        })
        builder.addCase(Delete_purchased_products.fulfilled, (state, action) => {
            state.arr_products_pay = action.payload;
            console.log("....fulfilled running xoa san pham");
        })
        builder.addCase(Delete_purchased_products.rejected, (state, action) => {
            console.log("....rejected running");
        })
        // ket thuc

    }
});

export const { setUser, add_to_cart, tang_sl, giam_sl, delete_cart,add_to_pay,logout } = userSlice.actions;
export default userSlice.reducer;