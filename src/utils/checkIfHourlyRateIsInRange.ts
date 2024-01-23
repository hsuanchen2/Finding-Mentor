const checkIfHourlyRateIsInRange = (hourlyRate: number, range: number[] | string | number) => {
    if (typeof range === 'number' || range === 'any') return true;
    if (typeof range[0] === 'number') {
        const numberRange = range as number[];
        return hourlyRate >= numberRange[0] && hourlyRate <= numberRange[1];
    }
    return false;
}
export default checkIfHourlyRateIsInRange;