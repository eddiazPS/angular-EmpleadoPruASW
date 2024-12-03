import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {






}
