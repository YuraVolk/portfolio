module.exports = {
    "env": {
        "es2022": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:vue/recommended"
    ],
    "plugins": ["vue"],
    "root": true,
    "rules": {
        "no-console": process.env.NODE_ENV === "production"
            ? "off"
            : "off",
        "no-debugger": process.env.NODE_ENV === "production"
            ? "off"
            : "off"
    }
};
