/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */


import { COLORS } from '../helpers/colors.ts';

interface NotificationChannel {
  send( message: string ): void;
}

class EmailChannel implements NotificationChannel {
  send( message: string ): void {
    console.log( `Enviando correo electrónico: ${ message }` );
  }
}

class SMSChannel implements NotificationChannel {
  send( message: string ): void {
    console.log( `Enviando SMS: ${ message }` );
  }
}

class PushNotificationChannel implements NotificationChannel {
  send( message: string ): void {
    console.log( `Enviando Push: ${ message }` );
  }
}

abstract class Notification {
  protected channels: NotificationChannel[];

  constructor( channels: NotificationChannel[] ) {
    this.channels = channels;
  }

  abstract addChannel( channel: NotificationChannel ): void;
  abstract notify( message: string ): void;
}


class AlertNotification extends Notification {
  override addChannel( channel: NotificationChannel ): void {
    this.channels.push( channel );
  }
  override notify( message: string ): void {
    console.log( "%cNotificación de alerta", COLORS.red );
    this.channels.forEach( ( channel ) => channel.send( message ) );
  }

}

function main() {
  const channels = [
    new EmailChannel(),
    new SMSChannel(),
    new PushNotificationChannel(),
    new PushNotificationChannel(),
    new PushNotificationChannel(),
    new EmailChannel(),
    new SMSChannel(),
  ];

  const alert = new AlertNotification( channels );
  alert.notify( "Algo paso..." );
}
main();
