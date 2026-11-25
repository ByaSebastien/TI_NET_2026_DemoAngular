import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm-dialog',
  styleUrl: './confirm-dialog.scss',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {

  productName: InputSignal<string> = input.required<string>();
  confirm = output<void>();
  cancel = output<void>();

  emitConfirm() {
    this.confirm.emit();
  }

  emitCancel() {
    this.cancel.emit();
  }
}
