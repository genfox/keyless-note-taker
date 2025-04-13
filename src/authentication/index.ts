export interface User{
    id: number,
    nickname: string,
}

// mock function to get the logged user
export function getUser() : User {
    return {id: 1, nickname: "john_doe"};
}