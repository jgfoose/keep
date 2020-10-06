const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Card = mongoose.model("cards");
const Label = mongoose.model("labels");

module.exports = (app) => {
  app.get("/api/cards", requireLogin, async (req, res) => {
    const cards = await Card.find({ _user: req.user.googleId });
    res.send(cards);
  });

  app.get("/api/labels", requireLogin, async (req, res) => {
    const labels = await Label.find({ _user: req.user.googleId });
    res.send(labels);
  });

  app.post("/api/cards", requireLogin, (req, res) => {
    const { cardId, header, color, label, items } = req.body;
    const card = new Card({
      cardId: cardId,
      header: header,
      color: color,
      label: label,
      items: items,
      _user: req.user.googleId,
      dateSent: Date.now(),
    });
    card.save();
    res.end();
  });

  app.post("/api/deleteCard", requireLogin, (req, res) => {
    const { id } = req.body;
    Card.deleteOne({ cardId: id, _user: req.user.googleId }).exec();
    res.end();
  });

  app.post("/api/cardHeader", requireLogin, (req, res) => {
    const { id, newHeader } = req.body;
    Card.updateOne(
      { cardId: id, _user: req.user.googleId },
      { header: newHeader }
    ).exec();
    res.end();
  });

  app.post("/api/cardLabel", requireLogin, (req, res) => {
    const { cardId, label } = req.body;
    Card.updateOne(
      { cardId: cardId, _user: req.user.googleId },
      { label: label }
    ).exec();
    res.end();
  });

  app.post("/api/addItem", requireLogin, (req, res) => {
    const { id, newItem } = req.body;
    Card.updateOne(
      { cardId: id, _user: req.user.googleId },
      { $push: { items: newItem } }
    ).exec();
    res.end();
  });

  app.post("/api/deleteItem", requireLogin, (req, res) => {
    const { cardId, item } = req.body;
    Card.updateOne(
      { cardId: cardId, _user: req.user.googleId },
      { $pull: { items: item } }
    ).exec();
    res.end();
  });

  app.post("/api/addLabel", requireLogin, (req, res) => {
    const { name } = req.body;
    const label = new Label({ label: name, _user: req.user.googleId });
    label.save();
    res.end();
  });

  app.post("/api/deleteLabel", requireLogin, (req, res) => {
    const { name } = req.body;
    Label.deleteOne({ label: name, _user: req.user.googleId }).exec();
    res.end();
  });

  app.post("/api/color", requireLogin, (req, res) => {
    const { id, color } = req.body;
    Card.updateOne(
      { cardId: id, _user: req.user.googleId },
      { color: color }
    ).exec();
    res.end();
  });
};
