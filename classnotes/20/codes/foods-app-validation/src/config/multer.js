const path = require('path');
const { randomBytes } = require('crypto');
const multer = require('multer');

const uploadPath = path.resolve(__dirname, '..', '..', 'public', 'imgs');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      file.key = `${randomBytes(16).toString('hex')}-${file.originalname}`;
      cb(null, file.key);
    },
  }),
};

module.exports = {
  // dest: uploadPath,
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
