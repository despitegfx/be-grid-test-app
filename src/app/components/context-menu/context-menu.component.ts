import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContextMenuService} from "./context-menu.service";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent {
  @Input() x=0;
  @Input() y=0;
  @Input() toggleExport: boolean = true;

  @Output() excelExport: EventEmitter<any> = new EventEmitter<any>()
  @Output() csvExport: EventEmitter<any> = new EventEmitter<any>()

  constructor(public contextMenu: ContextMenuService) { }

  excelExportDownload() { this.excelExport.emit() }
  csvExportDownload() { this.csvExport.emit() }
}
