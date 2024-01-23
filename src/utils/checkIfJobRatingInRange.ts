const checkIfJobRatingInRange = (rating: number, ratingRange: number[] | string | number) => {
    if (typeof ratingRange === 'number' || ratingRange === 'any') return true;
    if (typeof ratingRange[0] === 'number') {
        const numberRange = ratingRange as number[];
        return (rating >= numberRange[0] && rating <= numberRange[1]);
    }
    return false;
}

export default checkIfJobRatingInRange; 