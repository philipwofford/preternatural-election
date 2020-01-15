const express = require(`express`);
const router = express.Router();

const item = require(`../models/index.js`);

router.get(`/`, (req, res, next) => {
	res.send(`API base route. Try /items, /post, /put or /delete`);
})

router.get(`/items`, (req, res, next) => {
	item.find((err, items) => {
		if (err) {
			res.json(err);
		}
		else {
			if (!items.length) {
				res.send(`No items found`);
			}
			else res.send(items);
		}
	})
})

router.post(`/add`, (req, res, next) => {
	let newItem = new item({
		itemName: req.body.itemName,
		itemQuantity: req.body.itemQuantity,
		itemBought: req.body.itemBought
	});

	newItem.save((err, item) => {
		if (err) {
			res.json(err);
		}
		else {
			res.json({msg: `Item has been successfully added. Check /items to verify`});
		}
	})
})

router.put(`/put`, (req, res, next) => {
	res.send(`PUT route tested`);
})

router.delete(`delete`, (req, res, next) => {
	res.send(`DELETE route tested`);
})

module.exports = router;