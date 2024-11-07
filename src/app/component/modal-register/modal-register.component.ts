import { Component, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

interface FormRegister {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {
  hide = signal(true);
  private validateSamePassword(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.parent?.get('password');
    const confirmPassword = control.parent?.get('confirmPassword');
    return password?.value == confirmPassword?.value ? null : { notSame: true };
  }
  public formRegister: FormGroup<FormRegister>;
  constructor(private fb: FormBuilder) {
    this.formRegister = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', (c: AbstractControl) =>
        Validators.required(c)
      ),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.validateSamePassword,
      ]),
    });
  }

  ngOnInit(): void {
    this.formRegister.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
