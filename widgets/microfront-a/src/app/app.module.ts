import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldWidgetComponent } from './hello-world-widget/hello-world-widget.component';

@NgModule({
  declarations: [HelloWorldWidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {}
}
