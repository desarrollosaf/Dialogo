import { Request, Response } from 'express';
import Correo from '../models/correos';



export const savecorreo = async (req: Request, res: Response): Promise<any> => {
    const  data  = req.body;
    console.log(data.correo)
  try {
   
    const existe = await Correo.findOne({ 
         where: { email: data.correo }
    });

    if (existe) {
        return res.json({ estatus: 400, error: 'existe un registro con el correo', correo: data.correo});
    }
    
    const correo = await Correo.create({
       email: data.correo,
     }); 

     return res.json({
      msg: `correo guardado`,
      estatus: 200
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocurrió un error al guardar el correo' });
  }
};
