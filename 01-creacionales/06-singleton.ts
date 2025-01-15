/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


// * Ejemplo patron Singleton  

import { COLORS } from '../helpers/colors.ts';


class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if ( !DragonBalls.instance ) {
            DragonBalls.instance = new DragonBalls();
            console.log( "Las esferas del dragón han sido creadas" );
        }
        return DragonBalls.instance;
    }


    collectBall(): void {
        if ( this.ballsCollected < 7 ) {
            this.ballsCollected++;
            console.log( `Total de esferas del dragón encontradas: %c${ this.ballsCollected }`, COLORS.orange );
            return;
        }

        console.log( "%cYa se han recolectado las 7 esferas del dragón!", COLORS.orange );
        console.log( "Di las palabras mágicas para invocar a %cShen Long", COLORS.green );
    }

    summonShenLong() {
        if ( this.ballsCollected === 7 ) {
            console.log( "%c¡Sal de ahí Shen Long y cumple mi deseo!", COLORS.orange );
            this.ballsCollected = 0;
            console.log( "%cTu deseo ha sido cumplido...", COLORS.green );
            return;
        }

        console.log( `Aún faltan ${ 7 - this.ballsCollected } esferas del dragón...` );
    }
}

function main() {
    const gokuDragonBalls = DragonBalls.getInstance();
    gokuDragonBalls.collectBall();// 1
    gokuDragonBalls.collectBall();// 2
    gokuDragonBalls.collectBall();// 3
    gokuDragonBalls.summonShenLong();

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();// 4
    vegetaDragonBalls.collectBall();// 5
    vegetaDragonBalls.collectBall();// 6
    vegetaDragonBalls.collectBall();// 7

    gokuDragonBalls.summonShenLong();

    vegetaDragonBalls.summonShenLong();





}

main();



