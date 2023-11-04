"use strict";

const marvel_hero = [
  "captainAmerica",
  "bucky",
  "blackWidow",
  "ironman",
  "thor",
];

const dc_hero = ["supreman", "flash", "batman"];

console.log(marvel_hero.concat(dc_hero));
const spread_hero = [...marvel_hero, ...dc_hero];
console.log(spread_hero);

const arrarr = [1, 2, 3, [3, 5, 6, [2, 3, 4]], 7, 8];
const flat_arr = arrarr.flat(Infinity);
console.log(flat_arr);

console.log(Array.isArray("abcdefhgijklmnopqrstuvwxyz"));
console.log(Array.from("abcdefhgijklmnopqrstuvwxyz"));

let score1 = 1;
let score2 = 2;
let score3 = 3;

console.log(Array.of(score1, score2, score3));
