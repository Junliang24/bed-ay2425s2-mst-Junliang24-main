const pool = require("../src/services/db");

const request = require("supertest");
const app = require("../src/app"); // Replace 'app' with the path to your Express.js application entry point

describe("Placeholder", () => {
  test("GET /test", (done) => {
    request(app)
      .get("/test")
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});