import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
    const context = {};
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
        <App />
        </StaticRouter>
        )}</div>`
      )
    );
  });
});

// app.get('^/$', (req, res) => {
//     const context = {};
//     const app = ReactDOMServer.renderToString(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     );
  
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Something went wrong:', err);
//         return res.status(500).send('Oops, better luck next time!');
//       }
  
//       return res.send(
//         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//       );
//     });
//   });

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});