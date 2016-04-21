module app.config {

    /**
     * Constants
     */
    export class Constants {

        static get Default(): any {
            return {
                GIT_API_URL: 'https://api.github.com',
                OWNER: 'Microsoft',
                REPO: 'TypeScript'
            }
        }

    }

}