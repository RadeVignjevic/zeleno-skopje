import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `facebook-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/img/fbb.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `linkdin-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/img/linkdin.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `twitter-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/img/twitter.svg`)
    );
  }

  ngOnInit(): void {
  }
}
