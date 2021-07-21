import { calculateSeason } from '@/services/util';
import Island, { emptyIsland } from '@/types/Island';
import { expect } from 'chai';

describe("calculateSeason()", () => {
    it("correctly identifies Early and Late Summer", () => {
        const i = emptyIsland();
        i.alt = 20000;
        i.rise = true;
        expect(calculateSeason(i)).to.equal("Late Summer");

        i.rise = false;
        expect(calculateSeason(i)).to.equal("Early Summer");
    });

    it("correctly identifies Early Autumn and Late Spring", () => {
        const i = emptyIsland();
        i.alt = 40000;
        i.rise = true;
        expect(calculateSeason(i)).to.equal("Early Autumn");

        i.rise = false;
        expect(calculateSeason(i)).to.equal("Late Spring");
    });

    it("correctly identifies Mid Autumn and Mid Spring", () => {
        const i = emptyIsland();
        i.alt = 50000;
        i.rise = true;
        expect(calculateSeason(i)).to.equal("Mid Autumn");

        i.rise = false;
        expect(calculateSeason(i)).to.equal("Mid Spring");
    });

    it("correctly identifies Late Autumn and Early Spring", () => {
        const i = emptyIsland();
        i.alt = 70000;
        i.rise = true;
        expect(calculateSeason(i)).to.equal("Late Autumn");

        i.rise = false;
        expect(calculateSeason(i)).to.equal("Early Spring");
    });

    it("correctly identifies Early Winter and Late Winter", () => {
        const i = emptyIsland();
        i.alt = 80000;
        i.rise = true;
        expect(calculateSeason(i)).to.equal("Early Winter");

        i.rise = false;
        expect(calculateSeason(i)).to.equal("Late Winter");
    });
});
