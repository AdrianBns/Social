import { messages } from './messages.model';
export class Persona{
  id: number;
  nombre: String;
  apellidos: Array<String>;
  edad: number;
  apodo?: String;
  imagen: String;
  imagenFondo: String;
  email: String;
  amigos: Array<Persona>;
  mensajes: Array<messages>;
}
