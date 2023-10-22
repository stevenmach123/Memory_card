import { Component, OnInit,Input,ViewChild,EventEmitter } from '@angular/core';
import {PopoverController} from "@ionic/angular"
import {AbstractControl,FormControl,NgForm,ValidationErrors, ValidatorFn, Validators} from "@angular/forms"
import {Dashes,dash, myadd_attr, myadd_topic,myadd_whole,group_choose ,box,wood, FileHandle, check_attr,the_pos,skill_attrs,bullet} from "../classes"
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {

  constructor(private popover:PopoverController) { }
   student:dash
  @ViewChild('big') form: NgForm

  ngOnInit() {
    /*this.idForm.statusChanges.subscribe(e=>{
      console.log("id status",e)
    }) 
    
    this.idForm.valueChanges.subscribe(e=>{
      console.log("id value",e)
    })   */
  }
  ngAfterViewInit(){
    this.nameForm.setValue("")
    this.idForm.setValue("")

  }



  nameForm:FormControl  = new FormControl("",[Validators.required])
  idForm:FormControl  =new FormControl("", Validators.compose([Validators.required, this.forbibNum3] )  )
  bye(){
    this.popover.dismiss(this.student)
  }

  forbibNum2():ValidatorFn{
    return (val:AbstractControl):ValidationErrors =>{
      console.log("num ",val.value)
      if(!Number(val.value.trim())){
        console.log(" num",false)
         return {forbib:true}
      } 
      else{
        return null;
      }
    }
  }
  forbibNum3(fc:AbstractControl):ValidationErrors{ 
    if (!Number(fc.value.trim() )){
        return {forbib:true}
    }
    else{
      null
    }
  }


  doSubmit(letter:NgForm){
    
      if(letter.valid){
 
        //this.student.id = parseInt(letter.value.id)
        //this.student.name = letter.value.name
        this.student.name  = this.nameForm.value
        this.student.id = this.idForm.value

      } 

  }



}
