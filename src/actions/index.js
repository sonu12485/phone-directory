export const addContact = (name, number) => {
    return {
        type: "ADD_CONTACT",
        payload: {
            name,
            number
        }
    }
}

export const deleteContact = (index) => {
    return {
        type: "DELETE_CONTACT",
        payload: {
            index
        }
    }
}
