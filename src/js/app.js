import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper();







// grid 


let autoFill = document.querySelector('.auto-fill');
let autoFit = document.querySelector('.auto-fit');
let autoFlex = document.querySelector('.adaptive-flex');

if (autoFill) {
  flsFunctions.gridAnimations(autoFill);
}

if (autoFit) {
  flsFunctions.gridAnimations(autoFit);
}

if (autoFlex) {
  flsFunctions.gridAnimations(autoFlex);
}





// media

// import { findVideos } from "./modules/functions.js";

flsFunctions.findVideos();