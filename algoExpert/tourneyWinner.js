/* 

  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

  There is one winner per Tourney. Winner is already determined in results array.

  Competition array structure is as follows:

    [Home Team , Away Team]

  0 dictates away team win; 1 dictates Home Team Win.
  
*/

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]

const results = [ 0, 0, 1 ]

// Winner of above competition is Python
// C# beats HTML, Python beats C#, Python beats HTML.

// Variable to help reverse results array later;
let homeTeamWon = 1;

const tournamentWinner = (competitions, results) => {
  // Initilizes our scores hash table
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  
  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    // Uses variable from earlier to select who won based on logic from question
    const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);
    
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

const updateScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

console.log(tournamentWinner(competitions, results));