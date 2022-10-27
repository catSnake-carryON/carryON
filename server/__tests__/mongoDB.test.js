import { User, packingList } from "..models/UserModel";
import jest from "jest";

const mongoose = require("mongoose");

//const UserModel = require("../models/UserModel");
const userData = {
	email: "smith.code@gmail.com",
	username: "testNtheNode",
	password: "I-Love-Algos",
	prevPackingLists: [],
};
const packingListData = {
	tripName: "SanDiego-2023",
	destination: "San Diego",
	startDate: "2023-05-22",
	endDate: "2023-06-01",
};

describe("user model tests", () => {
	//connect to MongoDB In-Memory Server
	beforeAll(async () => {
		try {
			await mongoose.connect(global.__MONGO_URI__, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				name: "testDB",
			});
			console.log("test server up and running");
		} catch (err) {
			console.log("not connecting to MongoDB Memory Server: ", err);
		}
	});

	it("creates and saves a user successfully", async () => {
		const testUser = new User(userData);
		const savedUser = await testUser.save();

		//check that user is given uniqe ID by MongoDB
		expect(savedUser._id).toBeDefined();
		//check that user has email property containing '@'
		expect(savedUser.email).toContain("@");
		//check that user has p-assword property that is defined
		expect(savedUser.password).toBeDefined();
	});
});
