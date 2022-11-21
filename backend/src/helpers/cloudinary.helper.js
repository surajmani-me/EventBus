const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier');
// config cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const cloudinaryHelper = (imgData, folder) => {
    return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.uploader.upload_stream({
            folder,
            unique_filename: true,
        },(err, result) => {
            if (result) {
                resolve(result);
            } else {
               reject(error);
            }
        })
        streamifier.createReadStream(imgData).pipe(cld_upload_stream);
   });
}

module.exports = {cloudinaryHelper, cloudinary}
