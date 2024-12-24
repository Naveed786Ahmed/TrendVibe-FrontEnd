import { ProductType } from "../actions/actionType.js";

const initialProduct = {
    allProducts: [],
    addCart: [],
    subTotals: 0
}

export const ProductReducers = (state = initialProduct, { type, payload }) => {
    switch (type) {
        case ProductType.allProduct:
            return { ...state, allProducts: [...payload] }

        case ProductType.cartProduct:
            const exists = state.addCart.find((item) => item.id === payload.id);
            if (exists) {
                return {
                    ...state,
                    addCart: state.addCart.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item),
                    subTotals: state.subTotals + payload.price
                }
            }
            return {
                ...state,
                addCart: [...state.addCart, { ...payload, quantity: 1 }],
                subTotals: state.subTotals + payload.price
            }

        case ProductType.updateQuantity:
            let { id, quantity } = payload;
            const itemToUpdate = state.addCart.find((item) => item.id === id);

            if (itemToUpdate) {
                const priceDif = (quantity - itemToUpdate.quantity) * itemToUpdate.price
                
                return {
                    ...state,
                    addCart: state.addCart.map((item) => item.id === id ? { ...item, quantity } : item),
                    subTotals: state.subTotals + priceDif
                }
            }
            return state

        case ProductType.deleteCart:
            const itemToDelete = state.addCart.find((item) => item.id == payload.id)

            if (itemToDelete) {
                return {
                    ...state,
                    addCart: [...state.addCart.filter((item) => item.id !== payload.id)],
                    subTotals: state.subTotals - (itemToDelete.price * itemToDelete.quantity)
                }
            }
            return state


        default:
            return state
    }
}