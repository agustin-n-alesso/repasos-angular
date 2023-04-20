import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class MiServicioGlobal {

	private counter: number = 0;

	public returnCounter = () => this.counter;

	public incrementCounter = () => {
		this.counter++;
	};
	public decrementCounter = () => {
		this.counter--;
	}

	constructor(){}
}