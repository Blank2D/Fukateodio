import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Result } from '../../../shared/interfaces/personaje.interface';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personajes-publicacione',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './personajes-publicacione.component.html',
  styleUrl: './personajes-publicacione.component.scss',
})
export class PersonajesPublicacioneComponent {
  personaje = input.required<Result>();
  descripcion: string = '';
  tipoPost: number = 0;

  faPlus = faPlus;
  faStar = faStar;

  ngOnInit(): void {
    this.tipoPost = seleccionarTipoPost();
    if (this.tipoPost === 1) {
      this.descripcion = obtenerDescripcionAleatoria();
    } else if (this.tipoPost === 3) {
      this.descripcion = obtenerDescripcionAlternativa();
    }
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  }
}

export const descripciones: string[] = [
  'Un día para recordar.',
  'La belleza de la naturaleza.',
  'Momentos inolvidables.',
  'Descubriendo nuevos lugares y viviendo experiencias únicas.',
  'Aventura y diversión en cada paso que damos.',
  'Explorando el mundo con ojos curiosos.',
  'Instantes mágicos que nos dejan sin aliento.',
  'La tranquilidad del paisaje es inspiradora.',
  'Una experiencia única que cambia nuestra perspectiva.',
  'Colores y formas increíbles que nos rodean.',
  'El arte de la vida cotidiana en su máxima expresión.',
  'Capturando la esencia del momento con una fotografía.',
  'Un vistazo a la simplicidad de lo cotidiano.',
  'La majestuosidad de lo ordinario nos sorprende.',
  'Rincones del mundo que aún no hemos descubierto.',
  'Perspectivas únicas de lugares comunes.',
  'Maravillas por descubrir a nuestro alrededor.',
  'Pequeños detalles que marcan la diferencia en nuestras vidas.',
  'Reflejos de la vida que nos hacen pensar.',
  'Belleza en cada esquina, donde menos lo esperamos.',
  'La naturaleza en su máximo esplendor es impresionante.',
  'Momentos de paz y serenidad que nos recargan de energía.',
  'La fuerza de la simplicidad en cada detalle.',
  'Paisajes que inspiran y nos llenan de asombro.',
  'Texturas y colores vivos que nos llaman la atención.',
  'Un paseo por la vida a través de imágenes.',
  'Caminos por recorrer que nos llevan a nuevas aventuras.',
  'Imágenes que hablan por sí mismas.',
  'El poder de una sonrisa en una fotografía.',
  'A través de los ojos de un aventurero se ven maravillas.',
  'Fragmentos de felicidad capturados en el momento justo.',
  'Un viaje sin fin lleno de sorpresas.',
  'Lugares que cuentan historias antiguas y modernas.',
  'Encuentros inesperados que enriquecen nuestras vidas.',
  'Sorpresas de la naturaleza en cada rincón.',
  'Rincones ocultos que esperan ser descubiertos.',
  'Maravillas cotidianas que a veces pasan desapercibidas.',
  'El encanto de lo simple y lo complejo.',
  'Tesoros escondidos en nuestro entorno.',
  'Historias en cada imagen que nos hablan de la vida.',
  'La magia de los colores en una fotografía.',
  'Un mundo lleno de vida y emociones.',
  'Detalles que enamoran y nos inspiran.',
  'Instantes congelados en el tiempo para siempre.',
  'La vida desde otra perspectiva es sorprendente.',
  'Pequeños milagros diarios que nos llenan de alegría.',
  'Un día en la vida de alguien especial.',
  'Viviendo el momento con intensidad y pasión.',
  'Cazadores de instantes y de emociones.',
  'Memorias capturadas en una imagen.',
  'Un viaje visual a través de paisajes impresionantes.',
  'La naturaleza en su esplendor nos deja sin palabras.',
  'Lugares que inspiran y nos llenan de paz.',
  'Momentos para recordar toda la vida.',
  'A través de la lente, el mundo se ve diferente.',
  'Un mundo por descubrir lleno de maravillas.',
  'Maravillas de la vida cotidiana capturadas en fotos.',
  'Paisajes que dejan sin aliento y nos inspiran.',
  'Explorando nuevas fronteras y descubriendo lo desconocido.',
  'La belleza de lo cotidiano en cada imagen.',
  'Instantes mágicos capturados para siempre.',
  'Vistas impresionantes que nos dejan boquiabiertos.',
  'La aventura de vivir cada día al máximo.',
  'Texturas que inspiran a mirar más de cerca.',
  'Colores de la vida en todo su esplendor.',
  'Instantes para atesorar en nuestra memoria.',
  'Recuerdos en imágenes que nos hacen sonreír.',
  'La naturaleza en todo su esplendor y belleza.',
  'La esencia de la vida capturada en una foto.',
  'Belleza en cada rincón de nuestro mundo.',
  'El arte de capturar momentos únicos.',
  'La vida en su máxima expresión a través de imágenes.',
  'Detalles que cuentan historias fascinantes.',
  'Maravillas de la naturaleza que nos asombran.',
  'Paisajes que inspiran paz y tranquilidad.',
  'Momentos de felicidad compartidos con los seres queridos.',
  'Explorando lo desconocido y encontrando belleza.',
  'Descubriendo la belleza oculta en lo cotidiano.',
  'Instantes únicos que nos marcan para siempre.',
  'Reflejos de la naturaleza en su máxima expresión.',
  'La magia de la fotografía nos transporta a otros mundos.',
  'Capturando el alma de los lugares más hermosos.',
  'Un viaje lleno de colores y emociones.',
  'Descubriendo nuevas perspectivas cada día.',
  'Belleza simple y pura en cada detalle.',
  'La tranquilidad del entorno nos llena de paz.',
  'Instantes que perduran en nuestra memoria.',
  'Colores que inspiran alegría y creatividad.',
  'La aventura de descubrir nuevos horizontes.',
  'Vistas que enamoran a primera vista.',
  'Paisajes que cuentan historias de generaciones.',
  'La magia de lo inesperado en cada foto.',
  'El encanto de cada día capturado en una imagen.',
  'Momentos para disfrutar y compartir.',
  'Explorando con la cámara en mano.',
  'La vida en imágenes que nos cuentan historias.',
  'Instantes capturados con amor y dedicación.',
  'El arte de la simplicidad en su máxima expresión.',
  'Fragmentos de la vida que nos inspiran.',
  'Viviendo cada momento como si fuera el último.',
];
export const descripcionesAlternativas: string[] = [
  "Hoy estuve pensando en las dimensiones paralelas y en cómo cada decisión que tomamos crea una nueva realidad. Es increíble cómo el multiverso está lleno de posibilidades infinitas. Solo me pregunto si alguna versión de mí hizo todo perfecto.",
  "No hay nada como una buena aventura interdimensional para recordar que la vida es un caos hermoso. A veces pienso que debería escribir un libro sobre todas las locuras que he visto. Quizás lo llame 'Las crónicas del caos'.",
  "La vida en la Tierra puede parecer mundana comparada con lo que hay allá afuera, pero hay algo reconfortante en la rutina diaria. Tal vez todos necesitamos un poco de normalidad entre las aventuras épicas.",
  "Hoy me encontré con una versión de mí mismo en otra dimensión. Fue raro, pero también reconfortante saber que, sin importar cuántas veces nos dividamos, siempre habrá un Rick dispuesto a salvar el día.",
  "Reflexionando sobre las últimas aventuras, me doy cuenta de que no siempre valoramos lo que tenemos hasta que lo perdemos. A veces, solo necesitamos una perspectiva diferente para apreciar la vida.",
  "El espacio es vasto y lleno de misterios, pero a veces, lo más fascinante es lo que llevamos dentro de nosotros. ¿Cuántas veces nos detenemos a explorar nuestra propia mente?",
  "La ciencia puede resolver muchos problemas, pero no todos. A veces, las respuestas que buscamos están más allá de la lógica y la razón. Quizás por eso es que las aventuras nunca se acaban.",
  "Hay un millón de formas de ver el universo y ninguna es incorrecta. Tal vez eso es lo que hace que la vida sea tan interesante. Cada día es una nueva oportunidad para descubrir algo inesperado.",
  "Las máquinas y los gadgets son geniales, pero nada supera la emoción de una aventura real. Nunca sabes qué vas a encontrar al doblar la esquina, y eso es lo que hace que la vida valga la pena.",
  "He visto muchas cosas en mis viajes, pero lo que más me sorprende es la capacidad humana para la compasión y la empatía. En el fondo, todos buscamos lo mismo: amor, comprensión y un propósito.",
  "Hoy me preguntaron qué es lo que más extraño cuando estoy en el espacio. Creo que es la conexión con las personas. No importa cuán lejos viaje, siempre hay algo que me recuerda a casa.",
  "A veces, las mejores aventuras no requieren viajes interdimensionales, solo un poco de curiosidad y disposición para explorar lo desconocido. La vida misma es una aventura, si sabemos cómo mirarla.",
  "El tiempo es relativo, y eso es algo que he aprendido de la manera difícil. No importa cuántas veces retrocedamos o avancemos, siempre hay algo nuevo que aprender.",
  "Cada dimensión tiene sus propias reglas y peculiaridades, pero lo que es universal es el deseo de buscar algo más. Tal vez eso es lo que nos hace verdaderamente humanos.",
  "Hoy, mientras miraba las estrellas, me di cuenta de que no importa cuán vasto sea el universo, siempre hay un lugar al que llamamos hogar. Y ese lugar es donde están nuestros seres queridos.",
  "Las aventuras pueden ser emocionantes, pero también agotadoras. A veces, solo necesitamos un momento para detenernos y disfrutar del presente. Después de todo, el ahora es todo lo que realmente tenemos.",
  "En mis viajes, he visto planetas de todos los colores y formas, pero nada se compara con la belleza de la Tierra. Tal vez porque es el único lugar donde realmente me siento en casa.",
  "He conocido a muchas criaturas extrañas y maravillosas, pero lo que más me sorprende es la capacidad humana para adaptarse y evolucionar. Somos una especie verdaderamente fascinante.",
  "Cada vez que regreso de una aventura, me doy cuenta de que he cambiado un poco. Tal vez eso es lo que significa realmente crecer: aceptar el cambio y aprender de cada experiencia.",
  "El universo es un lugar vasto y desconocido, pero lo que más me asombra es la capacidad humana para soñar y crear. Después de todo, todo lo que vemos fue alguna vez solo un sueño.",
  "Hoy me encontré pensando en todos los mundos que he visto y en cómo, a pesar de sus diferencias, todos buscan lo mismo: un poco de paz y felicidad. Tal vez eso es lo que nos une a todos.",
  "A veces, las aventuras más grandes no requieren viajes intergalácticos, solo un poco de valentía para enfrentar nuestros propios miedos. Después de todo, la verdadera aventura está dentro de nosotros.",
  "He visto muchas cosas en mis viajes, pero lo que más me sorprende es la capacidad humana para la esperanza. No importa cuán oscuros se pongan los tiempos, siempre encontramos una razón para seguir adelante.",
  "Hoy, mientras exploraba una nueva dimensión, me di cuenta de que no importa cuántos mundos visite, siempre hay algo nuevo que aprender. La vida es un viaje continuo de descubrimiento.",
  "Las aventuras pueden ser impredecibles, pero eso es lo que las hace emocionantes. Nunca sabes qué vas a encontrar, y eso es lo que hace que cada día sea una nueva oportunidad.",
  "El espacio puede ser un lugar solitario, pero también es un recordatorio de lo vasto y maravilloso que es el universo. Cada estrella es una oportunidad para soñar y explorar.",
  "A veces, las mejores lecciones vienen de los lugares más inesperados. En mis viajes, he aprendido que la sabiduría puede encontrarse en cualquier rincón del universo.",
  "Hoy me encontré pensando en el propósito de la vida y en cómo cada uno de nosotros tiene su propio camino. Tal vez la clave es simplemente seguir adelante, sin importar los obstáculos.",
  "Las aventuras pueden ser agotadoras, pero también son una oportunidad para crecer y aprender. Cada desafío es una oportunidad para demostrar de qué estamos hechos.",
  "He visto muchas cosas en mis viajes, pero lo que más me sorprende es la capacidad humana para el amor. No importa cuán lejos vayamos, siempre buscamos esa conexión especial.",
  "El universo es un lugar lleno de maravillas, pero lo que más me asombra es la capacidad humana para la creatividad. Después de todo, todo lo que vemos fue alguna vez solo una idea en la mente de alguien."
];

function obtenerDescripcionAlternativa(): string {
  const indiceAleatorio = Math.floor(
    Math.random() * descripcionesAlternativas.length
  );
  return descripcionesAlternativas[indiceAleatorio];
}
function obtenerDescripcionAleatoria(): string {
  const indiceAleatorio = Math.floor(Math.random() * descripciones.length);
  return descripciones[indiceAleatorio];
}

function seleccionarTipoPost(): number {
  return Math.floor(Math.random() * 3) + 1;
}
