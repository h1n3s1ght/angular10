import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-rec',
  templateUrl: './show-rec.component.html',
  styleUrls: ['./show-rec.component.css']
})
export class ShowRecComponent implements OnInit {

  constructor(private service:SharedService) { }

  RecipeList:any=[];

  ModalTitle:any;
  ActivateAddEditRecComp:boolean=false;
  rec:any;

  ngOnInit(): void {
    this.refreshRecList();
  }

  showClick(item:any){
    this.rec=item;
    this.ModalTitle= this.rec.RecipeName;
    this.ActivateAddEditRecComp=true;
  }

  addClick(){
    this.rec={
      RecipeId:0,
      RecipeName:""
    }
    this.ModalTitle= this.rec.RecipeName;
    this.ActivateAddEditRecComp=true;
  }

  editClick(item:any){
    this.rec=item;
    this.ModalTitle=this.rec.RecipeName;
    this.ActivateAddEditRecComp=true;
  }

  deleteClick(item:any){
    if(confirm(`You are sure you wish to delete ${item.RecipeName}??`)){this.service.deleteRecipe(item.RecipeId).subscribe(data=>{
      alert(data.toString());
      this.refreshRecList();
      window.location.reload();
    });}}

  closeClick(){
    this.ActivateAddEditRecComp=false;
    this.refreshRecList();
    window.location.reload();
  }

  refreshRecList(){
    this.service.getRecList().subscribe(data=>{
      this.RecipeList=data;
    });
  }

}
