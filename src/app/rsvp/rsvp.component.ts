import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../form.service';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { IconComponent } from '../icon/icon.component';

declare let gtag: Function;

@Component({
  selector: 'app-rsvp',
  imports: [
    ButtonComponent,
    FooterComponent,
    ReactiveFormsModule,
    IconComponent,
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent {
  @ViewChild('sheet') sheet!: ElementRef;

  formulario: FormGroup;
  done = false;
  loading = false;
  error = false;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formulario = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      attend: ['', Validators.required],
    });
  }

  scrollToSheet() {
    this.sheet.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onclick() {
    this.error = false;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      // Puedes marcar todos los campos como "touched" para que se muestren los errores
      this.formulario.markAllAsTouched();
      alert('Por favor completa todos los campos requeridos correctamente');
      return; // Sale sin enviar el formulario
    }

    const datos = this.formulario.value;

    this.loading = true;

    this.scrollToSheet();

    this.formService.enviarFormulario(datos).subscribe({
      next: () => {
        gtag('event', 'form_success', {
          event_category: 'RSVP enviado',
        });
        this.loading = false;
        this.done = true;
      },
      error: (err) => {
        gtag('event', 'form_error', {
          event_category: 'RSVP error',
        });
        console.error('Error al enviar', err);
        this.loading = false;
        this.error = true;
      },
    });
  }
}
