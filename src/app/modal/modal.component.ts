import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from './../item.service';

@Component({
    selector: 'ngbd-modal-basic',
    templateUrl: './modal.component.html'
})
export class NgbdModalBasic {
    closeResult: string;
<<<<<<< HEAD
    currentRate: number = 0;

    constructor(private modalService: NgbModal) { }
=======
    currentRate: number;
    currentItemSubscription: Subscription
    item: string;
    
    constructor(private modalService: NgbModal, private itemService: ItemService) { }

    ngOnInit() {
        this.currentItemSubscription =	this.itemService.itemChanged.subscribe(
			(item) => {
				this.item = item;
			}
		)
		this.item = this.itemService.getCurrentItem();
    }
>>>>>>> 40c178aab21df84eaa709e3729a9f1df24db1fbe

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}