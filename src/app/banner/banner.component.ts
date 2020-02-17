import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

	title: string;
	description: string[];
	imagePath: string;

	constructor() { }

	ngOnInit() {
		this.imagePath = '../../assets/image-assets/tough-mojo-jacket-img1.png';
		this.title = 'Tough Mojo Jacket';
		this.description = [
			'300 GRAMS OF PRIMALOFT ONE INSULATION',
			'SCHOELLER MICROFIBER SHELL',
			'DIAGONAL QUILTING',
			'MICROFIBER RIPSTOP LINER',
			'ZIPPER GARAGE AT COLLAR',
			'ANCHORED BOTTOM-HEM ADJUSTERS',
			'3-IN-1 FRONT POCKETS',
			'ZIPPERED CHEST POCKET',
			'TWO INTERIOR ZIPPERED POCKETS',
			'MADE IN THE PHILIPPINES'
		]
	}

}
