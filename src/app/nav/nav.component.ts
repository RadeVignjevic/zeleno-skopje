import { Component, ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WINDOW } from "../window.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @ViewChild('main-nav') mainNav: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  public navIsTransparent: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > window.innerHeight - 50) {
      this.navIsTransparent = false;
    } else {
      this.navIsTransparent = true;
    }
  }
}

