# Cypress component testing NextJs (webpack 5 flag on)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Cypress component testing was also added.

[Learn more](https://docs.cypress.io/guides/component-testing/introduction)

An example of a test can be found at [components/Button/Button.spec.jsx](./components/Button/Button.spec.jsx)

## How Cypress component testing was added

First install cypress specific dependencies

```bash
yarn add --develop cypress @cypress/react @cypress/webpack-dev-server
```

Now we notice that when we launch the cypress server, it fails saying it is missing `webpack-dev-server` then `html-webpack-plugin`
We install them both

```bash
yarn add -D webpack-dev-server html-webpack-plugin
```

We can now configure `cypress.json` to direct cypress to where are con=mponent test files are.

```json
{
  "componentFolder": "components",
  "testFiles": "**/*.spec.jsx"
}
```

And update the `cypress/plugins/index.js` file to tell cypress how to start the dev-server.

## Launch component testing

This command will open the testing environment locally

```bash
yarn cy
```

This one will run all tests available and fail if one of the test fails

```bash
yarn cy:run
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
