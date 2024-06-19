export interface IApiRequestTask{
    readonly name: string;
    readonly state: boolean;
}

export interface IApiResponseTask extends IApiRequestTask{
    readonly id: number;
    readonly created: string;
    readonly updated: string;
    readonly completed: string;
    readonly deleted: string;
}

export interface IApiResponse{
    readonly message: string;
    readonly code: number;
}