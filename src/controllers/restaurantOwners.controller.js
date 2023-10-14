const { restaurantOwnersService } = require("../services");

/**create restaurantOwners */
const createRestaurantOwners = async (req, res) => {
    try {
        const reqBody = req.body;
        const restaurantOwners = await restaurantOwnersService.createRestaurantOwners(reqBody);

        if (!restaurantOwners) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant owners created !",
            data: restaurantOwners
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get restaurantOwners list */
const getRestaurantOwnersList = async (req, res) => {
    try {
        const getList = await restaurantOwnersService.getRestaurantOwnersList();
        if (!getList) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get restaurant owners list successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get restaurantOwners details by id*/
const getRestaurantOwnersDetails = async (req, res) => {
    try {
        const restaurantOwnersId = req.params.restaurantOwnersId;
        const getDetails = await restaurantOwnersService.getRestaurantOwnersById(restaurantOwnersId);

        if (!getDetails) {
            throw new Error("Restaurant owners not found !");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant owners details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**restaurantOwners details update by id */
const updateRestaurantOwners = async (req, res) => {
    try {
        const restaurantOwnersId = req.params.restaurantOwnersId;
        const restaurantOwnersExist = await restaurantOwnersService.getRestaurantOwnersById(restaurantOwnersId);

        if (!restaurantOwnersExist) {
            throw new Error("Restaurant owners not found !");
        }

        await restaurantOwnersService.updateRestaurantOwners(restaurantOwnersId, req.body);

        res.status(200).json({
            success: true,
            message: "Restaurant owners details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete restaurantOwners */
const deleteRestaurantOwners = async (req, res) => {
    try {
        const restaurantOwnersExists = await restaurantOwnersService.getRestaurantOwnersById(req.params.restaurantOwnersId);
        if (!restaurantOwnersExists) {
            throw new Error("Restaurant owners not found !");
        }

        await restaurantOwnersService.deleteRestaurantOwners(req.params.restaurantOwnersId);

        res.status(200).json({
            success: true,
            message: "restaurantOwners deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createRestaurantOwners,
    getRestaurantOwnersList,
    getRestaurantOwnersDetails,
    updateRestaurantOwners,
    deleteRestaurantOwners
}