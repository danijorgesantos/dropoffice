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

  public deleteCollection(id: any) {
    console.log('deletecollection --> _id', id );

    this.collectionService.deleteCollection(
      id
    );
  }
}
