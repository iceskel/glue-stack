import { createAction } from "common/action-helpers";
import { ActionsUnion, ListParam } from "common/types";
import { UserBody } from "main/pod/user/types";

export enum ActionTypes {
    ADD_USER = "ADD_USER",
    SAVE_USER = "SAVE_USER",
    FIND_USER = "FIND_USER",
    LIST_USERS = "LIST_USERS",
}

export const Actions = {
    add: (body: UserBody) => createAction(ActionTypes.ADD_USER, body),
    save: (body: UserBody) => createAction(ActionTypes.SAVE_USER, body),
    find: (id: number) => createAction(ActionTypes.FIND_USER, id),
    list: (params: ListParam) => createAction(ActionTypes.LIST_USERS, params),
}

export type Actions = ActionsUnion<typeof Actions>
