import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @ViewChild("destaquesPanel") destaquesPanel : any;
  @ViewChild("promocoesPanel") promocoesPanel : any;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  panelAsButtonClick(panelName: string) {
    //do stuff
    if (panelName === 'destaques') {
      this.destaquesPanel.close();
      console.log("abre destaques");
    }

    if (panelName === 'promocoes') {
      this.promocoesPanel.close();
      console.log("abre promocoes");
    }
  }
}
