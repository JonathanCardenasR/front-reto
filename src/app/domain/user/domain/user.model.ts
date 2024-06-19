export interface IDomainRequestUser{
    user: string;
    pass: string;
}

export interface IDomainResponseUser extends IDomainRequestUser{
    id: number;
    token: string;
}