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
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddUser } from 'shared/actions/user.action';
import { User } from 'shared/models/user';
import { UserState } from 'shared/states/user-state';
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

  userStore$: Observable<User>;
  submitted: boolean = false;
  nbSubmit: number = 0;

  subscribe: Subscription | undefined;

  constructor(
    private userService: ClientServiceService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.user = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        addresses: [[], Validators.required],
        postalCode: ['', Validators.required],
        tel: [
          '',
          [Validators.required, Validators.pattern(/^(\d{3})(\d{3})(\d{4})$/)],
        ],
        mail: ['', [Validators.required, Validators.email]],
        civ: ['', Validators.required],
        login: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      { Validators: this.checkPasswords }
    );
    this.userStore$ = this.store.select(UserState.getUser);
    //On set à nouveau le user en fonction du state mais ... ça ne fonctionne pas
    this.subscribe = this.userStore$.pipe().subscribe((data) => {
      this.user.setValue(data);
    });
  }

  ngOnDestoy(): void {
    if (this.subscribe) this.subscribe.unsubscribe();
  }

  ngOnInit(): void {}
  user = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    addresses: new FormControl(),
    postalCode: new FormControl(),
    tel: new FormControl(),
    mail: new FormControl(),
    civ: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });

  adressChangedHandler(addresses: string[]) {
    this.user.setValue({ ...this.user.value, addresses });
  }

  addUser() {
    this.store.dispatch(new AddUser(this.user.value));
  }

  submit() {
    this.nbSubmit++;
    this.addUser();
  }
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
