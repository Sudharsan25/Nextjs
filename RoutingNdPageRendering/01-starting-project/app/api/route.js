export function GET(req){
    return new Response('Hello');
}

// route.js files are used for defining route handlers
// route handlers can export functions like GET or POST so inturn act as API end points which return or store JSON Data 