/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor( content: string, cursorPosition: number, unsavedChanges: boolean ) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;
  }

  copyWith( {
    content,
    cursorPosition,
    unsavedChanges
  }: Partial<CodeEditorState> ): CodeEditorState {

    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsavedChanges ?? this.unsavedChanges,
    );

  }

  displayState() {
    console.log( "\n%cEstado del Editor:", COLORS.green );
    console.log( `
            Content: ${ this.content }
            Cursor pos: ${ this.cursorPosition }
            Unsaved changes: ${ this.unsavedChanges }
            `);
  }

}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save( state: CodeEditorState ) {
    if ( this.currentIndex < this.history.length - 1 ) {
      this.history = this.history.slice( 0, this.currentIndex + 1 );
    }
    this.history.push( state );
    this.currentIndex++;
  }

  undo(): CodeEditorState | null {
    if ( this.currentIndex > 0 ) {
      this.currentIndex--;
      return this.history[ this.currentIndex ];
    }

    return null;
  }

  redo(): CodeEditorState | null {
    if ( this.currentIndex < this.history.length - 1 ) {
      this.currentIndex++;
      return this.history[ this.currentIndex ];
    }

    return null;
  }
}


function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState(
    "console.log('Hola Mundo!');",
    2,
    false,
  );
  history.save( editorState );

  console.log( "%c Estado inicial", COLORS.blue );
  editorState.displayState();


  editorState = editorState.copyWith( {
    content: "console.log('Hola Mundo!');\nconsole.log('Nueva Línea');",
    cursorPosition: 3,
    unsavedChanges: true
  } );
  history.save( editorState );

  console.log( "%cDespués del primer cambio", COLORS.blue );
  editorState.displayState();


  editorState = editorState.copyWith( {
    cursorPosition: 5
  } );
  history.save( editorState );

  console.log( "%cDespués de mover el cursor", COLORS.blue );
  editorState.displayState();



  editorState = history.undo()!;
  console.log( "%cDespués del undo", COLORS.blue );
  editorState.displayState();

  editorState = history.redo()!;
  console.log( "%cDespués del redo", COLORS.blue );
  editorState.displayState();

}

main();
