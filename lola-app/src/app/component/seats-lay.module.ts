import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsLayoutComponent } from './seats-layout/seats-layout.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SeatsLayoutComponent],
    exports: [SeatsLayoutComponent]
})

export class SeatsLayModule { }