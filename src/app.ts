import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import indexRoutes from './routes/index.routes';
import SiswaRoutes from './routes/siswa.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/siswa', SiswaRoutes);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
}