type FunctionType = (...args: any[]) => any
type ActionCreatorwsMapObject = { [actionCreator: string]: FunctionType }

export type ActionsUnion<A extends ActionCreatorwsMapObject> = ReturnType<A[keyof A]>

export type ListParam = {
    page: number,
    size: number,
    sort: string
}
