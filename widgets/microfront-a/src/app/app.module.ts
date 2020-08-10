import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {}
}
