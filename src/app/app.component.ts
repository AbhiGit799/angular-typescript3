import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Color } from './color';
import { Direction } from './direction';

import { Employee } from './employee';
import { MessageService } from './message.service';
import { Num } from './num';
import { PersonService } from './person.service';
import { StudentClass } from './studentclass';

interface emp {
  Id: number;
  Name: string;
}

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,

  viewProviders: [Employee, Abc],

  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myapp';

  empObj: emp; //Here, emp is interface

  empObjArray: emp[];

  empObjAny: any[];

  MyColor: Color; //Here, color is enum

  bestColor: Color;

  constructor() {}

  ngOnInit() {

    this.empObj = {
      Id: 101,
      Name: 'Ajeet',
    };

    this.empObjArray = [
      { Id: 101, Name: 'Ajeet' },
      { Id: 102, Name: 'Chandan' },
      { Id: 103, Name: 'Pawan' },
      { Id: 104, Name: 'Samir' },
    ];

    this.MyColor = Color.red;

     console.log(`Value of MyColor enum = ${this.MyColor}`);

    this.printData(50);

    this.fun(88);

    console.log("this.sum(10,20)--->"+this.sum(10,20));

  //  console.log(this.sum(10, "Ajeet"));  //This will give error.

   console.log("this.show<number>(10)--->"+this.show<number>(10));

   console.log("this.show<string>('19')------>"+this.show<string>("19"));

   console.log("this.show<boolean>(true)---->"+this.show<boolean>(true));

   this.sumtype<number,number>(10,20);

   this.sumtype<number,string>(50,"60");

   this.ifExample();

   this.ExWhilDoWhile();

   this.SwitchCaseFun();


  } //ngOninit ends here.

  printData(arg: number) {
    console.log(`printData() = ${arg}`);
  }
  
  //-------------------------------------------------->Arrow function

  fun = (arg: number) => {
    //Arrow function
    console.log(`Arrow function fun = ${arg}`);
  };

  sum = function(x:number,y:number)
  {
    return x+y;
  }

  name = "Ajeet";

  show<T>(arg: T): T {
    return arg;
  }
   
  sumtype<T1,T2>(x:T1,y:T2)
  {
    console.log("Sum type x = " + x + typeof x);
    console.log("Sum type y = "+ y + typeof y);
  }


  ifExample()
  {
    console.log("\n");
    console.log("if-else example");
    
    
    if(true)
    {
      console.log("true");
    }

    if(false)
    {
      console.log("false");
    }

    if(Number(1) == Number(2))
    {
      console.log("false");
    }

    if(false)
    {
      console.log("false");
    }
    else{
      console.log("else true");
    }

    if(this.name==="Chandan")
    {
      console.log(this.name);
    }
    else if (this.name==="Ajeet")
    {
      console.log(this.name);
    }
    else if(this.name=="Pawan")
    {
      console.log(this.name);
    }
    else{
      console.log("No Match");
    }


    // if(1)
    // {
    //   console.log("Amar");
    // }

     if(-1)
     {
      console.log("if -1 Good Printed");      //Output = if -1 Good Printed
     }else{
      console.log("else -1 Tom");
     }

    // if(0)
    // {
    //   console.log("Prem");
    // }
    // else{
    //   console.log("0 Chopra");
    // }

    let x=100, y=20;
    if(x>y)
    {
      console.log("X is greater");
    }
    else{
      console.log("y is greater");
    }

   console.log(x>y?"?: X is greater Y":"?: Y is greater");

  } // ifExample() Ends here.



  ExWhilDoWhile()
  {
    console.log("\n");
    console.log("While And Do-While");

    let i:number=10;
    while(i<=20)
    {
      console.log(i);
      i++;
    }

    let ii:number=10;
    do{
      console.log(ii);
      ii++;
    }while(ii<=20)

    //----------------------------------->Below loop execute atleast once.
    // let i:number=100;
    // do
    // {
    //   console.log(i);
    // }while(i<=20);

    //===============================>Below loop will not execute
    // let i:number=100;
    // while(i<=20)
    // {
    //   console.log(i);
    //   i++;
    // }


  } // ExWhilDoWhile() Ends here.


  SwitchCaseFun()
  {
    let day:string="13";

    switch(day)
    {
      case "0":
        console.log("Sunday");
        break;
      case "1":
        console.log("Monday");
      break;
      case "2":
        console.log("Tuesday");
        break;
      case "3":
        console.log("Wednesday");
        break;
      case "4":
        console.log("Thursday");
        break;
      case "5":
        console.log("Friday");
      break;
      case "6":
        console.log("Saturday");
      break;
      default:
        console.log("No Match found.");
    }

  }


}















