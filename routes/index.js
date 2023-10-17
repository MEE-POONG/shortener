import express from 'express';
import Url from '../models/Url.js';
import path from 'path';
const __dirname = path.resolve(path.dirname('')); 
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


router.get('/:urlId', async (req, res) => {
    try {
        const url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
            await Url.updateOne(
                {
                    urlId: req.params.urlId,
                },
                { $inc: { clicks: 1 } }
            );
            return res.redirect(url.origUrl);
        } else res.status(404).json('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
});

export default router;