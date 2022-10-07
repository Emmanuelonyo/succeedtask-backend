const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    
  })

const upload = multer({storage: storage})

const type = upload.single('upl')

app.post('/api/v1/submit', type, (req, res) => {    
    console.log('Files: ', req.body);
    console.log('Files: ', req.file);
})



app.listen('3000')