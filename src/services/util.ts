import Island from '../types/Island';

export function calculateSeason(i: Island): string {
    const range = (i.max - i.min) * 2;
    const progress = i.rise? i.alt - i.min : range - (i.alt - i.min);
    const ratio = (progress / range) * 100;

    if (ratio >= 87.5 && ratio < 95.833) return "Early Summer";
    if (ratio >= 95.833 || ratio < 4.167) return "Mid Summer";
    if (ratio >= 4.167 && ratio < 12.5) return "Late Summer";
    if (ratio >= 12.5 && ratio < 20.833) return "Early Autumn";
    if (ratio >= 20.833 && ratio < 29.167) return "Mid Autumn";
    if (ratio >= 29.167 && ratio < 37.5) return "Late Autumn";
    if (ratio >= 37.5 && ratio < 45.833) return "Early Winter";
    if (ratio >= 45.833 && ratio < 54.167) return "Mid Winter";
    if (ratio >= 54.167 && ratio < 62.5) return "Late Winter";
    if (ratio >= 62.5 && ratio < 70.833) return "Early Spring";
    if (ratio >= 70.833 && ratio < 79.167) return "Mid Spring";
    if (ratio >= 79.167 && ratio < 87.5) return "Late Spring";

    throw RangeError("calculateSeason(): Island ratio out of range");
}
