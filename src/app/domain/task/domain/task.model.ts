export interface IDomainRequestTask{
    name: string;
}

export interface IDomainResponseTask extends IDomainRequestTask{
    id: number;
    state: boolean;
    name: string;
}

export interface IDomainResponse{
    message: string;
    code: number;
}