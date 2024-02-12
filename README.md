# React + TypeScript + Vite

Webapp sandbox project for:

- React experiments
- Typescript experiments
- Jest testing strategies proofs of concept

## References

- [Component testing](https://www.alexhyett.com/unit-testing-vs-integration-testing/#component-tests)
- [Unit testing](https://www.alexhyett.com/unit-testing-vs-integration-testing/#unit-tests)
- Mocking techniques:
  - https://nancyhuynh-til.netlify.app/jest-mocking-useContext/
  - https://polvara.me/posts/mocking-context-with-react-testing-library
  - https://thoughtbot.com/blog/mocking-react-components-with-jest
  - https://medium.com/@taylormclean15/jest-testing-mocking-child-components-to-make-your-unit-tests-more-concise-18691ef6a0c2
  - https://stackoverflow.com/a/72450016/704681


## Project commands and settings

Project created with Vite.js with typescript support

  `yarn create vite demo-react-context-with-jest --template react-ts`

Commands:

  `yarn dev`

For setting up Jest tests:

- [Installing Jest for Testing in Your Vite-React TS project](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
