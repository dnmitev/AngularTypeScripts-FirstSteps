var app;
(function (app) {
    var config;
    (function (config) {
        /**
         * Constants
         */
        var Constants = (function () {
            function Constants() {
            }
            Object.defineProperty(Constants, "Default", {
                get: function () {
                    return {
                        GIT_API_URL: 'https://api.github.com',
                        OWNER: 'Microsoft',
                        REPO: 'TypeScript'
                    };
                },
                enumerable: true,
                configurable: true
            });
            return Constants;
        })();
        config.Constants = Constants;
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
