import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Select from 'react-select'
import CompareStats from './components/CompareStats/CompareStats'
import Nav from './components/Navbar/Nav'

function App() {
  const [roster, setRoster] = useState([])
  
  //player 1
  const [selectedPlayer, setSelectedPlayer] = useState()
  const [fullName, setFullName] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')
  const [height, setHeight] = useState('')
  const [team, setTeam] = useState('')
  const [age, setAge] = useState('')
  const [shoots, setShoots] = useState('')
  
  const [gamesPlayed, setGamesPlayed] = useState('')
  const [points, setPoints] = useState('')
  const [goals, setGoals] = useState('')
  const [assists, setAssists] = useState('')
  const [shotsOnGoal, setShotsOnGoal] = useState('')
  const [shotPercentage, setShotPercentage] = useState('')
  const [avgTimeOnIce, setAvgTimeOnIce] = useState('')
  const [plusMinus, setPlusMinus] = useState('')

  //player 2
  const [selectedPlayer2, setSelectedPlayer2] = useState()
  const [fullName2, setFullName2] = useState('')
  const [position2, setPosition2] = useState('')
  const [number2, setNumber2] = useState('')
  const [height2, setHeight2] = useState('')
  const [team2, setTeam2] = useState('')
  const [age2, setAge2] = useState('')
  const [shoots2, setShoots2] = useState('')
  
  const [gamesPlayed2, setGamesPlayed2] = useState('')
  const [points2, setPoints2] = useState('')
  const [goals2, setGoals2] = useState('')
  const [assists2, setAssists2] = useState('')
  const [shotsOnGoal2, setShotsOnGoal2] = useState('')
  const [shotPercentage2, setShotPercentage2] = useState('')
  const [avgTimeOnIce2, setAvgTimeOnIce2] = useState('')
  const [plusMinus2, setPlusMinus2] = useState('')

  //year selected
  const [selectedYear, setSelectedYear] = useState(20222023)

  //fetch roster
  useEffect(()=>{
    const fetchRoster = async () => {
      let rosterData = [];
      const teamIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15,
                        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28,
                        29, 30, 52, 53, 54, 55] 
      
      for (let i = 0; i < 32; i++){
        let id = teamIDs[i];
        const teamRosterEndpoint = `https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`

        try {
          const response = await fetch(teamRosterEndpoint);
          const data = await response.json();
          const playerRoster = data.roster.map(player => ({
            id: player.person.id,
            name: player.person.fullName
          }));
          rosterData.push(playerRoster)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      }

      setRoster(rosterData); 
    };
    
    fetchRoster();
  }, []);  

  //fetch player 1 information
  useEffect(() => {
    const playerEndpoint = `https://statsapi.web.nhl.com/api/v1/people/${selectedPlayer}`
    const statsEndpoint = playerEndpoint + `/stats?stats=statsSingleSeason&season=${selectedYear}`
    
    //fetch player info API
    fetch(playerEndpoint)
    .then(response => response.json())
    .then(data => {
      setFullName(data.people[0].fullName)
      setPosition(data.people[0].primaryPosition.name)
      setNumber(data.people[0].primaryNumber)
      setHeight(data.people[0].height)
      setTeam(data.people[0].currentTeam.name)
      setAge(data.people[0].currentAge)
      setShoots(data.people[0].shootsCatches === 'L' ? 'Left' : 'Right')
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

      //fetch player stats API 
    fetch(statsEndpoint)
    .then(response => response.json())
    .then(data => {
      setGamesPlayed(data.stats[0].splits[0].stat.games)
      setPoints(data.stats[0].splits[0].stat.points)
      setGoals(data.stats[0].splits[0].stat.goals)
      setAssists(data.stats[0].splits[0].stat.assists)
      setShotsOnGoal(data.stats[0].splits[0].stat.shots)
      setShotPercentage(data.stats[0].splits[0].stat.shotPct)
      setAvgTimeOnIce(data.stats[0].splits[0].stat.timeOnIcePerGame)
      setPlusMinus(data.stats[0].splits[0].stat.plusMinus)
    })
  }, [selectedPlayer, selectedYear])

  //fetch player 2 information
  useEffect(() => {
    const playerEndpoint = `https://statsapi.web.nhl.com/api/v1/people/${selectedPlayer2}`
    const statsEndpoint = playerEndpoint + `/stats?stats=statsSingleSeason&season=${selectedYear}`
    
    //fetch player info API
    fetch(playerEndpoint)
    .then(response => response.json())
    .then(data => {
      setFullName2(data.people[0].fullName)
      setPosition2(data.people[0].primaryPosition.name)
      setNumber2(data.people[0].primaryNumber)
      setHeight2(data.people[0].height)
      setTeam2(data.people[0].currentTeam.name)
      setAge2(data.people[0].currentAge)
      setShoots2(data.people[0].shootsCatches === 'L' ? 'Left' : 'Right')
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

      //fetch player stats API 
    fetch(statsEndpoint)
    .then(response => response.json())
    .then(data => {
      setGamesPlayed2(data.stats[0].splits[0].stat.games)
      setPoints2(data.stats[0].splits[0].stat.points)
      setGoals2(data.stats[0].splits[0].stat.goals)
      setAssists2(data.stats[0].splits[0].stat.assists)
      setShotsOnGoal2(data.stats[0].splits[0].stat.shots)
      setShotPercentage2(data.stats[0].splits[0].stat.shotPct)
      setAvgTimeOnIce2(data.stats[0].splits[0].stat.timeOnIcePerGame)
      setPlusMinus2(data.stats[0].splits[0].stat.plusMinus)
    })
  }, [selectedPlayer2, selectedYear])
  
  return (
    <>
      <main>
        <nav>
          <Nav />
        </nav>
        <h1></h1>
        <section id='player-profiles'>
          <div className='player1-container'>
            <div>
                <Select 
                  id="players" 
                  value={{ value: selectedPlayer, label: fullName }}
                  options={roster.flatMap((playerGroup) =>
                    playerGroup.map(player => ({
                      value: player.id,
                      label: player.name
                    }))
                  )}
                  onChange={selectedOption => setSelectedPlayer(selectedOption.value)}
                  placeholder='Select a player...'
                  isSearchablereac
                />
            </div>
            <div className='player'>
              <div className='basic'>
                <h1>{fullName} | #{number}</h1>
                <div className='stats'>
                  <div className='type'>
                    <div>GP</div> 
                    <div>P</div>
                    <div>G</div>
                    <div>A</div> 
                    <div>SOG</div> 
                    <div>S%</div> 
                    <div>ATOI</div> 
                    <div>+/-</div> 
                  </div>
                  <div className='value'>
                    <div>{gamesPlayed}</div>
                    <div>{points}</div>
                    <div>{goals}</div>
                    <div>{assists}</div>
                    <div>{shotsOnGoal}</div>
                    <div>{shotPercentage}</div>
                    <div>{avgTimeOnIce}</div>
                    <div>{plusMinus}</div>
                  </div>
                </div>
                  <p><span>Position:</span> {position}</p>
                  <p><span>Height:</span> {height}</p>
                  <p><span>Team:</span> {team}</p>
                  <p><span>Age:</span> {age}</p>
                  <p><span>Shoots:</span> {shoots}</p>
                </div>
            </div>
          </div>
          <div className='player2-container'>
            <div>
                <Select 
                  id="players" 
                  value={{ value: selectedPlayer2, label: fullName2 }}
                  options={roster.flatMap((playerGroup) =>
                    playerGroup.map(player => ({
                      value: player.id,
                      label: player.name
                    }))
                  )}
                  onChange={selectedOption => setSelectedPlayer2(selectedOption.value)}
                  placeholder='Select a player...'
                  isSearchablereac
                />
            </div>
            <div className='player'>
              <div className='basic'>
                <h1>{fullName2} | #{number2}</h1>
                <div className='stats'>
                  <div className='type'>
                    <div>GP</div> 
                    <div>P</div>
                    <div>G</div>
                    <div>A</div> 
                    <div>SOG</div> 
                    <div>S%</div> 
                    <div>ATOI</div> 
                    <div>+/-</div> 
                  </div>
                  <div className='value'>
                    <div>{gamesPlayed2}</div>
                    <div>{points2}</div>
                    <div>{goals2}</div>
                    <div>{assists2}</div>
                    <div>{shotsOnGoal2}</div>
                    <div>{shotPercentage2}</div>
                    <div>{avgTimeOnIce2}</div>
                    <div>{plusMinus2}</div>
                  </div>
                </div>
                  <p><span>Position:</span> {position2}</p>
                  <p><span>Height:</span> {height2}</p>
                  <p><span>Team:</span> {team2}</p>
                  <p><span>Age:</span> {age2}</p>
                  <p><span>Shoots:</span> {shoots2}</p>
                </div>
            </div>
          </div>
        </section>  
        <section id='charts'>
          <div className='charts-container'>
          <CompareStats
            fullName={fullName}
            position={position}
            number={number}
            height={height}
            team={team}
            age={age}
            shoots={shoots}
            gamesPlayed={gamesPlayed}
            points={points}
            goals={goals}
            assists={assists}
            shotsOnGoal={shotsOnGoal}
            shotPercentage={shotPercentage}
            avgTimeOnIce={avgTimeOnIce}
            plusMinus={plusMinus}

            fullName2={fullName2}
            position2={position2}
            number2={number2}
            height2={height2}
            team2={team2}
            age2={age2}
            shoots2={shoots2}
            gamesPlayed2={gamesPlayed2}
            points2={points2}
            goals2={goals2}
            assists2={assists2}
            shotsOnGoal2={shotsOnGoal2}
            shotPercentage2={shotPercentage2}
            avgTimeOnIce2={avgTimeOnIce2}
            plusMinus2={plusMinus2}
          />
          </div>
        </section> 
      </main>
    </>
  )
}




export default App


// useEffect(()=>{
  //     const playerEndpoint = `https://statsapi.web.nhl.com/api/v1/teams/${teamID}/roster`
      
  //     for (let i = 1; i <= 10; i++){
  //         setTeamID(i)
  //         fetch(playerEndpoint)
  //             .then(response => response.json())
  //             .then(data => {
  //                 const playerRoster = data.roster.map(player => ({
  //                     id: player.person.id,
  //                     name: player.person.fullName
  //                 }))
  //                 setRoster(playerRoster)
  //             })
  //             .catch(error => {
  //                 console.error('Error fetching data:', error);
  //             });
  //     }
  // }, [teamID])  