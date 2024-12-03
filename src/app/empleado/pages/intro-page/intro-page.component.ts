import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule,MaterialModule],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent {

}
