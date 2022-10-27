import { request } from "express";
import supertest from "supertest";
import app from "../server.js";

describe("POST /saveList", () => {
	describe("if user is already logged in", () => {
		//should save list to database
		//should respond to client with json object
		test("response should have 200 status code", async () => {
			const packingItem1 = {
				item: "toothbrush",
				quantity: 1,
			};
			const packingItem2 = {
				item: "sweatpants",
				quantity: 2,
				packed: true,
			};
			const response = await request(app)
				.post("/saveList")
				.send({
					tripName: "NYC-2023",
					destination: "New York, New York",
					startDate: "2023-05-25",
					endDate: "2023-06-05",
					listOfPackingItems: [packingItem1, packingItem2],
				});
			expect(response.statusCode)
				.toBeGreaterThanOrEqual(200)
				.toBeLessThanOrEqual(299);
		});
	});
});
