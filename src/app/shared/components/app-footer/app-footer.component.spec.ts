import { it, describe, injectAsync, beforeEachProviders } from "angular2/testing";
import { AppFooter } from "./app-footer.component";
import { TestComponentBuilder } from "@angular/compiler/testing";

describe('AppFooter Component', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(<any>AppFooter).then((fixture) => {
      fixture.detectChanges();
    });
  }));
});
