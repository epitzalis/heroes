import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelHeroe } from '../../models/heroe.model';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.scss']
})
export class HeroeFormComponent implements OnInit {

  @Input() heroe: ModelHeroe;
  @Output() save = new EventEmitter<ModelHeroe>();
  @Output() cancel = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.instanceForm();
  }

  public onCancel(): void {
    this.form.reset();
    this.router.navigate([`/${ROUTES.HOME}`]);
  }

  public onSave(): void {
    const heroe: ModelHeroe = this.form.getRawValue();
    this.save.emit(heroe);
  }

  private instanceForm(): FormGroup {
    return this.fb.group({
      id: [this.heroe === undefined ? '' : this.heroe?.id],
      name: [this.heroe === undefined ? '' : this.heroe.name, [Validators.required, Validators.maxLength(80)]],
    });
  }

}
