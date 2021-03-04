import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TemplateProjectionComponent } from "./template-projection/template-projection.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TemplateProjectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
