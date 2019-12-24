import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal-window',
  templateUrl: './delete-modal-window.component.html',
  styleUrls: ['./delete-modal-window.component.css']
})
export class DeleteModalWindowComponent {


  @Output() public confirmDelete = new EventEmitter();
  @Output() public cancelDelete = new EventEmitter();

  public confirmDeleting(): void {
    this.confirmDelete.emit();
  }

  public cancelDeleting(): void {
    this.cancelDelete.emit();
  }



  constructor() { }


}
