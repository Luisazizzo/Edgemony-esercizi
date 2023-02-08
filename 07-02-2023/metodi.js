const express = require("express");
const { user } = require("./data");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/user", (req, res) => {
  res.status(200).json({ sucess: true, data: user });
});

app.post("/api/user", (req, res) => {
  const { title, body, userId } = req.body;
  if (!title || !body || !userId) {
    return res
      .status(400)
      .json({ success: false, msg: "Non trovo un dato necessario" });
  }
  return res.status(200).json({
    success: true,
    user: { title: title, body: body, userId: userId },
    user: [...user, req.body],
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo alla porta ${PORT}`);
});
