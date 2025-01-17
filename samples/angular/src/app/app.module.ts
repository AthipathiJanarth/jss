import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MetaModule } from '@ngx-meta/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { JssContextService } from './jss-context.service';
import { AppComponentsModule } from './components/app-components.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JssTranslationClientLoaderService } from './i18n/jss-translation-client-loader.service';
import { JssTranslationLoaderService } from './i18n/jss-translation-loader.service';
import { GraphQLModule } from './jss-graphql.module';
import { JssDataFetcherService } from './jss-data-fetcher.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { JobBannerComponent } from './components/job-banner/job-banner.component';
import { FindjobComponent } from './components/findjob/findjob.component';
import { GlobalnavigationComponent } from './components/globalnavigation/globalnavigation.component';
import { SubmenunavigationComponent } from './components/submenunavigation/submenunavigation.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { FeaturelistComponent } from './components/featurelist/featurelist.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    // withServerTransition is needed to enable universal rendering
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserTransferStateModule,
    FormsModule, ReactiveFormsModule ,
    HttpClientModule,
    GraphQLModule,
    MetaModule.forRoot(),
    RoutingModule,
    JssModule.withComponents([
      { name: 'jobs', type: JobsComponent },
      { name: 'ContentBlock', type: ContentBlockComponent },
      { name: 'JobBanner', type: JobBannerComponent },
      { name: 'Findjob', type: FindjobComponent },
      { name: 'Globalnavigation', type: GlobalnavigationComponent },
      { name: 'Submenunavigation', type: SubmenunavigationComponent },
      { name: 'Latestnews', type: LatestnewsComponent },
      { name: 'Featurelist', type: FeaturelistComponent },
      { name: 'Socialmedia', type: SocialmediaComponent},
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new JssTranslationClientLoaderService(new JssTranslationLoaderService(http)),
        deps: [HttpClient, TransferState]
      }
    }),
    AppComponentsModule,
  ],
  providers: [
    JssContextService,
    JssDataFetcherService,
    // IMPORTANT: you must set the base href with this token, not a <base> tag in the HTML.
    // the Sitecore Experience Editor will not work correctly when a base tag is used.
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
