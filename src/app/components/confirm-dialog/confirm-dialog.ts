import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.scss',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {

  productName = input.required<string>();
  confirm = output<void>();
  cancel = output<void>();

  emitConfirm() {
    this.confirm.emit();
  }

  emitCancel() {
    this.cancel.emit();
  }
}
