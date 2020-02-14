import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-layer',
	templateUrl: './main-layer.component.html',
	styleUrls: ['./main-layer.component.scss']
})
export class MainLayerComponent implements OnInit {

	first_description: string;
	second_description: string;
	third_description: string;

	constructor() { }

	ngOnInit() {
		this.first_description = 'Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter.'
		this.second_description = 'With 300 grams of PrimaLoft ONE insulation, the Highline offers incredible heat retention while remaining form fitting and low volume--essentially all the warmth of a puffer jacket without all the puff. Its outer shell is made from a water-resistant Schoeller microfiber fabric that has been diagonally quilted, while its inside liner is made from a silky-soft microfiber ripstop nylon.'
		this.third_description = 'The Highline features a zipper garage to prevent a cold metal zipper from pressing against your neck, non-quilted side panels and underarms for a sleeker fit, and anchored bottom-hem adjusters for a snug fit. It has two uniquely designed 3-in-1 front pockets, which include a top-zippered entrance, a drop pocket with donut snap, and a side hand-warmer. Additional storage can be found in its exterior chest pocket and two interior zippered pockets.'
	}

}
