# Tinybird Product Front-End Developer Task 🐦
A small application to show the data behind API endpoint, displaying it with a table with inputs to filter some data.
_________________

## Considerations about the code 💡
 - To make the code more fluid and modularize JS code I added `Webpack` as a bundler
 - As the task asks to use only vanilla JS I did not added `Typescript`
 - I tried to do something similar to React but in vanilla, so everything is divided in components that return HTML Elements
 - Everything is built in JS classes, I think it is a organized method and easier to read and scale the code
 - I'm using Material Design Lite to create styles with more agility, but personally I prefer to build components with styled-components 
_________________

## How it works 🤔
Basically the content is being injected in **#content_box** on **index.html**, **app.js** is responsable to inject Home in this div when the page is loaded.

#### Deeplink and re-render
At **Home.js** an EventListener is responsable to trigger a re-render everytime the URL query-params are being updated, so we can fetch updated data based on the URL params. Also the filter inputs are prepared to use the params as default values.

#### SQL query params
Here the trick part is generating an SQL query trough URL params. I took the liberty to do a convention where the param is divided by operator, field and value:

```
>-total_amount=100
```
This param should generate a SQL clause like this:
``` sql
WHERE total_amount > 100
```
Examples:

| Param                 |  Clause                     |
|:----------------------|----------------------------:|
| >-total_amount=100    | `WHERE total_amount > 100`  |
| <-total_amount=100    | `WHERE total_amount < 100`  |
| eq-total_amount=100   | `WHERE total_amount = 100`  |
| limit=5               | `LIMIT 5`                   |
_________________

## How to run it 🏃‍♂️
##### Install dependencies:
``` bash
npm install
```
##### Build bundle:
``` bash
npm run build
```
##### Start:
Open the `dist/index.html` file on your browser

_________________
Hope you enjoy!

Guilherme Carra