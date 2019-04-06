import { NgModule } from '@angular/core';

import { JhipsterTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterTestSharedCommonModule {}
