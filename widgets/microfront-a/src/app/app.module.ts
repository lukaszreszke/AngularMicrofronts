import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldWidgetComponent } from './hello-world-widget/hello-world-widget.component';

@NgModule({
  declarations: [HelloWorldWidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [HelloWorldWidgetComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const helloWorldWidget = createCustomElement(HelloWorldWidgetComponent, {
      injector: this.injector,
    });
  }
}
