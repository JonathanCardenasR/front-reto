export interface IApiRequestUser{
    readonly username: string;
    readonly password: string;
}

export interface IApiResponseUser extends IApiRequestUser{
    readonly id: number;
    readonly token: string;
    readonly state: string;
}

export interface IApiResponse{
    readonly message: string;
    readonly code: number;
}