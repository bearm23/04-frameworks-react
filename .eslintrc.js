module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "import",
    ],
    "rules": {
        "no-trailing-spaces": "error",
        "no-unused-vars": [2, {
            "args": "none"
        }],
        "import/no-unused-modules": [1, {"unusedExports": true}],
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "max-len": ["warn", { "code": 120 }],
        "@typescript-eslint/no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
    }
}
