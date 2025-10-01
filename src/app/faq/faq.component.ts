import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { QuestionsGroup } from '../types/QuestionsGroup';
import { AccordionModule } from 'primeng/accordion';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-faq',
  imports: [FooterComponent, AccordionModule, HeroComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  groups: QuestionsGroup[] = [
    {
      title: 'SOBRE LA BODA',
      items: [
        {
          question: '¿A qué hora debo llegar?',
          answer:
            ' Te recomendamos llegar al menos 15 antes del inicio de la ceremonia para poder acomodarte con calma.',
        },
        {
          question: '¿Puedo llevar acompañante?',
          answer:
            ' Por favor revisa tu invitación. Si puedes llevar acompañante, verás su nombre o la indicación de "+1".',
        },
      ],
    },
    {
      title: 'VIAJE Y ALOJAMIENTO',
      items: [
        {
          question: '¿Qué aeropuerto es el más cercano?',
          answer:
            'El aeropuerto más cercano es el Aeropuerto Internacional Ernesto Cortissoz (BAQ) en Barranquilla.',
        },
        {
          question: '¿Necesito vacunas para entrar a Colombia?',
          answer:
            'Actualmente no se exige ninguna vacuna obligatoria para entrar al país, pero te recomendamos consultar con la embajada o página oficial de migración por si hay actualizaciones',
        },
      ],
    },
    {
      title: 'Confirmación de asistencia',
      items: [
        {
          question: '¿Cómo confirmo mi asistencia?',
          answer:
            'Puedes confirmar directamente desde esta web, en la sección “RSVP”.',
        },
        {
          question: '¿Qué hago si necesito cambiar mi respuesta?',
          answer:
            'Si ya respondiste y necesitas hacer un cambio, puedes escribirnos directamente a',
          email: 'adrypuente0109@gmail.com',
        },
      ],
    },
  ];
}
