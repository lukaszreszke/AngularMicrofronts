import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldWidgetComponent } from './hello-world-widget/hello-world-widget.component';
import { createCustomElement } from '@angular/elements';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HelloWorldWidgetComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatGridListModule],
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
    customElements.define('widgets-hello-world', helloWorldWidget);
  }
}
