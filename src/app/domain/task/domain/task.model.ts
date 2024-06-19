export interface IDomainRequestTask{
    name: string;
}

export interface IDomainResponseTask extends IDomainRequestTask{
    id: number;
    state: boolean;
    created: string;
    updated: string;
    completed: string;
    deleted: string;
}

export interface IDomainResponse{
    message: string;
    code: number;
}