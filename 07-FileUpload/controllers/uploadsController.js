const { StatusCodes } = require('http-status-codes');

const path = require('path');

const UploadProductImage = async (req, res) => {
  let productImage = req.files.image;
  console.log(productImage);
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  console.log(imagePath);
  await productImage.mv(imagePath);
  return res.status(StatusCodes.OK).json({image:{src:`/uploads/${productImage.name}`}})

};

module.exports = {
  UploadProductImage,
};
