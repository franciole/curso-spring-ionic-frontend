import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService
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
      telefone1: ['11 911111111', [Validators.required]],
      telefone2: ['11 922222222', []],
      telefone3: ['11 933333333', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]]
    })
  }

  ionViewDidLoad() {
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      },
        error => { }
      );
  }
  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      },
        error => { }
      );
  }

  signupUser() {
    console.log("Enviou o form.")
  }
}
