import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  // npx json-server -p 5000 -w data/db.json
});
