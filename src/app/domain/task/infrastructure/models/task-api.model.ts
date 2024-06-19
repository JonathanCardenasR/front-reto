export interface IApiRequestTask{
    readonly name: string;
    readonly state: boolean;
}

export interface IApiResponseTask extends IApiRequestTask{
    readonly id: number;
}

export interface IApiResponse{
    readonly message: string;
    readonly code: number;
}