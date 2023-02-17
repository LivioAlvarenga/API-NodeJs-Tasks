import { randomUUID } from "crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (request, response) => {
      const { title, description } = request.body;

      if (!title) {
        return response.writeHead(400).end("Title is required");
      }
      if (!description) {
        return response.writeHead(400).end("Description is required");
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        update_at: new Date(),
      };

      database.insert("tasks", task);

      return response.writeHead(201).end();
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (request, response) => {
      const { title, description } = request.query;

      const tasks = database.select("tasks", {
        title,
        description,
      });

      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (request, response) => {
      const { id } = request.params;
      const { title, description } = request.body;

      if (!title || !description) {
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "title or description are required" }));
      }

      const taskExist = database.idExists("tasks", id);
      if (taskExist.length === 0) {
        return response.writeHead(404).end(`Task with id: ${id} not found!`);
      }

      database.update("tasks", id, {
        title,
        description,
        updated_at: new Date(),
      });

      return response.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (request, response) => {
      const { id } = request.params;

      database.delete("users", id);

      return response.writeHead(204).end();
    },
  },
];
