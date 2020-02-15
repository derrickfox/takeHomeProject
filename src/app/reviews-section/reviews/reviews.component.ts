import { Component, OnInit, Input } from '@angular/core';
import { Review } from './review.model';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
	@Input() review: Review;

	constructor() {

	}

	ngOnInit() {

	}

}
