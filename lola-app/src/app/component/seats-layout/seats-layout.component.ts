import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { seatsFormation } from '../../app.component';
import { LolaService } from '../../../services/lola.service';

// Model for the seat chart
export class seatsFormation {
  totalRows: Number;
  seatsPerRow: Number;
}

// export class seatModel {
//   rows: Number;
//   seat: String;
// }

@Component({
  selector: 'app-seats-layout',
  templateUrl: './seats-layout.component.html',
  styleUrls: ['./seats-layout.component.css']
})
export class SeatsLayoutComponent implements OnInit {
  // @Input() seatsFormation:seatsFormation;

  // Main information for the model
  seatsFormation: seatsFormation = {
    totalRows: 10,
    seatsPerRow: 5
  }

  rows: any[];

  seats: any[]

  constructor(
    public service: LolaService
  ) { }

  ngOnInit() {
    this.service.getSeat()
      .subscribe((data: any) => {
        this.seats = data as any[];
        // console.log(this.seats)
      });

  /**
  * Declare the necessary variables
  * use a for loop to iterate through the length of the totalrows and seatsperrow
  * Push the data in a row
  * clear the row and restart the process
  */

     let rows = new Array(); // Rows in the seat
     let seatsInARow = new Array();
     let seatLetter; // Gets the 

         for (let row = 0; row<this.seatsFormation.totalRows; row++) {
           for (let seats = 0; seats<this.seatsFormation.seatsPerRow; seats++) {
             seatsInARow.push((row + 1));
           }
           rows.push(seatsInARow);
           console.log(seatsInARow)
           seatsInARow = new Array();
         }

     this.rows = rows;
    }
  }