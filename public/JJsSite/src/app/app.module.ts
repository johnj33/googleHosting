import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    ModalModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
