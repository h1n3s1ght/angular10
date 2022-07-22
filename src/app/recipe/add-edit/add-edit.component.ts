import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() 
  rec:any;
  RecipeId:any;
  RecipeName:any;

  ngOnInit(): void {
    this.RecipeId=this.rec.RecipeId;
    this.RecipeName=this.rec.RecipeName;
  }

  addRecipe(){
    var val = { RecipeId:this.RecipeId, RecipeName:this.RecipeName};
    this.service.addRecipe(val).subscribe(res=>{
      alert(res.toString());
  });
  }

  updateRecipe(){
    var val = { RecipeId:this.RecipeId, RecipeName:this.RecipeName};
        this.service.updateRecipe(val).subscribe(res=>{
          alert(res.toString());
      });
  }

}
