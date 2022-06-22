import { Component, OnInit } from '@angular/core';
import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard]);
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          720: {
              slidesPerView: 2,
              slidesPerGroup: 2
          },
          1080: {
              slidesPerView: 3,
              slidesPerGroup: 3
          }
      },
      autoplay: {
          delay: 5000
      },
      keyboard: true
  });
  let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    keyboard: true
  });
  }

}
