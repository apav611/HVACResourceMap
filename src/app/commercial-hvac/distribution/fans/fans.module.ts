import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EemsComponent } from './eems/eems.component';

import { FansRoutingModule } from './fans-routing.module';
import { FansComponent } from './fans.component';
import { OperationComponent } from './operation/operation.component';
import { ProcureComponent } from './procure/procure.component';
import { ToolsComponent } from './tools/tools.component';
import { TuneComponent } from './tune/tune.component';
import { TypesComponent } from './types/types.component';
import { CasesComponent } from './cases/cases.component';


@NgModule({
  declarations: [
    FansComponent,
    TypesComponent,
    EemsComponent,
    OperationComponent,
    ToolsComponent,
    ProcureComponent,
    TuneComponent,
    CasesComponent
  ],
  imports: [
    CommonModule,
    FansRoutingModule,
    SharedModule
  ]
})
export class FansModule {
}
