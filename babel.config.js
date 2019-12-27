module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "modules": false,
                "useBuiltIns": "usage",
                "corejs": 3,
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "not ie <= 9"
                    ]
                },
            }
        ]
    ],
    plugins: [["@babel/plugin-transform-runtime",{
        corejs:3
    }]]
}