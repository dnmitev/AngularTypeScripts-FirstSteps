module app.domain {

    export interface IUser {
        id: number;
        username: string; // this should map to the login field
        avatar: string;
        url: string;
    }

}