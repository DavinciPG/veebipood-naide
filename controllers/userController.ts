import User from "../models/user"; 
import { Request, Response, Router } from "express";

const router: Router = Router();

router.post('/user', async (req: Request, res: Response) => {
    const data = new User({
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

router.get('/user', async (req: Request, res: Response) => {
    try{
        const data = await User.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error})
    }
})


router.put('/user/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result);
    }  catch(error){
        res.status(500).json({message: error})
    }
});

export default router;