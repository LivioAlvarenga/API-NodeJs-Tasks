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
        return response
          .writeHead(400)
          .end(JSON.stringify({ message: "Title is required" }));
      }
      if (!description) {
        return response
          .writeHead(400)
          .end(JSON.stringify({ message: "Description is required" }));
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
        return response
          .writeHead(400)
          .end(JSON.stringify({ message: "title or description are required" }));
      }

      const task = database.idExists("tasks", id);
      if (task.length === 0) {
        return response
          .writeHead(404)
          .end(JSON.stringify({ message: `Task with id: ${id} not found!` }));
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

      const task = database.idExists("tasks", id);
      if (task.length === 0) {
        return response
          .writeHead(404)
          .end(JSON.stringify({ message: `Task with id: ${id} not found!` }));
      }

      database.delete("tasks", id);

      return response.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (request, response) => {
      const { id } = request.params;

      const task = database.idExists("tasks", id);

      if (task.length === 0) {
        return response
          .writeHead(404)
          .end(JSON.stringify({ message: `Task with id: ${id} not found!` }));
      }

      const isTaskCompleted = !!task[0].completed_at;

      const completed_at = isTaskCompleted ? null : new Date();

      database.update("tasks", id, { completed_at });

      return response.writeHead(204).end();
    },
  },
];
