// in routes/stuff.js
const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');auth, 

const stuffCtrl = require("../controllers/stuff");

router.get("/", auth, stuffCtrl.getAllThings);
router.post("/", auth, stuffCtrl.createThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
