arr = []
function theBeatlesPlay(musicians, instruments) {
  for(x=0; i<musicians.length(); i++){
    for (y=0; y<instruments.length(); y++) {
      arr.push(`${x} plays ${y}`)
    }
  }
  return arr;
}