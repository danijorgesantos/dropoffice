import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '../_services/collection.service';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss']
})
export class CollectionCardComponent implements OnInit {

  @Input() collection: any;

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
  }

  public deleteCollection(_id: any) {
    console.log('deletecollection --> _id',_id)
    this.collectionService.deleteCollection(_id);
  }
}
