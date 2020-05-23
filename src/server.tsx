import React, { FC, ReactNode } from 'react';
import { HelmetData, Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import express from 'express';
import { renderToNodeStream } from 'react-dom/server';
import App from './App/App';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);

interface HTMLProps {
  css?: string;
  js: string;
  helmet: HelmetData;
  children: ReactNode;
}

const HTML: FC<HTMLProps> = ({ js, css, helmet, children }) => (
  <html lang="en" {...helmet.htmlAttributes.toComponent()}>
    <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Superpower</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {css && <link rel="stylesheet" href={css} />}
      {process.env.NODE_ENV === 'production' ? (
        <script src={js} defer />
      ) : (
        <script src={js} defer crossOrigin="true" />
      )}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      <div id="root">{children}</div>
    </body>
  </html>
);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req, res) => {
    const context: StaticRouterContext = {};
    const stream = renderToNodeStream(
      <HTML js={assets.client.js} css={assets.client.css} helmet={Helmet.renderStatic()}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </HTML>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.write('<!doctype html>');
      stream.pipe(res);
    }
  });

export default server;
