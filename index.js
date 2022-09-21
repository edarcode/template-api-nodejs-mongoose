import "dotenv/config";
import { connDb } from "./src/connDb.js";
import { PORT } from "./src/env/server.js";
import { httpServer } from "./src/httpServer.js";

connDb()
	.then(() => console.log("Database connection successful"))
	.then(() => {
		httpServer.listen(PORT, () =>
			console.log(`Server running on port: ${PORT} 😎`)
		);
	})
	.catch(err => console.log(err));
