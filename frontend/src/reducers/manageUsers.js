import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageUsers(state = {
    users: [],
    establishments: [],
    loading: false

}, action) {
    switch (action.type) {
        case 'ADD_USER':
            const user = { username: action.user.text, gender: action.user.gender, interests: action.user.text, id: cuid() }
            return { ...state, users: [...state.users, user] }

        case 'DELETE_USER':
            return { ...state, users: state.users.filter(user => user.id !== action.id) }

        case 'LOAD_USERS':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users,
                loading: false
            }

        case 'LOAD_DATE_SPOTS':
            return {
                ...state,
                establishments: [...state.establishments],
                loading: true
            }
        case 'ADD_ESTABLISHMENTS':
            return {
                ...state,
                establishments: action.establishments,
                loading: false
            }

        default:
            return state;
    }


}