const data = [
  {
    "title": "The Mysterious Affair at Styles",
    "detective": "Hercule Poirot",
    "publishDate": 1920,
    "order": 1,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": ["Inspector Japp", "Captain Hastings"],
    "pageCount": 296
  },
  {
    "title": "The Murder on the Links",
    "detective": "Hercule Poirot",
    "publishDate": 1923,
    "order": 2,
    "murderMethods": ["Stabbing"],
    "deathCount": 1,
    "characters": ["Captain Hastings"],
    "pageCount": 298
  },
  {
    "title": "The Murder of Roger Ackroyd",
    "detective": "Hercule Poirot",
    "publishDate": 1926,
    "order": 3,
    "murderMethods": ["Stabbing"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 312
  },
  {
    "title": "The Big Four",
    "detective": "Hercule Poirot",
    "publishDate": 1927,
    "order": 4,
    "murderMethods": ["Poison", "Electrocution", "Throat Cut", "Hit and Run"],
    "deathCount": 4,
    "characters": ["Inspector Japp", "Captain Hastings"],
    "pageCount": 282
  },
  {
    "title": "The Mystery of the Blue Train",
    "detective": "Hercule Poirot",
    "publishDate": 1928,
    "order": 5,
    "murderMethods": ["Strangling"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 296
  },
  {
    "title": "Peril at End House",
    "detective": "Hercule Poirot",
    "publishDate": 1932,
    "order": 6,
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": ["Inspector Japp", "Captain Hastings"],
    "pageCount": 270
  },
  {
    "title": "Lord Edgware Dies",
    "detective": "Hercule Poirot",
    "publishDate": 1933,
    "order": 7,
    "murderMethods": ["Poison", "Stabbing"],
    "deathCount": 2,
    "characters": ["Inspector Japp", "Captain Hastings"],
    "pageCount": 256
  },
  {
    "title": "Murder on the Orient Express",
    "detective": "Hercule Poirot",
    "publishDate": 1934,
    "order": 8,
    "murderMethods": ["Stabbing"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Three Act Tragedy",
    "detective": "Hercule Poirot",
    "publishDate": 1935,
    "order": 9,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 279
  },
  {
    "title": "Death in the Clouds",
    "detective": "Hercule Poirot",
    "publishDate": 1935,
    "order": 10,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": ["Inspector Japp"],
    "pageCount": 304
  },
  {
    "title": "The ABC Murders",
    "detective": "Hercule Poirot",
    "publishDate": 1936,
    "order": 11,
    "murderMethods": ["Stabbing", "Blow to the Head", "Strangling"],
    "deathCount": 3,
    "characters": ["Inspector Japp", "Captain Hastings"],
    "pageCount": 256
  },
  {
    "title": "Murder in Mesopotamia",
    "detective": "Hercule Poirot",
    "publishDate": 1936,
    "order": 12,
    "murderMethods": ["Poison", "Blow to the Head"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 288
  },
  {
    "title": "Cards on the Table",
    "detective": "Hercule Poirot",
    "publishDate": 1936,
    "order": 13,
    "murderMethods": ["Poison", "Gun Shot", "Drowning", "Stabbing"],
    "deathCount": 4,
    "characters": ["Ariadne Oliver", "Superintendent Battle", "Colonel Race"],
    "pageCount": 288
  },
  {
    "title": "Dumb Witness",
    "detective": "Hercule Poirot",
    "publishDate": 1937,
    "order": 14,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": ["Captain Hastings"],
    "pageCount": 320
  },
  {
    "title": "Death on the Nile",
    "detective": "Hercule Poirot",
    "publishDate": 1937,
    "order": 15,
    "murderMethods": ["Stabbing", "Gun Shot"],
    "deathCount": 2,
    "characters": ["Colonel Race"],
    "pageCount": 288
  },
  {
    "title": "Appointment with Death",
    "detective": "Hercule Poirot",
    "publishDate": 1938,
    "order": 16,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Hercule Poirot's Christmas",
    "detective": "Hercule Poirot",
    "publishDate": 1938,
    "order": 17,
    "murderMethods": ["Throat Cut"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Sad Cypress",
    "detective": "Hercule Poirot",
    "publishDate": 1940,
    "order": 18,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "One, Two, Buckle My Shoe",
    "detective": "Hercule Poirot",
    "publishDate": 1940,
    "order": 19,
    "murderMethods": ["Poison", "Blow to the Head", "Gun Shot"],
    "deathCount": 3,
    "characters": ["Inspector Japp"],
    "pageCount": 256
  },
  {
    "title": "Evil Under The Sun",
    "detective": "Hercule Poirot",
    "publishDate": 1941,
    "order": 20,
    "murderMethods": ["Strangling"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Five Little Pigs",
    "detective": "Hercule Poirot",
    "publishDate": 1942,
    "order": 21,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 234
  },
  {
    "title": "The Hollow",
    "detective": "Hercule Poirot",
    "publishDate": 1946,
    "order": 22,
    "murderMethods": ["Poison", "Gun Shot"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 279
  },
  {
    "title": "Taken At The Flood",
    "detective": "Hercule Poirot",
    "publishDate": 1945,
    "order": 23,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 242
  },
  {
    "title": "Mrs McGinty's Dead",
    "detective": "Hercule Poirot",
    "publishDate": 1952,
    "order": 24,
    "murderMethods": ["Blow to the Head", "Strangling"],
    "deathCount": 2,
    "characters": ["Ariadne Oliver"],
    "pageCount": 243
  },
  {
    "title": "After the Funeral",
    "detective": "Hercule Poirot",
    "publishDate": 1953,
    "order": 25,
    "murderMethods": ["Blow to the Head"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 244
  },
  {
    "title": "Hickory Dickory Dock",
    "detective": "Hercule Poirot",
    "publishDate": 1955,
    "order": 26,
    "murderMethods": ["Poison", "Blow to the Head"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 192
  },
  {
    "title": "Dead Man's Folly",
    "detective": "Hercule Poirot",
    "publishDate": 1956,
    "order": 28,
    "murderMethods": ["Strangling", "Drowning"],
    "deathCount": 2,
    "characters": ["Ariadne Oliver"],
    "pageCount": 216
  },
  {
    "title": "Cat Among the Pigeons",
    "detective": "Hercule Poirot",
    "publishDate": 1959,
    "order": 29,
    "murderMethods": ["Blow to the Head", "Gun Shot"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "The Clocks",
    "detective": "Hercule Poirot",
    "publishDate": 1963,
    "order": 30,
    "murderMethods": ["Poison", "Stabbing", "Strangling"],
    "deathCount": 3,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Third Girl",
    "detective": "Hercule Poirot",
    "publishDate": 1966,
    "order": 31,
    "murderMethods": ["Stabbing", "Falling/Being Pushed"],
    "deathCount": 2,
    "characters": ["Ariadne Oliver"],
    "pageCount": 256
  },
  {
    "title": "Hallowe’en Party",
    "detective": "Hercule Poirot",
    "publishDate": 1969,
    "order": 32,
    "murderMethods": ["Stabbing", "Strangling", "Drowning", "Heart Attack"],
    "deathCount": 4,
    "characters": ["Ariadne Oliver"],
    "pageCount": 256
  },
  {
    "title": "Elephants Can Remember",
    "detective": "Hercule Poirot",
    "publishDate": 1972,
    "order": 33,
    "murderMethods": ["Falling/Being Pushed", "Gun Shot"],
    "deathCount": 2,
    "characters": ["Ariadne Oliver"],
    "pageCount": 256
  },
  {
    "title": "Curtain: Poirot’s Last Case",
    "detective": "Hercule Poirot",
    "publishDate": 1975,
    "order": 34,
    "murderMethods": ["Poison", "Gun Shot"],
    "deathCount": 2,
    "characters": ["Captain Hastings"],
    "pageCount": 224
  },
  {
    "title": "The Murder at the Vicarage",
    "detective": "Miss Marple",
    "publishDate": 1930,
    "order": 1,
    "murderMethods": ["Gun Shot"],
    "deathCount": 0,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "The Body in the Library",
    "detective": "Miss Marple",
    "publishDate": 1942,
    "order": 2,
    "murderMethods": ["Strangling", "Body Burnt"],
    "deathCount": 2,
    "characters": ["Arthur/Dolly Bantrys", "Sir Henry Clithering"],
    "pageCount": 245
  },
  {
    "title": "The Moving Finger",
    "detective": "Miss Marple",
    "publishDate": 1942,
    "order": 3,
    "murderMethods": ["Poison", "Blow to the Head"],
    "deathCount": 0,
    "characters": [""],
    "pageCount": 229
  },
  {
    "title": "Sleeping Murder",
    "detective": "Miss Marple",
    "publishDate": 1976,
    "order": 4,
    "murderMethods": ["Strangling"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 224
  },
  {
    "title": "A Murder Is Announced",
    "detective": "Miss Marple",
    "publishDate": 1950,
    "order": 5,
    "murderMethods": ["Strangling", "Gun Shot"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "They Do it with Mirrors",
    "detective": "Miss Marple",
    "publishDate": 1952,
    "order": 6,
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 187
  },
  {
    "title": "A Pocket Full of Rye",
    "detective": "Miss Marple",
    "publishDate": 1953,
    "order": 7,
    "murderMethods": ["Poison", "Gun Shot", "Strangling"],
    "deathCount": 3,
    "characters": [""],
    "pageCount": 192
  },
  {
    "title": "4.50 From Paddington",
    "detective": "Miss Marple",
    "publishDate": 1957,
    "order": 9,
    "murderMethods": ["Poison", "Strangling"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "The Mirror Crack'd from Side to Side",
    "detective": "Miss Marple",
    "publishDate": 1962,
    "order": 10,
    "murderMethods": ["Poison", "Strangling"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "A Caribbean Mystery",
    "detective": "Miss Marple",
    "publishDate": 1964,
    "order": 11,
    "murderMethods": ["Blow to the Head", "Gun Shot"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "At Bertram's Hotel",
    "detective": "Miss Marple",
    "publishDate": 1965,
    "order": 12,
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Nemesis",
    "detective": "Miss Marple",
    "publishDate": 1971,
    "order": 13,
    "murderMethods": ["Poison", "Strangling", "Crushed"],
    "deathCount": 3,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "The Secret Adversary",
    "detective": "Tommy and Tuppence",
    "publishDate": 1922,
    "order": 1,
    "murderMethods": [""],
    "deathCount": 0,
    "characters": [""],
    "pageCount": 320
  },
  {
    "title": "N or M",
    "detective": "Tommy and Tuppence",
    "publishDate": 1941,
    "order": 2,
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 289
  },
  {
    "title": "By the Pricking of My Thumbs",
    "detective": "Tommy and Tuppence",
    "publishDate": 1968,
    "order": 3,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Postern of Fate",
    "detective": "Tommy and Tuppence",
    "publishDate": 1973,
    "order": 4,
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "The Pale Horse",
    "detective": "Others",
    "publishDate": 1961,
    "order": "",
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": ["Ariadne Oliver"],
    "pageCount": 256
  },
  {
    "title": "The Man in the Brown Suit",
    "detective": "Others",
    "publishDate": 1924,
    "order": "",
    "murderMethods": ["Stabbing", "Eletrocution"],
    "deathCount": 2,
    "characters": ["Colonel Race"],
    "pageCount": 312
  },
  {
    "title": "The Secret of Chimneys",
    "detective": "Others",
    "publishDate": 1925,
    "order": "",
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": ["Superintendent Battle", "Bundle Brent"],
    "pageCount": 310
  },
  {
    "title": "The Seven Dials Mystery",
    "detective": "Others",
    "publishDate": 1929,
    "order": "",
    "murderMethods": ["Poison", "Gun Shot"],
    "deathCount": 2,
    "characters": ["Superintendent Battle", "Bundle Brent"],
    "pageCount": 282
  },
  {
    "title": "The Sittaford Mystery",
    "detective": "Others",
    "publishDate": 1931,
    "order": "",
    "murderMethods": ["Blow to the Head"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 308
  },
  {
    "title": "Why Didn’t They Ask Evans?",
    "detective": "Others",
    "publishDate": 1933,
    "order": "",
    "murderMethods": ["Falling/Being Pushed", "Gun Shot"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "And Then There Were None",
    "detective": "Others",
    "publishDate": 1939,
    "order": "",
    "murderMethods": ["Poison, Blow to the Head", "Strangling", "Drowning", "Gun Shot", "Crushed"],
    "deathCount": 6,
    "characters": [""],
    "pageCount": 272
  },
  {
    "title": "Murder is Easy",
    "detective": "Others",
    "publishDate": 1938,
    "order": "",
    "murderMethods": ["Poison", "Blow to the Head", "Falling/Being Pushed", "Hit and Run", "Septicemia"],
    "deathCount": 5,
    "characters": ["Superintendent Battle"],
    "pageCount": 256
  },
  {
    "title": "Towards Zero",
    "detective": "Others",
    "publishDate": 1944,
    "order": "",
    "murderMethods": ["Blow to the Head", "Heart Attack"],
    "deathCount": 2,
    "characters": ["Superintendent Battle"],
    "pageCount": 242
  },
  {
    "title": "Death Comes As The End",
    "detective": "Others",
    "publishDate": 1944,
    "order": "",
    "murderMethods": ["Poison", "Falling/Being Pushed", "Drowning", "Suffocation", "Bow and Arrow Shooting"],
    "deathCount": 5,
    "characters": [""],
    "pageCount": 223
  },
  {
    "title": "Sparkling Cyanide",
    "detective": "Others",
    "publishDate": 1944,
    "order": "",
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": ["Colonel Race"],
    "pageCount": 209
  },
  {
    "title": "Crooked House",
    "detective": "Others",
    "publishDate": 1948,
    "order": "",
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 211
  },
  {
    "title": "They Came to Baghdad",
    "detective": "Others",
    "publishDate": 1951,
    "order": "",
    "murderMethods": ["Stabbing"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Destination Unknown",
    "detective": "Others",
    "publishDate": 1954,
    "order": "",
    "murderMethods": ["Poison"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 192
  },
  {
    "title": "Ordeal By Innocence",
    "detective": "Others",
    "publishDate": 1958,
    "order": "",
    "murderMethods": ["Stabbing", "Blow to the Head"],
    "deathCount": 2,
    "characters": [""],
    "pageCount": 256
  },
  {
    "title": "Endless Night",
    "detective": "Others",
    "publishDate": 1967,
    "order": "",
    "murderMethods": ["Poison", "Strangling", "Falling/Being Pushed"],
    "deathCount": 3,
    "characters": [""],
    "pageCount": 224
  },
  {
    "title": "Passenger To Frankfurt",
    "detective": "Others",
    "publishDate": 1970,
    "order": "",
    "murderMethods": ["Gun Shot"],
    "deathCount": 1,
    "characters": [""],
    "pageCount": 256
  }
];

const characters = [
  { name: "Captain Hastings", avatar: "https://api.adorable.io/avatars/100/chastings@adorable.io.png" },
  { name: "Inspector Japp", avatar: "https://api.adorable.io/avatars/100/japp@adorable.io.png" },
  { name: "Ariadne Oliver", avatar: "https://api.adorable.io/avatars/100/ariadne@adorable.io.png" },
  { name: "Superintendent Battle", avatar: "https://api.adorable.io/avatars/100/battle@adorable.io.png" },
  { name: "Colonel Race", avatar: "https://api.adorable.io/avatars/100/race@adorable.io.png" },
  { name: "Arthur/Dolly Bantrys", avatar: "https://api.adorable.io/avatars/100/bantrys@adorable.io.png" },
  { name: "Sir Henry Clithering", avatar: "https://api.adorable.io/avatars/100/sirhenryclithering@adorable.io.png" },
  { name: "Bundle Brent", avatar: "https://api.adorable.io/avatars/100/missbundle@adorable.io.png" },
];

const detectives = [
  {
    name: "Hercule Poirot",
    avatar: "https://api.adorable.io/avatars/100/poirot@adorable.io.png"
  },
  {
    name: "Miss Marple",
    avatar: "https://api.adorable.io/avatars/100/missmarple@adorable.io.png"
  },
  {
    name: "Others",
    avatar: "https://api.adorable.io/avatars/100/others@adorable.io.png"
  }
]

const murderMethods = [
  {icon: "poison", method: "Poison"}, 
  {icon: "stabbing", method: "Stabbing"}, 
  {icon: "electro", method: "Electrocution"}, 
  {icon: "throat_cut", method: "Throat Cut"}, 
  {icon: "hit", method: "Hit and Run"}, 
  {icon: "gun", method: "Gun Shot"}, 
  {icon: "blow", method: "Blow to the Head"}, 
  {icon: "strangling", method: "Strangling"}, 
  {icon: "drown", method: "Drowning"}, 
  {icon: "fall", method: "Falling/Being Pushed"}, 
  {icon: "heart", method: "Heart Attack"}, 
  {icon: "brunt", method: "Body Burnt"}, 
  {icon: "crushed", method: "Crushed"}, 
  {icon: "septicemia", method: "Septicemia"}, 
  {icon: "suffocate", method: "Suffocation"}
]

export {
  data,
  characters,
  detectives,
  murderMethods
};






