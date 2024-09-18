import { logger } from "../utils/logger";
import productModel from "../models/product.model";

export const getProductFromDB = async () => {
	return await productModel
		.find()
		.then((data) => {
			return data;
		})
		.catch((err) => {
			logger.info("Could not get data");
			logger.error(err);
		});
};
