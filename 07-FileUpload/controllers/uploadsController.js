const { StatusCodes } = require('http-status-codes');
const path = require('path');
const CustomError = require('../errors');

const UploadProductImage = async (req, res) => {
  //check file exists or not
  if (!req.files) {
    throw new CustomError.BadRequestError('No file Uploaded');
  }
  let productImage = req.files.image;
  // check the format of images
  if (!productImage.mimetype.startswith('images')) {
    throw new CustomError.BadRequestError('Please Upload Image');
  }

  const maxSize = 1000;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1KB'
    );
  }
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  console.log(imagePath);
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  UploadProductImage,
};
