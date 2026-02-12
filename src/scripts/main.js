'use strict';

// write code here

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;
const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

function moveSpider() {
  const x = (wallWidth - spiderWidth) / 2;
  const y = (wallHeight - spiderHeight) / 2;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
}

moveSpider();
