const multer = require('multer');
const { cloudinaryHelper } = require('../helpers/cloudinary.helper');

const storage = multer.memoryStorage();
const parser = new multer({ storage: storage });

const uploadSv = async (imgData, data) => {
    
    if(!data){
        const data = await cloudinaryHelper(imgData.buffer, 'images')
        return data.secure_url
    }

    else{
        if(data.type === 'organisation'){
            const data = await cloudinaryHelper(imgData.buffer, 'organisations')
            return data.secure_url
        }
        else if(data.type === 'user'){
            const data = await cloudinaryHelper(imgData.buffer, 'users')
            return data.secure_url
        }
        else if(data.type === 'event'){
            const data = await cloudinaryHelper(imgData.buffer, 'events')
            return data.secure_url
        }
        else{
            const data = await cloudinaryHelper(imgData.buffer, 'others')
            return data.secure_url
        }        
    }
}

module.exports = {
    uploadSv,
    parser
}