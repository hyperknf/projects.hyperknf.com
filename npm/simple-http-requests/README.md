# This module is make-in-progress

That means that the entire module is not finished, and some functionality might not work properly

# simple-http-requests NPM module

This is a module made by HyperKNF, with the objective of making HTTP requests in Node.js easier and less complicated.

The module is a wrapper over the 'node-fetch' API.

## How to install

Run this in your terminal or command prompt:

`npm install simple-http-requests`

Then you can import it with:

`const { Requests, Headers } = require("simple-http-requests")`

**Please be noted that the ES way of importing module does not work since I have not implemented it**

## Requests class

`constructor(type: string, url: string, headers: Headers || object, data: any)`

Creates a request

type - The type of HTTP request

url - The URL of the request, starting with **https**

headers - The headers of the request, Headers object or dictionary

data - The data for the request

`Requests.post(url: string, headers: Headers || object, data: any)`

Same as `new Requests("post", url, headers, data)`

## Headers class

`constructor({name: string, value: string}[, {name: string, value: string}[, ...]}])`

Creates a Headers object

name - Name of the header

value - Value of the header

`Headers.process(header: Headers)`

Processes a Headers object and turns it into a JSON object

headers - The Headers object

`Headers.prototype.add({name: string, value: string}[, {name: string, value: string}[, ...]}])`

Adds (a) header(s) to an existing Headers object

name - Name of the header

value - Value of the header