import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ClientServiceService } from './client-service.service';

//Non fonctionnel pour le moment ... malheureusement.
@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
  providers: [ClientServiceService],
})
export class UserCreationComponent implements OnInit {
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };
  constructor(
    private userService: ClientServiceService,
    private formeBuilder: FormBuilder
  ) {
    this.user = this.formeBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        address: ['', Validators.required],
        postalCode: ['', Validators.required],
        tel: [
          '',
          Validators.required,
          Validators.pattern(/^(\d{3})(\d{3})(\d{4})$/),
        ],
        mail: ['', Validators.required, Validators.email],
        civ: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      { Validators: this.checkPasswords }
    );
  }

  ngOnInit(): void {}
  user = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    postalCode: new FormControl(),
    tel: new FormControl(),
    mail: new FormControl(),
    civ: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });

  submitted: boolean = false;
  nbSubmit: number = 0;

  submit() {
    this.nbSubmit++;
    console.log("Il reste plus qu'à implémenter le onSubmit");
  }
  //input()
  //output() ==> Pour passer d'un composant à l'autre
}

//Ligne trouvée sur learnersBucket pour l'algo
@Pipe({
  name: 'phonePipe',
})
export class PhonePipe implements PipeTransform {
  transform(str: string) {
    let cleaned: string = ('' + str).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    return null;
  }
}
