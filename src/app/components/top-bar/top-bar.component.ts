import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
