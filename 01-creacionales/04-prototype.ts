/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

// * Dato extra  
// * Cuando trabajas con editores gráficos( como herramientas de diseño ), puedes clonar elementos con sus propiedades predefinidas sin volver a configurar todo manualmente.

class Document {
    public title: string;
    public content: string;
    public author: string;

    constructor( title: string, content: string, author: string ) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    //Aplicando el patron
    clone(): Document {
        return new Document(
            this.title,
            this.content,
            this.author );
    }

    displayInfo() {
        console.log( `
            Title: ${ this.title }
            Content: ${ this.content }
            Author: ${ this.author }
            `);
    }
}

function main() {
    const document1 = new Document( 'Cotización', "500 Dólares", "Fernando" );

    console.log( { document1 } );
    document1.displayInfo();

    // const document2 = { ...document1 };
    const document2 = structuredClone( document1 );
    document2.title = "Nueva cotización";

    console.log( { document2 } );
    // document2.displayInfo();


    const document3 = document1.clone();
    document3.title = "Ejemplo de Prototype";

    console.log( { document3 } );
    // document3.displayInfo();
}

main();