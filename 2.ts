import _ from 'lodash';

const TEXT = "Game 1: 4 red, 18 green, 15 blue; 17 green, 18 blue, 9 red; 8 red, 14 green, 6 blue; 14 green, 12 blue, 2 red\n\
Game 2: 6 red, 11 green; 4 blue, 4 green, 5 red; 11 green, 6 blue, 6 red\n\
Game 3: 3 red, 3 green; 3 green, 1 blue, 7 red; 3 green, 5 red, 1 blue; 9 red, 4 green; 1 blue, 2 green, 5 red\n\
Game 4: 2 blue, 5 green, 9 red; 7 red, 10 blue; 2 green, 14 blue, 5 red; 3 blue, 2 green; 4 green, 10 red, 7 blue; 2 green, 15 blue, 7 red\n\
Game 5: 3 red, 2 blue; 5 red, 3 blue; 10 blue, 10 red, 1 green; 4 blue\n\
Game 6: 1 green, 10 blue, 5 red; 8 blue, 9 green; 20 green, 7 red, 10 blue; 12 green, 6 blue, 6 red; 10 blue, 11 green; 8 blue, 17 green, 5 red\n\
Game 7: 7 green, 12 blue, 3 red; 19 red, 12 blue; 8 blue, 8 red, 7 green; 6 red, 7 green, 5 blue\n\
Game 8: 8 blue, 7 red; 13 green, 5 blue, 5 red; 11 blue, 4 green, 7 red; 5 blue, 6 red, 13 green; 7 blue, 12 green, 8 red\n\
Game 9: 3 red, 3 blue, 12 green; 2 red, 1 blue, 9 green; 3 red, 12 green, 3 blue; 2 red, 7 green, 2 blue; 8 green, 4 blue; 2 red, 2 green\n\
Game 10: 16 green, 10 red; 13 green, 7 red; 8 red, 1 blue, 8 green\n\
Game 11: 7 red, 1 blue, 1 green; 6 blue, 1 green, 3 red; 5 blue, 10 red\n\
Game 12: 1 green, 8 red, 5 blue; 6 red, 12 blue; 2 blue, 15 red; 14 blue, 15 red, 1 green; 8 red, 9 blue\n\
Game 13: 1 green, 6 red; 7 blue, 13 red, 1 green; 3 blue, 4 red\n\
Game 14: 11 red, 1 green, 1 blue; 3 blue, 18 red, 15 green; 10 blue, 5 green, 11 red\n\
Game 15: 6 green, 10 blue, 15 red; 6 green, 17 blue, 8 red; 19 red, 7 blue, 2 green; 1 green, 18 red, 4 blue\n\
Game 16: 1 green, 17 red, 7 blue; 12 red, 10 green, 9 blue; 15 red, 3 green, 15 blue\n\
Game 17: 12 blue, 13 green; 16 green, 19 blue, 7 red; 1 green, 2 blue\n\
Game 18: 8 blue, 9 green, 2 red; 9 blue, 7 green; 3 red, 9 green, 10 blue; 1 blue, 7 green, 2 red; 1 green, 8 blue, 4 red\n\
Game 19: 3 green, 2 red, 11 blue; 13 blue, 3 green, 1 red; 1 red, 10 blue\n\
Game 20: 2 red, 4 green, 1 blue; 14 blue, 7 green; 7 blue, 9 green; 4 red, 5 green, 7 blue\n\
Game 21: 4 blue, 20 red, 7 green; 4 green, 6 blue, 14 red; 6 green, 18 red, 5 blue; 2 blue, 4 green, 6 red; 4 green, 16 red, 4 blue\n\
Game 22: 13 red, 2 green; 6 red, 3 blue; 6 red, 2 green; 7 red, 1 green; 6 red, 2 green\n\
Game 23: 5 blue; 6 red, 16 green, 12 blue; 1 blue, 6 green, 2 red; 8 red, 6 blue, 3 green\n\
Game 24: 10 green, 4 blue, 5 red; 1 green, 3 red; 8 red, 3 blue, 6 green; 3 red, 2 blue; 3 red, 10 green, 3 blue\n\
Game 25: 1 red, 2 green; 4 green, 6 red, 1 blue; 3 red; 4 green, 2 red\n\
Game 26: 7 red, 1 blue; 2 red, 1 blue; 9 red, 1 green, 2 blue; 5 red, 2 blue; 4 red, 2 green; 8 red, 1 green, 2 blue\n\
Game 27: 1 green, 2 red, 8 blue; 1 green, 4 red, 9 blue; 16 blue, 12 red, 3 green; 13 blue, 4 green, 5 red\n\
Game 28: 8 blue, 8 green, 3 red; 8 green, 6 blue; 5 green, 6 blue, 4 red\n\
Game 29: 7 red, 11 green, 5 blue; 1 green, 1 blue, 6 red; 6 green, 5 blue, 8 red; 7 blue, 15 green, 2 red; 10 blue, 1 red\n\
Game 30: 7 red, 5 blue, 14 green; 2 blue, 11 red; 17 green, 2 blue, 7 red; 4 blue, 10 red, 5 green\n\
Game 31: 17 blue, 5 red, 2 green; 7 red, 14 blue, 3 green; 13 blue, 5 red, 2 green; 12 green, 8 blue, 8 red\n\
Game 32: 1 red, 7 blue; 1 red, 8 blue; 1 red, 2 green, 13 blue\n\
Game 33: 1 green, 3 blue, 3 red; 4 red, 2 green; 5 blue, 1 red, 1 green; 1 red, 8 blue, 2 green\n\
Game 34: 9 blue, 7 red; 9 green, 11 red, 1 blue; 18 red, 4 blue, 6 green\n\
Game 35: 7 blue, 4 green, 2 red; 1 green, 1 blue, 2 red; 3 green; 3 blue, 7 green, 1 red; 7 blue, 12 green\n\
Game 36: 17 red, 5 blue; 6 red, 5 green, 7 blue; 16 blue, 1 green, 7 red; 7 blue, 5 green, 15 red; 8 blue, 19 red, 1 green\n\
Game 37: 4 blue, 6 red, 1 green; 9 red, 8 green, 4 blue; 1 green, 8 blue, 10 red; 11 green, 6 red, 9 blue\n\
Game 38: 3 red, 4 blue; 5 red, 1 blue; 1 green, 2 red, 5 blue; 2 blue, 8 red; 7 red, 1 blue; 4 blue, 5 red\n\
Game 39: 7 green; 5 green; 3 blue; 12 green, 1 red, 1 blue; 8 green, 1 blue, 1 red\n\
Game 40: 12 red, 11 blue; 6 green, 2 blue, 13 red; 6 green, 7 red, 6 blue\n\
Game 41: 3 green, 1 blue; 5 blue, 7 red, 6 green; 6 red, 14 blue; 9 red, 14 green, 5 blue; 5 blue, 6 green, 3 red; 20 green, 4 blue, 5 red\n\
Game 42: 2 blue, 13 green; 10 red, 6 green; 8 green, 2 red; 7 red\n\
Game 43: 7 green, 3 red; 6 red, 6 green, 13 blue; 7 green, 2 red, 9 blue; 8 blue, 3 green, 1 red; 10 green, 7 red, 13 blue\n\
Game 44: 3 blue, 1 green, 2 red; 10 blue, 9 red; 5 red, 13 blue\n\
Game 45: 11 red, 2 green, 5 blue; 1 green, 6 red, 6 blue; 17 red, 2 green, 6 blue; 14 red, 2 green\n\
Game 46: 5 blue, 7 red, 8 green; 6 green, 1 red, 10 blue; 1 red, 5 blue, 4 green\n\
Game 47: 5 green, 5 red, 1 blue; 11 green, 8 red, 6 blue; 2 green, 16 red, 1 blue; 12 green, 1 red, 7 blue; 2 red, 15 green, 7 blue\n\
Game 48: 3 red, 6 green, 4 blue; 1 blue, 1 green, 2 red; 12 blue, 7 green, 5 red\n\
Game 49: 4 blue, 1 green; 4 red, 2 blue; 3 blue, 2 green; 5 red, 3 blue, 4 green\n\
Game 50: 1 blue, 1 green; 3 blue, 7 red, 1 green; 2 blue, 1 green\n\
Game 51: 17 blue, 1 green, 3 red; 2 green, 1 red, 3 blue; 14 blue, 10 red\n\
Game 52: 8 blue, 1 green; 1 blue, 3 red, 2 green; 2 green, 14 blue\n\
Game 53: 9 green, 3 blue, 9 red; 3 blue, 7 red, 8 green; 2 green, 2 red; 17 green, 3 red; 18 green, 8 red\n\
Game 54: 2 blue, 10 red; 2 green, 2 red; 6 green, 1 blue, 1 red; 3 blue, 6 red, 7 green\n\
Game 55: 3 blue, 1 red; 1 green, 2 red, 1 blue; 4 blue, 3 red; 5 blue, 3 green; 3 green, 1 red, 3 blue; 2 green\n\
Game 56: 10 green, 1 red, 6 blue; 16 green, 1 blue, 10 red; 8 red, 9 green, 2 blue; 3 red, 2 blue\n\
Game 57: 1 blue, 4 green, 1 red; 7 red, 4 green, 8 blue; 9 red, 3 blue, 3 green\n\
Game 58: 15 green, 16 blue, 8 red; 8 blue, 8 red, 2 green; 9 blue, 8 red, 3 green; 20 blue, 15 green, 7 red\n\
Game 59: 13 red, 3 blue; 12 red, 4 green; 9 blue, 5 green, 9 red; 2 red, 12 blue, 1 green\n\
Game 60: 14 green, 16 red; 5 green, 1 blue, 5 red; 14 green, 5 blue, 20 red; 2 blue, 8 green, 1 red\n\
Game 61: 2 green, 10 red, 15 blue; 17 blue, 6 red, 2 green; 2 red, 2 green, 12 blue; 2 red, 2 green\n\
Game 62: 8 blue, 1 green, 3 red; 6 red, 15 blue, 2 green; 5 green, 6 blue; 1 red, 7 green, 8 blue\n\
Game 63: 13 green, 8 red; 8 green, 1 blue, 5 red; 2 green, 8 red, 2 blue\n\
Game 64: 13 red, 12 blue, 4 green; 2 blue, 3 red, 1 green; 4 green, 14 red, 14 blue; 8 red, 4 green; 16 red; 5 blue, 16 red, 4 green\n\
Game 65: 13 red, 2 blue, 3 green; 10 red, 6 blue; 6 blue, 5 red\n\
Game 66: 1 blue, 9 green; 4 green, 5 blue; 8 green, 8 blue; 10 blue, 1 red, 10 green; 18 blue, 1 red, 9 green\n\
Game 67: 12 red, 7 blue; 13 red, 3 blue, 3 green; 7 blue, 6 red, 4 green\n\
Game 68: 3 green, 4 blue, 8 red; 1 green, 2 blue, 13 red; 3 green, 14 red, 4 blue; 6 red, 4 green; 7 blue, 2 red, 1 green; 1 green, 3 blue, 14 red\n\
Game 69: 2 blue, 6 red, 2 green; 7 green, 18 red; 11 green, 1 blue, 13 red; 3 red, 6 green, 1 blue; 19 red, 1 green\n\
Game 70: 13 green; 1 red, 14 green, 2 blue; 9 red, 1 blue, 9 green; 6 green, 5 red, 1 blue; 2 green, 10 red\n\
Game 71: 7 blue, 5 green, 11 red; 4 red, 8 blue, 5 green; 1 green, 1 blue; 6 green, 8 red, 5 blue; 8 red, 7 green, 6 blue\n\
Game 72: 2 blue, 2 green, 1 red; 5 green, 1 red, 3 blue; 4 green\n\
Game 73: 8 green, 3 blue, 3 red; 1 green, 3 red, 9 blue; 3 red, 10 blue, 8 green; 10 green, 3 red, 8 blue; 3 blue, 3 green; 2 green\n\
Game 74: 5 red, 1 green; 1 blue, 5 red; 8 red, 3 blue\n\
Game 75: 5 red, 7 green, 3 blue; 1 red, 5 blue, 4 green; 2 blue, 12 green; 3 blue, 5 red; 8 green, 4 blue, 3 red; 1 green, 2 blue, 1 red\n\
Game 76: 10 green, 5 blue, 1 red; 11 blue, 16 green, 1 red; 12 blue, 2 red, 18 green; 12 green, 10 blue; 5 blue, 5 green, 1 red; 9 green, 1 red, 1 blue\n\
Game 77: 9 blue, 1 red, 2 green; 1 blue, 1 red, 5 green; 5 blue\n\
Game 78: 1 red, 1 blue; 1 blue; 1 red; 1 green, 2 red, 1 blue; 1 blue, 4 red\n\
Game 79: 3 green, 11 red, 4 blue; 7 red, 1 green, 4 blue; 1 green, 3 red, 3 blue; 3 blue, 3 red, 4 green; 3 green, 3 blue, 9 red\n\
Game 80: 11 blue, 10 green, 11 red; 10 green, 9 red, 18 blue; 11 green, 17 blue, 7 red\n\
Game 81: 6 red, 1 blue; 3 blue, 6 red, 2 green; 6 red, 10 green, 1 blue; 5 blue, 3 green, 3 red\n\
Game 82: 6 red, 16 green, 2 blue; 9 green, 6 red, 3 blue; 1 blue, 9 red, 14 green; 8 green, 11 red, 3 blue; 3 red, 5 green; 12 green, 3 blue\n\
Game 83: 7 blue, 5 green, 11 red; 8 red, 9 blue, 13 green; 13 blue, 8 red, 8 green; 2 blue, 9 green, 5 red\n\
Game 84: 9 green, 14 red, 11 blue; 1 green, 12 blue, 6 red; 12 green, 10 red, 7 blue; 15 green, 6 blue; 15 blue, 4 red, 6 green; 16 green, 2 red, 13 blue\n\
Game 85: 7 red, 7 blue, 3 green; 5 green, 1 blue; 6 red, 11 green, 7 blue\n\
Game 86: 9 green, 6 blue, 6 red; 3 red, 2 blue, 7 green; 4 red, 4 green, 7 blue; 10 blue, 10 green, 2 red; 5 green\n\
Game 87: 6 green, 5 blue; 15 blue, 9 green, 1 red; 14 blue, 15 green\n\
Game 88: 3 blue, 2 green, 5 red; 8 blue, 1 green, 2 red; 5 red, 8 blue, 1 green; 1 red, 1 blue; 1 green, 6 red, 2 blue; 1 green, 2 red, 1 blue\n\
Game 89: 4 blue, 3 green; 1 blue, 2 red; 2 red, 1 green, 4 blue; 2 red, 2 blue, 1 green\n\
Game 90: 2 green, 1 red; 3 green, 8 red; 1 blue, 6 red, 4 green\n\
Game 91: 3 red; 1 blue, 6 red; 1 blue, 5 red, 1 green\n\
Game 92: 6 red, 9 green, 7 blue; 9 green, 4 red; 2 green, 5 blue\n\
Game 93: 7 green, 1 red; 3 blue, 3 red; 3 green, 9 red, 4 blue; 2 red, 6 green; 5 red, 3 blue\n\
Game 94: 4 green, 11 red; 13 green, 9 red; 16 green, 11 red; 6 green, 2 blue, 14 red; 17 green, 9 red\n\
Game 95: 7 red, 13 blue, 2 green; 8 green, 13 blue, 3 red; 5 green, 6 red, 13 blue; 8 green, 8 blue, 2 red; 6 blue, 4 green, 8 red; 2 blue, 2 red\n\
Game 96: 10 red, 3 blue, 3 green; 2 blue, 4 green, 5 red; 7 blue, 4 green, 6 red; 1 green, 4 red, 5 blue\n\
Game 97: 5 red, 8 blue; 4 green, 2 red, 14 blue; 10 blue, 7 green\n\
Game 98: 1 red, 2 green, 14 blue; 6 green, 1 blue; 19 blue, 4 red; 18 blue, 4 red, 3 green; 2 red, 1 blue\n\
Game 99: 3 red, 4 blue; 7 red, 5 blue, 3 green; 2 green, 1 blue, 1 red; 4 blue, 2 green, 1 red; 1 green, 1 red, 2 blue; 1 green, 6 blue, 7 red\n\
Game 100: 2 blue, 10 green; 10 green, 14 red; 3 green, 5 red, 2 blue; 1 red, 3 blue, 7 green; 1 blue, 7 red";

