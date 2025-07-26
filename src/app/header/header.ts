import { Component } from '@angular/core';
import { AccordionModule, SharedModule } from '@coreui/angular';
import { LucideAngularModule, Search,User,Heart,ShoppingBag,Truck, Gift, Wallet,LockKeyhole, ChevronsLeft, ChevronsRight  } from 'lucide-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  imports: [
     AccordionModule,
     SharedModule,
     LucideAngularModule  ,
     CarouselModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  //icons
  readonly SearchIcon = Search;
  readonly UserIcon=User;
  readonly HeartIcon=Heart;
  readonly ShoppingBagIcon=ShoppingBag;
  readonly ChevronsLeftIcon=ChevronsLeft;
  readonly ChevronsRightIcon=ChevronsRight;

orderDetails=[
  {
    detail:'My Order'
  },
  {
    detail:'Track Order'
  },
  {
    detail:'Contact Us'
  }
]
ShopAccomodations=[
  {
    accomodation:'Free Shipping',
    icon : Truck
  },
  {
    accomodation:'Gift Voucher',
    icon : Gift
  },
  {
    accomodation:'Money Back',
    icon:Wallet
  },
  {
    accomodation:'Safe Payment',
    icon:LockKeyhole
  },
]
 currentIndex = 0;
totalSlides=3;
intervalId: any;
next() {
  this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
}

prev() {
  this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
}
startAutoSlide() {
  this.intervalId = setInterval(() => {
    this.next();
  }, 10000);
}
pauseAutoSlide() {
  clearInterval(this.intervalId);
}

resumeAutoSlide() {
  this.startAutoSlide();
}
ngOnInit() {
  this.startAutoSlide();
}

ngOnDestroy() {
  clearInterval(this.intervalId);
}
 isMenuOpen: boolean = false;

  dropdowns = {
    shop: false,
    collection: false,
    pages: false
  };

  toggleDropdown(section: 'shop' | 'collection' | 'pages') {
    this.dropdowns[section] = !this.dropdowns[section];
  }





}





