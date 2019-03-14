export default (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state.push({ ...action.payload });
            return state;
        case "DELETE_CONTACT":
            state.splice(action.payload.index, 1);
            return state;
        default:
            return state;
    }
}
