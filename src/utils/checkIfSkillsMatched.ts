const checkIfSkillsMatched = (skills: string[], skillsToMatch: string[]) => {
    if (skillsToMatch.length === 0 || skillsToMatch[0] == "any-language") return true;
    if (skills.some(skill => skillsToMatch.includes(skill))) return true;
    return false;
}

export default checkIfSkillsMatched;
