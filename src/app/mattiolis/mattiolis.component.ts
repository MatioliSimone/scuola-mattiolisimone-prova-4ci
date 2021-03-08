import { ifStmt } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mattiolis",
  templateUrl: "./mattiolis.component.html",
  styleUrls: ["./mattiolis.component.css"]
})
export class MattiolisComponent implements OnInit {
  colore: String;
  numero: number;
  divisore: number;
  moltiplicatore: number;
  constructor() {
    this.numero = 0;
    this.colore = "black";
    this.divisore = 1;
  }

  ngOnInit() {}

  Icrementa() {
    this.colore = "green";
    this.numero += 1;
  }

  decrementa() {
    this.colore = "red";
    if (this.numero > 0) this.numero -= 1;
  }

  Raddoppia() {
    this.colore = "blue";
    this.numero = this.numero * 2;
  }

  Dimezza() {
    this.colore = "purple";
    this.numero = this.numero / 2;
  }

  Dividi() {
    this.colore = "chocolate";
    this.numero = this.numero /  this.divisore; 
  }

  Moltiplica(){
    this.colore = "darkred";
    this.numero = this.numero * this.moltiplicatore;
  }

  Azzera(){
    this.numero = 0;
    this.colore = "black";
  }
}
