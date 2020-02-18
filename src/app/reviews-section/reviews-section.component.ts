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
			`I picked up this jacket for use in San Fransico and the surrounding Bay Area (Lake Tahoe included). I use this jacket for
			everything. It is often cloudy/drizzly/cold in in SF and this jacket deals with it all. I have not tried in heavy rain, but in drizzly
			conditions, the DWR treatment definitely makes small drops bead right off. It also has a nice fleece-like liner inside and
			keeps me really warm down to 40 degrees or so. In Tahoe, I have used this with a shirt or base layer, mid layer fleece, and
			then this jacket. I don't get cold too easily but in temps 20's - 30's I felt great (with some gloves and a beanie of course), I
			have tried it skiing yet because I snowboard and to be honest it wouldn't be quite large enough (I like baggier 
			snowboard clothing). But I have seen people who wear softshells skiing all the time. I also use this when I go to work and
			want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great. I am 6' and about 190 lbs (34 in
			arms) and the large fits perfect. The pockets are well designed as well. The soft shell is the new 'do-everything' jacket:
			wind/water resistent but also maleable and comfy for wearing anywhere. I highly recommend this jacket.`,
			[1, 2, 3, 4],
			'08/20/2013'
		),
		new Review(
			'../assets/image-assets/reviewer2.png',
			'Jennie Loren',
			'Luv it so much I bought 2!',
			`Love this jacket so much from previous years I decided to buy a second in a different color. I'm tall and fairly slender and
			its tailored silhouette fits me nicely. For perspective I'm around 6'3" ~150 lbs, and a large does the trick. I'll wear this for all of
			fall and into the winter. Despite not being bulky or baggy I find it good and warm for anything down to 40 degrees and
			perhaps lower if you're keeping up on your layering. For weather at freezing or below you should consider something heavier.`,
			[1, 2, 3],
			'01/12/2013'
		)
	]

	constructor() { }

	ngOnInit() {
	}

	onWriteReview() {
		alert('working!')
	}

}
