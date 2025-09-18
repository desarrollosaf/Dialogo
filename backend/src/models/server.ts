import express, {Application} from 'express'
import cors from 'cors'
import path from 'path';
import routesCorreo from '../routes/correo';


class Server {

    private app: Application
    private port: string


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3005';
        this.midlewares();
        this.router();
        this.DBconnetc();
        this.listen();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicación se esta corriendo exitosamente en el puerto => "+ this.port)
        })
    }

    router(){
        this.app.use(routesCorreo);
    }



    midlewares(){
        //Parseo BOdy
        this.app.use(express.json())
        this.app.use(cors({
           origin: '*'}));
        this.app.use('/storage', express.static(path.join(process.cwd(), 'storage')));
        this.app.use('/pdfs', express.static(path.join(process.cwd(), 'public/pdfs')));
    }

    async DBconnetc(){
        try {
            console.log("Conexion de DB exitoso");

        } catch (error) {
            console.log("Conexion de DB errorena => "+error);

        }
    }


}


export default Server
