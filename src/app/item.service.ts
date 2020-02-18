import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class ItemService {

    itemChanged = new Subject<string>();

    getCurrentItem() {
        this.itemChanged.next('Tough Mojo Jacket')
        return 'Tough Mojo Jacket'
    }

}