export class Review {
    public reviewerImage: string;
	public reviewerName: string;
	public reviewTitle: string;
	public reviewBody: string;
	public reviewRating: number;

	constructor(
		reviewerImage: string, 
		reviewerName: string, 
		reviewTitle: string, 
		reviewBody: string, 
		reviewRating: number
		) {
			this.reviewerImage = reviewerImage;
			this.reviewerName = reviewerName;
			this.reviewTitle = reviewTitle;
			this.reviewBody = reviewBody;
			this.reviewRating = reviewRating;
		}
}