module app.domain {

    export interface IGitIssue {
        id: number;
        url: string;
        title: string;
        body: string;
        user: IUser;
    }
    
}