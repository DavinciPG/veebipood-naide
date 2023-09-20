import Document from "../models/document"; 
import { Request, Response, Router } from "express";

const router: Router = Router();

router.post('/document', async (req: Request, res: Response) => {
    const data = new Document({
        header: req.body.header,
        content: req.body.content
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error})
    }
})

router.get('/document', async (req: Request, res: Response) => {
    try{
        const data = await Document.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})


router.put('/document/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Document.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result);
    }  catch(error){
        res.status(500).json({message: error})
    }
});

export default router;