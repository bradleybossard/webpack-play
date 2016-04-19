A example of webpack compile using babel transpile and eslint

* npm init --yes` to create blank package.json
* npm install --save-dev webpack babel-loader babel-core babel-preset-es2015 babel-preset-stage-2
* npm install --save-dev babel-eslint eslint-plugin-babel eslint eslint-config-airbnb # eslint for babel with airbnb style-guide
* add .babelrc with configuration to use es2015, stage-2
* add .eslintrc for airbnb presets and babel-specific rules
* add webpack.config.js
* add src/index.js index.html
* run `webpack` to compile
* add 'lint' to package.json rules
