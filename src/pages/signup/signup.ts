import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['Franciole', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['franciole.adim@gmail.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['12345678901', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Logradouro', [Validators.required]],
      numero: ['123', [Validators.required]],
      complemento: ['complemento', []],
      bairro: ['bairro', []],
      cep: ['12345678', [Validators.required]],
      telefone1: ['11 911112222', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    })
  }


  signupUser() {
    console.log("Passou")
  }
}
