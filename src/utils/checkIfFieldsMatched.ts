const checkIfFieldsMatched = (mentorsFields: string[], searchedFields: string[]) => {
    if (searchedFields.length === 0 || searchedFields[0] == 'any-field') return true;
    if (searchedFields.some(field => mentorsFields.includes(field))) return true;
    return false;
}

export default checkIfFieldsMatched;