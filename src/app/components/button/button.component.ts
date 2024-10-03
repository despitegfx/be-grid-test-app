import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input()
    label?: string;
    @Input()
    type?: string;
    @Input()
    color?: string;
    @Input()
    disabledButton?: boolean | false;
    @Input()
    hideButton?: boolean | false;
    @Input()
    rowData: any;

    @Output()
    btnClick: EventEmitter<any> = new EventEmitter<any>();

    actionClick(action?: string) {
      this.btnClick.emit({row: this.rowData, action: action})
    }
}
