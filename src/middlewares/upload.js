const multer = require("multer");
const fs = require("fs");
const path = require("path");

/** Image upload using disk storage */
const storage__ = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "product_image" || "food_image" || "restaurant_image") {
      console.log(__dirname,'__dirname');
      fs.mkdirSync(path.join(__dirname, "../public/product_images"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/product_images"));
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("Only .png, .jpg and .jpeg format are allowed!");
    }
    cb(null, new Date().getTime() + ext);
  },
});

const upload = multer({storage: storage__});

module.exports = { upload };
