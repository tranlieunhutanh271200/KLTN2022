import { ROLE } from "../../consts/role.const";

const INIT_STATE = {
    role: ROLE.TEACHER
}

export const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return {...state};
    }
}