const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return []
  }

  const myPlaylist = []
  for (let playlist of playlists) {
    for (let song of playlist) {
      song['source'] = [playlists.indexOf(playlist),
      playlist.indexOf(song)]
    }
    myPlaylist.push(...playlist)
  }

  return myPlaylist
}


function scoreTracks(arrObjs) {
  for (let song of arrObjs) {
    song['score'] = song['votes'] * 10 - Math.abs(song['bpm'] - 120)
  }
  return arrObjs
}


function dedupeTracks(scoredArr) {
  const nonDupeArr = []
  for (let song  of scoredArr) {
    if (nonDupeArr.some(mySong => mySong.trackId == song.trackId)) {
      continue
    }
    nonDupeArr.push(song)
  }
  return nonDupeArr
}


function enforceArtistQuota(nonDupe, num) {
  const artistArr = []
  for (let song of nonDupe) {
    if (artistArr.filter(mySong => mySong.artist == song.artist).length < num) {
      artistArr.push(song)
    } 
  }
  return artistArr
}


function buildSchedule(artistArr) {
  const newArr = []
  for (const song of artistArr) {
    newArr.push({
      slot: artistArr.indexOf(song)+1,
      trackId: song.trackId
    })
  }
  return newArr
}


function remixPlaylist(playlists, maxNum) {
  return buildSchedule(enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), maxNum))
}