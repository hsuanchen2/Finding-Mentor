type HourlyRate = 'any' | number | [number, number];

const getHourlyRate = (id: string): HourlyRate | null => {
    switch (id) {
        case 'any-hourly-rate':
            return 'any';
        case 'belowTen':
            return 10;
        case 'tenToThirty':
            return [10, 30];
        case 'thirtyToSixty':
            return [30, 60];
        case 'aboveSixty':
            return 60;
        default:
            return null;
    }
}

export default getHourlyRate;