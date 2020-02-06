import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CookingToolsListComponent } from './cooking-tools-list/cooking-tools-list.component';
import { NgMaterialModule } from './ng-material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeCardComponent } from './recipe-list/recipe-card/recipe-card.component';
import { TruncatePipe } from './util/truncate.pipe';

const appRoutes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'cooking-tools', component: CookingToolsListComponent },
  { path: 'article-list', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    CookingToolsListComponent,
    HeaderComponent,
    FooterComponent,
    RecipeCardComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
    NgMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
