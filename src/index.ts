/**
 * Array of objects as function argument
 */

interface ISuitCard {
    suit: string;
    card: number;
}

function one(x: { prop: string, card: number }[]): number;
function one(x): any {
    return;
}

function two(x: Array<{ suit: string, card: number }>): number;
function two(x): any {
    return;
}

function three(x: ISuitCard[]): number;
function three(x): any {
    return;
}

function four(x: Array<ISuitCard>): number;
function four(x): any {
    return;
}