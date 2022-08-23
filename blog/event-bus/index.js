import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  
    const event = req.body;

    events.push(event);

    axios.post("http://localhost:4000/events", event).catch(err => console.log(err));
    axios.post("http://localhost:4001/events", event).catch(err => console.log(err));
    axios.post("http://localhost:4002/events", event).catch(err => console.log(err));
    axios.post("http://localhost:4003/events", event).catch(err => console.log(err));
  

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Server listening on 4005");
});
