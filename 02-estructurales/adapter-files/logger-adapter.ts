import { Logger } from 'jsr:@deno-library/logger';

<<<<<<< HEAD
// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
  file: string;

  writeLog: (msg: string) => void;
  writeWarning: (msg: string) => void;
  writeError: (msg: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

  writeLog(msg: string) {
    this.logger.info(`[${this.file} Log] ${msg}`);
  }

  writeWarning(msg: string) {
    this.logger.warn(`[${this.file} warning] %c${msg}`);
  }

  writeError(msg: string) {
    this.logger.error(`[${this.file} error] %c${msg}`);
  }
}
=======
interface ILoggerAdapter {
    file: string;

    writeLog( msg: string ): void;
    writeWarning( msg: string ): void;
    writeError( msg: string ): void;

}


export class DenoLoggerAdapter implements ILoggerAdapter {
    public file: string;

    private logger = new Logger();

    constructor( file: string ) {
        this.file = file;
    }


    writeLog( msg: string ): void {
        this.logger.info( `[ ${ this.file } info ] %c${ msg }` );
    }
    writeWarning( msg: string ): void {
        this.logger.warn( `[ ${ this.file } warning ] %c${ msg }` );
    }
    writeError( msg: string ): void {
        this.logger.error( `[ ${ this.file } error ] %c${ msg }` );
    }

}
>>>>>>> 02-estructurales-soluciones
