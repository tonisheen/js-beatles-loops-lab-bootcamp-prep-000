function theBeatlesPlay(artists, instruments) {
  matched = [];
  for (let i = 0; i < artists.length; i++){
    matched.push(`${artists[i]} plays ${instruments[i]}`);
  }
  return matched;
}