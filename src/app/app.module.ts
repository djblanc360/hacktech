import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
        import { HeaderComponent } from './header/header.component';
        import { HomeComponent } from './home/home.component';
            import { SearchBoxComponent } from './home/search-box/search-box.component';
                import { CardComponent } from './home/search-box/card/card.component';
                    import { Card2Component } from './home/search-box/card2/card2.component';
        import { AlbumDetailComponent, SafePipe} from './album-detail/album-detail.component';
        import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// services
import {SpotifyService} from './spotify.service';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    CardComponent,
    HomeComponent,
    Card2Component,
    AlbumDetailComponent,
    PageNotFoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [SpotifyService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
