export default interface Island {
    name: string,
    alt: number,    // altitude
    rate: number,
    rise: boolean,  // true = island is ascending
    max: number,    // max and min heights
    min: number,
}

export const emptyIsland = (): Island => {
    return {
        name: "",
        alt: 0,
        rate: 0,
        rise: false,
        max: 100000,
        min: 0,
    } as Island
}
