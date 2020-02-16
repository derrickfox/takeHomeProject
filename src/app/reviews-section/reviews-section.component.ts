import { Component, OnInit } from '@angular/core';
import { ReviewsComponent } from './reviews/reviews.component';
import { Review } from './reviews/review.model';

@Component({
	selector: 'app-reviews-section',
	templateUrl: './reviews-section.component.html',
	styleUrls: ['./reviews-section.component.scss']
})
export class ReviewsSectionComponent implements OnInit {

	reviews: Review[] = [
		new Review(
			'../assets/image-assets/reviewer1.png',
			'Shaun White',
			'This Thing is a monster!',
			'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
			[1, 2, 3, 4, 5],
			'08/23/19'
		),
		new Review(
			'../assets/image-assets/reviewer2.png',
			'Jennie Loren',
			'Luv it so much I bought 2!',
			'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
			[1, 2, 3],
			'11/21/19'
		)
	]

	constructor() { }

	ngOnInit() {
	}

}
