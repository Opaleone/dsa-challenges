// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  arr.sort((a, b) => a - b)
  let time = 0;
  let songs = 0;

  for (let i = 0; i < arr.length; i++) {
    if (time + arr[i] <= 60) {
      time += arr[i];
      songs++;
    } else {
      return songs;
    }
  }

  return songs;
};
