export type IResponse<T> = {
    status: boolean,
    message?: string
    data?: T
}