import { Component, input} from '@angular/core';
import { Result } from '../../../shared/interfaces/personaje.interface';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-personajes-publicacione',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './personajes-publicacione.component.html',
  styleUrl: './personajes-publicacione.component.scss'
})
export class PersonajesPublicacioneComponent {
  personaje = input.required<Result>();
  descripcion: string = '';


  faPlus = faPlus;
  faStar = faStar;

  ngOnInit(): void {
    this.descripcion = obtenerDescripcionAleatoria();
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  }
  
}


export const descripciones: string[] = [
  "Un día para recordar.",
  "La belleza de la naturaleza.",
  "Momentos inolvidables.",
  "Descubriendo nuevos lugares y viviendo experiencias únicas.",
  "Aventura y diversión en cada paso que damos.",
  "Explorando el mundo con ojos curiosos.",
  "Instantes mágicos que nos dejan sin aliento.",
  "La tranquilidad del paisaje es inspiradora.",
  "Una experiencia única que cambia nuestra perspectiva.",
  "Colores y formas increíbles que nos rodean.",
  "El arte de la vida cotidiana en su máxima expresión.",
  "Capturando la esencia del momento con una fotografía.",
  "Un vistazo a la simplicidad de lo cotidiano.",
  "La majestuosidad de lo ordinario nos sorprende.",
  "Rincones del mundo que aún no hemos descubierto.",
  "Perspectivas únicas de lugares comunes.",
  "Maravillas por descubrir a nuestro alrededor.",
  "Pequeños detalles que marcan la diferencia en nuestras vidas.",
  "Reflejos de la vida que nos hacen pensar.",
  "Belleza en cada esquina, donde menos lo esperamos.",
  "La naturaleza en su máximo esplendor es impresionante.",
  "Momentos de paz y serenidad que nos recargan de energía.",
  "La fuerza de la simplicidad en cada detalle.",
  "Paisajes que inspiran y nos llenan de asombro.",
  "Texturas y colores vivos que nos llaman la atención.",
  "Un paseo por la vida a través de imágenes.",
  "Caminos por recorrer que nos llevan a nuevas aventuras.",
  "Imágenes que hablan por sí mismas.",
  "El poder de una sonrisa en una fotografía.",
  "A través de los ojos de un aventurero se ven maravillas.",
  "Fragmentos de felicidad capturados en el momento justo.",
  "Un viaje sin fin lleno de sorpresas.",
  "Lugares que cuentan historias antiguas y modernas.",
  "Encuentros inesperados que enriquecen nuestras vidas.",
  "Sorpresas de la naturaleza en cada rincón.",
  "Rincones ocultos que esperan ser descubiertos.",
  "Maravillas cotidianas que a veces pasan desapercibidas.",
  "El encanto de lo simple y lo complejo.",
  "Tesoros escondidos en nuestro entorno.",
  "Historias en cada imagen que nos hablan de la vida.",
  "La magia de los colores en una fotografía.",
  "Un mundo lleno de vida y emociones.",
  "Detalles que enamoran y nos inspiran.",
  "Instantes congelados en el tiempo para siempre.",
  "La vida desde otra perspectiva es sorprendente.",
  "Pequeños milagros diarios que nos llenan de alegría.",
  "Un día en la vida de alguien especial.",
  "Viviendo el momento con intensidad y pasión.",
  "Cazadores de instantes y de emociones.",
  "Memorias capturadas en una imagen.",
  "Un viaje visual a través de paisajes impresionantes.",
  "La naturaleza en su esplendor nos deja sin palabras.",
  "Lugares que inspiran y nos llenan de paz.",
  "Momentos para recordar toda la vida.",
  "A través de la lente, el mundo se ve diferente.",
  "Un mundo por descubrir lleno de maravillas.",
  "Maravillas de la vida cotidiana capturadas en fotos.",
  "Paisajes que dejan sin aliento y nos inspiran.",
  "Explorando nuevas fronteras y descubriendo lo desconocido.",
  "La belleza de lo cotidiano en cada imagen.",
  "Instantes mágicos capturados para siempre.",
  "Vistas impresionantes que nos dejan boquiabiertos.",
  "La aventura de vivir cada día al máximo.",
  "Texturas que inspiran a mirar más de cerca.",
  "Colores de la vida en todo su esplendor.",
  "Instantes para atesorar en nuestra memoria.",
  "Recuerdos en imágenes que nos hacen sonreír.",
  "La naturaleza en todo su esplendor y belleza.",
  "La esencia de la vida capturada en una foto.",
  "Belleza en cada rincón de nuestro mundo.",
  "El arte de capturar momentos únicos.",
  "La vida en su máxima expresión a través de imágenes.",
  "Detalles que cuentan historias fascinantes.",
  "Maravillas de la naturaleza que nos asombran.",
  "Paisajes que inspiran paz y tranquilidad.",
  "Momentos de felicidad compartidos con los seres queridos.",
  "Explorando lo desconocido y encontrando belleza.",
  "Descubriendo la belleza oculta en lo cotidiano.",
  "Instantes únicos que nos marcan para siempre.",
  "Reflejos de la naturaleza en su máxima expresión.",
  "La magia de la fotografía nos transporta a otros mundos.",
  "Capturando el alma de los lugares más hermosos.",
  "Un viaje lleno de colores y emociones.",
  "Descubriendo nuevas perspectivas cada día.",
  "Belleza simple y pura en cada detalle.",
  "La tranquilidad del entorno nos llena de paz.",
  "Instantes que perduran en nuestra memoria.",
  "Colores que inspiran alegría y creatividad.",
  "La aventura de descubrir nuevos horizontes.",
  "Vistas que enamoran a primera vista.",
  "Paisajes que cuentan historias de generaciones.",
  "La magia de lo inesperado en cada foto.",
  "El encanto de cada día capturado en una imagen.",
  "Momentos para disfrutar y compartir.",
  "Explorando con la cámara en mano.",
  "La vida en imágenes que nos cuentan historias.",
  "Instantes capturados con amor y dedicación.",
  "El arte de la simplicidad en su máxima expresión.",
  "Fragmentos de la vida que nos inspiran.",
  "Viviendo cada momento como si fuera el último."
];

function obtenerDescripcionAleatoria(): string {
  const indiceAleatorio = Math.floor(Math.random() * descripciones.length);
  return descripciones[indiceAleatorio];
}