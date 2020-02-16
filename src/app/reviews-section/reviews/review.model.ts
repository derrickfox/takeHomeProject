export class Review {
    public reviewerImage: string;
	public reviewerName: string;
	public reviewTitle: string;
	public reviewBody: string;
	public reviewRating: number;
	public reviewDate: string;

	constructor(
		reviewerImage: string, 
		reviewerName: string, 
		reviewTitle: string, 
		reviewBody: string, 
		reviewRating: number,
		reviewDate: string
		) {
			this.reviewerImage = reviewerImage;
			this.reviewerName = reviewerName;
			this.reviewTitle = reviewTitle;
			this.reviewBody = reviewBody;
			this.reviewRating = reviewRating;
			this.reviewDate = reviewDate;
		}
}