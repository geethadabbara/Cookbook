import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from '../recipes.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Observable, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy {

  @Input() recipe: Recipe;
  subscription: Subscription;
  constructor(private recipeService: RecipesService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log('recipe -', this.recipe);
  }

  onView(id: number) {
    // redirect to edit form
  }
  onDelete(id: number) {
    // ask for confirmation before delete
    this.subscription = this.recipeService.delete(id).subscribe(res => {
      console.log('delete response -', res);
    });
  }
  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.onDelete(id);
      }
    });
  }


}
