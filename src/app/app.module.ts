import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatSnackBarModule, MatAutocompleteModule} from '@angular/material';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { WINDOW_PROVIDERS } from './window.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TestimonialsCarouselComponent } from './testimonials-carousel/testimonials-carousel.component';

import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideshowComponent,
    FormComponent,
    TestimonialsCarouselComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SlideshowModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MDBBootstrapModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