const ARRAY_LINES = TEXT.split(/\r?\n/);

type Color = 'red' | 'green' | 'blue';

interface Count {
    red?: number;
    green?: number; 
    blue?: number;
};

interface Game {
    id: number;
    counts: Count[];
};

const ID_ARRAY = [...Array(100).keys()].map((k) => k+1);
const trimAfterId = (line: string) => line.slice(line.indexOf(':') + 2);
const TRIMMED_COUNTS :string[] = ARRAY_LINES.map((l:string) => trimAfterId(l));
const SPLIT_COUNTS :string[][] = TRIMMED_COUNTS.map(l => l.split(';').map(e => e.trim()));
const parseCount = (countStr: string) => countStr
    .split(',')
    .map(e => e.trim().split(' '))
    .map(arr => arr.map(e => e.trim()))
    .map(([count, color]) => ({ [color]: Number.parseInt(count) }))
    .reduce((prev, curr) => ({...prev, ...curr}), {}) as Count;
const PARSED_COUNTS = SPLIT_COUNTS.map(c => c.map(e => parseCount(e)));
const GAMES = _.zip(ID_ARRAY, PARSED_COUNTS).map(([id, counts]) => ({ id, counts })) as Game[];
const PERCOLOR_CONSTRAINTS = {
    red: 12,
    green: 13,
    blue: 14,
}
const colorFilter = (key: Color, value: number | undefined) => Boolean(value) ? (value as number <= PERCOLOR_CONSTRAINTS[key]) : true;
const FILTERED_GAMES = GAMES.filter(g => g.counts.every(c => colorFilter('blue', c.blue) && colorFilter('red', c.red) && colorFilter('green', c.green)));
const GAME1_ANSWER = FILTERED_GAMES.map(g => g.id).reduce((prev, acc) => prev + acc, 0);
console.log(GAME1_ANSWER);

