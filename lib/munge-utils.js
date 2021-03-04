function mungeCongressperson(apiData, userID) {
  const {
    id,
    title,
    first_name,
    last_name,
    party,
    seniority,
    state,
    votes_against_party_pct
  } = apiData;

  const mungedData = {
    name: `${first_name} ${last_name}`,
    chamber: title.startsWith('Representative') ? 'House' : 'Senate',
    state: state,
    seniority: seniority,
    party: party,
    rogue_factor: votes_against_party_pct,
    db_id: id,
    user_id: userID
  };
  
  return mungedData;
}

module.exports = { mungeCongressperson };