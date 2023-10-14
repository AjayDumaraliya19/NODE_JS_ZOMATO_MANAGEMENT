const { restaurantService } = require("../services");

/**create restaurant */
const createRestaurant = async (req, res) => {
    try {
        const reqBody = req.body;
        const restaurant = await restaurantService.createRestaurant(reqBody);

        if (!restaurant) {
            throw new Error("Restaurant not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant created !",
            data: restaurant
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get restaurant list */
const getRestaurantList = async (req, res) => {
    try {
        const getList = await restaurantService.getRestaurantList();
        if (!getList) {
            throw new Error("Restaurant not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get restaurant list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get restaurant details by id*/
const getRestaurantDetails = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const getDetails = await restaurantService.getRestaurantById(restaurantId);

        if (!getDetails) {
            throw new Error("Restaurant not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**restaurant details update by id */
const updateRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurantExist = await restaurantService.getRestaurantById(restaurantId);

        if (!restaurantExist) {
            throw new Error("Restaurant not found !");
        }

        await restaurantService.updateRestaurant(restaurantId, req.body);

        res.status(200).json({
            success: true,
            message: "Restaurant details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete restaurant */
const deleteRestaurant = async (req, res) => {
    try {
        const restaurantExists = await restaurantService.getRestaurantById(req.params.restaurantId);
        if (!restaurantExists) {
            throw new Error("Restaurant not found !");
        }

        await restaurantService.deleteRestaurant(req.params.restaurantId);

        res.status(200).json({
            success: true,
            message: "Restaurant deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createRestaurant,
    getRestaurantList,
    getRestaurantDetails,
    updateRestaurant,
    deleteRestaurant
}