import { Component, OnInit, TemplateRef, Input } from "@angular/core";

@Component({
  selector: "template-projection",
  templateUrl: "./template-projection.component.html",
  styleUrls: ["./template-projection.component.css"]
})
export class TemplateProjectionComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
