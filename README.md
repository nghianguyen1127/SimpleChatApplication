## Command lines
* If you want to install shared dependencies: $ yarn add -W --dev typescript prettier eslint.

## Front end
* Front end Structure
src
├── assets // Contain base css, images, fonts, icons
├── components
| ├── atoms // Smallest (Text, Button, ..)
| └── molecules // Combine components in Atoms (Icon +  Text, Set of Buttons, ...)
| └── templates // As a skeleton of the page (without data)
| └── pages // Template and data()
├── constants // URL, Fiels common, keys, ...
├── core
| ├── reducer (injectReducer)
| └── saga (optional)
├── helpers (AxiosHelper, FetchHelper, ...)
├── modules // Contain main redux business
├── redux //  Store, ConfigureStore, ....
└── router // Define router for project
├── services // Third Party, Firebase, ... (optional)
├── utils // Common functions ... (optional)

## Reference
* Monorepo (https://dev.to/bhubr/express-react-monorepo-setup-with-lerna-b46)
* Chat (https://www.section.io/engineering-education/creating-a-real-time-chat-app-with-react-socket-io-with-e2e-encryption/
* Eslint for Webpack (https://viblo.asia/p/webpack-tu-a-den-a-webpack-eslint-loader-Ljy5VqQ3lra)
* Front-end configuration: https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k
* Front-end Structure: Atomics Design Pattern (https://bradfrost.com/blog/post/atomic-web-design/ or https://dev.to/adancarrasco/scaling-atomic-design-with-react-oo9)
