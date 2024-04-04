import { ADD_TO_CART, INCREMENT, REMOVE_FROM_CART } from "../actions/cart";

const initialState = {
    items: [],
}

const cartRedcuer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.items.find(item => item.id === action.payload.id);
            const quantityToAdd = action.payload.quantity;
            if (existingItem) {
                // If item exists, update its quantity
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
                    )
                };
            } else {
                // If item is not in the cart, add it with the selected quantity
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: quantityToAdd }]
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case INCREMENT:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    } else {
                        return item
                    }
                })
            };
        default:
            return state;
    }
};


export default cartRedcuer;