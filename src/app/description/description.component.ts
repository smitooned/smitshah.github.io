import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  @Input() btnType: any;


  details:any={
    header:'',
    imgsrc:'',
    description:{
      header:'',
      first:{},
      second:{},
      third:{}
    }
  };

  covidBox:any= {
      header:'Gift a mango box to your loved ones this summer',
      imgsrc:'../assets/descriptionPhoto.png',
      description:{
        header:'Box includes :',
        first:'6 Alphonso Mangoes',
        second:{
          a:'Face Shield',
          b:'Mask and gloves',
          c:'Sanitizer'
        },
        third:'100rs donated to PM cares fund'
      }
  };
    mangoesForYou:any= {
      header:'Devgad Alphonso MAngoes',
      imgsrc:'../assets/descriptionPhoto.png',
      description:{
        header:'Available in 3 sizes :',
        first:'A1',
        second:{
          a:'',
          b:'',
          c:''
        },
        third:''
      }
  };
    bulkOrder:any= {
      header:'',
      imgsrc:'',
      description:{
        header:'',
        first:'',
        second:{
          a:'',
          b:'',
          c:''
        },
        third:''
      }
  };

  ngOnInit(): void {
    this.details=this.covidBox;
  }

  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    console.log(changes.btnType);
    this.changeView(this.btnType);
  }

  changeView(btnType:any){
    if(btnType=='covidBox'){
      this.details=this.covidBox;
    }else if(btnType=='mangoesForYou'){
      this.details=this.mangoesForYou;
    }else if(btnType=='bulkOrder'){
      this.details=this.bulkOrder;
    }
  }
}
