import { Component, OnInit } from '@angular/core';
import { ContentstackService } from 'src/app/services/contentstack.service';

@Component({
  selector: 'app-legal-content',
  templateUrl: './legal-content.component.html',
  styleUrls: ['./legal-content.component.scss']
})
export class LegalContentComponent implements OnInit {

  entry:any;

  legalContents:any;

  contentTypeUid = 'legal_agreement';

  constructor(
    private contentStackService: ContentstackService
  ) { }

  ngOnInit(): void {
    this.fetchEntry();
  }

  fetchEntry() {
    this.contentStackService.Stack.ContentType(this.contentTypeUid)
    .Entry('blt30a26995a2c89f06').toJSON().fetch()
    .then((entry:any) => {
      this.entry = entry;
      this.legalContents = entry.legal_contents;
    });
  }

}
