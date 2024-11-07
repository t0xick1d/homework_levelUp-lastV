import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from './side-bar.component';
import { TableModule } from '../table/table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ModalLoginComponent } from '../component/modal-login/modal-login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalRegisterComponent } from '../component/modal-register/modal-register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SideBarComponent, ModalLoginComponent, ModalRegisterComponent],
  imports: [
    MatSidenavModule,
    TableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [SideBarComponent],
})
export class SideBarModule {}
