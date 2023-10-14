const { menuItemsService } = require("../services");

/**create menuItems */
const createMenuItems = async (req, res) => {
    try {
        const reqBody = req.body;
        const menuItems = await menuItemsService.createMenuItems(reqBody);

        if (!menuItems) {
            throw new Error("Menu items not found !");
        }

        res.status(200).json({
            success: true,
            message: "Menu items created !",
            data: menuItems
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get menuItems list */
const getMenuItemsList = async (req, res) => {
    try {
        const getList = await menuItemsService.getMenuItemsList();
        if (!getList) {
            throw new Error("Menu items not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get menu items list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get menuItems details by id*/
const getMenuItemsDetails = async (req, res) => {
    try {
        const menuItemsId = req.params.menuItemsId;
        const getDetails = await menuItemsService.getMenuItemsById(menuItemsId);

        if (!getDetails) {
            throw new Error("Menu items not found !");
        }

        res.status(200).json({
            success: true,
            message: "menuItems details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**menuItems details update by id */
const updateMenuItems = async (req, res) => {
    try {
        const menuItemsId = req.params.menuItemsId;
        const menuItemsExist = await menuItemsService.getMenuItemsById(menuItemsId);

        if (!menuItemsExist) {
            throw new Error("Menu items not found !");
        }

        await menuItemsService.updateMenuItems(menuItemsId, req.body);

        res.status(200).json({
            success: true,
            message: "Menu items details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete menuItems */
const deleteMenuItems = async (req, res) => {
    try {
        const menuItemsExists = await menuItemsService.getMenuItemsById(req.params.menuItemsId);
        if (!menuItemsExists) {
            throw new Error("Menu items not found !");
        }

        await menuItemsService.deleteMenuItems(req.params.menuItemsId);

        res.status(200).json({
            success: true,
            message: "Menu items deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createMenuItems,
    getMenuItemsList,
    getMenuItemsDetails,
    updateMenuItems,
    deleteMenuItems
}