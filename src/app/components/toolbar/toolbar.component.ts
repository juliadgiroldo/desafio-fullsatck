import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output () toggleSideNav: EventEmitter<void> = new EventEmitter<void>()

  onToggle(){
    this.toggleSideNav.emit()
  }

}


