import { it, describe, injectAsync, beforeEachProviders } from "angular2/testing";
import { Toolbar } from "./toolbar.component";
import { TestComponentBuilder } from "@angular/compiler/testing";

describe('Toolbar Component', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    // noinspection TypeScriptValidateTypes
    return tcb.createAsync(Toolbar).then((fixture) => {
      fixture.detectChanges();
    });
  }));
});
