module.exports = {
	mongodbMemoryServerOptions: {
		instance: {
			dbName: "jest",
		},
		binary: {
			version: "8.19.2", // Version of MongoDB
			skipMD5: true,
		},
		autoStart: false,
	},
};
