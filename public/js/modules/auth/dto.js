/**
 * Created by artem on 11/3/15.
 */
define([], function () {

    var dto = {
        options: {
            formDefaults: {
                ngModelOptions: {updateOn: 'blur'},
                feedback: false,
                notitle: true
            },
            supressPropertyTitles: false
        },
        login: {
            schema: {
                type: "object",
                required: [
                    'name',
                    'password'
                ],
                properties: {
                    name: {
                        type: "string",
                        maxLength: 100
                    },
                    password: {
                        type: "string",
                        format: 'password',
                        minLength: 5,
                        maxLength: 30
                    }
                }
            }
        },
        signUp: {
            schema: {
                type: "object",
                required: [
                    'name',
                    'password',
                    'email'
                ],
                properties: {
                    name: {
                        type: "string",
                        maxLength: 100
                    },
                    password: {
                        type: "string",
                        format: 'password',
                        minLength: 5,
                        maxLength: 30
                    },
                    email: {
                        type: "string",
                        format: 'email'
                    }
                }
            }
        }
    };
    return dto;
});