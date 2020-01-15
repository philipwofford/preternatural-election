const mongoose = require(`mongoose`);

const schemas = {
	"shoppingList": mongoose.Schema({
		itemName: {
			type: String,
			required: true
		},
		itemQuantity: {
			type: Number,
			require: true
		},
		itemBought: {
			type: Boolean,
			required: true
		}
	})
}

const item = module.exports = mongoose.model(`item`, schemas.shoppingList);