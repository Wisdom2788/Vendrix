import express from "express";
import path from "path";
import { ENV } from "./config/env.js";

 const app = express();

 const __dirname = path.resolve()

 app.get("/api/health", (req, res) => {
    res.status(200).json({message: "Success"});
 });

//  This will make the project ready for deploy ment
if (ENV.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "--/admin/dist")))

   app.get("/{*any}", (req,res) => {
      res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
   });
}

 app.listen(ENV.PORT, () => console.log("This server is Up and Running...")); 