import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;
  await json(request, response);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);
    const { query, ...params } = routeParams.groups;

    request.params = params;

    request.query = query ? extractQueryParams(query) : {};

    return route.handler(request, response);
  }

  return request.writeHead(404).end();
});

server.listen(3333); // listen on port 3333 http://localhost:3333
