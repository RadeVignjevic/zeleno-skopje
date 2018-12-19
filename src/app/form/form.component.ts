import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { Idea } from '../idea';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  cityControl = new FormControl();
  options: string[] = ['Skopje', 'Gostivar', 'Strumica', 'Bitola', 'Kavadarci'];
  filteredOptions: Observable<string[]>;
  public isAnonymous: boolean = false;

  addressForm = this.fb.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, Validators.required],
    city: [this.cityControl, Validators.required],
    email: [null, Validators.email],
    idea: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, private ideasService: IdeasService) {}

  ngOnInit(): void {
    this.filteredOptions = this.cityControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.snackBar.open("Your idea has been sent!", "Ok", {
      duration: 2000,
    });

    var idea: Idea = {
      title: this.addressForm.get('firstName').value + " " + this.addressForm.get('lastName').value,
      text: this.addressForm.get('idea').value,
      city: this.addressForm.get('city').value.value,
      upvotes: 0
    }
    if (this.isAnonymous) {
      idea.title = "Anonymous";
    }
    this.ideasService.addIdea(idea);
  
  }
}
