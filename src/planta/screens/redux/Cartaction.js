

export const action_cart = {
    add_to_cart: (state, action) => {
        const data = action.payload;
        // tìm sản phẩm xemm tồn tại trong mảng chưa 
        const index = state.cart.findIndex(item => item.id === data.id);

        if (index !== -1) {
            // đã có trong cart
            state.cart[index].so_luong++;
        } else {
            // chưa có trong cart
            state.cart.push({
                id: data.id,
                name: data.name,
                price: data.price,
                img: data.img,
                like: data.like,
                so_luong: data.so_luong
            })

        }
    },
    // tăng số lượng trong cart 
    tang_sl: (state, action) => {
        const id = action.payload;
        var a = [];
        a = state.cart;
        const product = state.cart.find(product => product.id === id);
        console.log(product.quantity)
        product.quantity = product.quantity + 1;


    },
    // giảm số lượng trong cart trong reducer
    giam_sl: (state, action) => {
        const id = action.payload;
        const product = state.cart.find(product => product.id === id);
        if(product.quantity ==0){
            state.cart = state.cart.filter(item => item.id.toString() !== id.toString());

        }
        else{
            console.log(product.quantity)
            product.quantity = product.quantity - 1;
        }
    },

    // xóa sản phẩm người dùng chọn
    delete_cart: (state, action) => {
        const id = action.payload;
        state.cart = state.cart.filter(item => item.id.toString() !== id.toString());
    },

    // thêm các sản phẩm người dùng muốn thanh toán vào trong mảng chung trong reducer 
    add_to_pay: (state, action) => {
        const data = action.payload;
       state.arr_products_pay=data
    },

    logout: (state, action) => {
        state.user=null;
    }
};


