import { UserBody } from "main/pod/user/types";
import * as formActions from "main/pod/user/actions";

export interface State {
    user: UserBody | {},
    reloadPage: boolean
}


export const initialState: State = {
    user: {},
    reloadPage: false,
}

export const user = (state = initialState, action: formActions.Actions): State => {
    switch (action.type) {
        case formActions.ActionTypes.ADD_USER: {
            
        }
    }
}
