const data = [
  {
    title: "The Mysterious Affair at Styles",
    pageCount: 300,
    publishDate: 1920,
    deathCount: 4,
    murderMethods: ["poison"],
    detective: "Hercule Poirot",
    characters: ["Ariadne Oliver", "Captain Hastings"]
  },
  {
    title: "The Murder on the Links",
    pageCount: 272,
    publishDate: 1923,
    deathCount: 1,
    murderMethods: ["poison", "stabbing"],
    detective: "Hercule Poirot",
    characters: ["Ariadne Oliver"]
  },
  {
    title: "The Murder of Roger Ackroyd",
    pageCount: 256,
    publishDate: 1946,
    deathCount: 1,
    murderMethods: ["stabbing"],
    detective: "Hercule Poirot",
    characters: ["Inspector Japp", "Captain Hastings"]
  },
  {
    title: "The Big Four",
    pageCount: 304,
    publishDate: 1947,
    deathCount: 4,
    murderMethods: ["gun shot"],
    detective: "Miss Marple",
    characters: ["Raymond West"]
  },
  {
    title: "The Mystery of the Blue Train",
    pageCount: 296,
    publishDate: 1928,
    deathCount: 6,
    murderMethods: ["stabbing", "poison"],
    detective: "Miss Marple",
    characters: ["Raymond West", "The Bantrys"]
  },
  {
    title: "Peril at End House",
    pageCount: 270,
    publishDate: 1933,
    deathCount: 2,
    murderMethods: ["gun shot", "blow to the head"],
    detective: "Miss Marple",
    characters: ["The Bantrys"]
  },
  {
    title: "Lord Edgware Dies",
    pageCount: 256,
    publishDate: 1935,
    deathCount: 1,
    murderMethods: ["drowning", "gun shot"],
    detective: "Hercule Poirot",
    characters: ["Captain Hastings"]
  },
  {
    title: "Endless Night",
    pageCount: 224,
    publishDate: 1952,
    deathCount: 4,
    murderMethods: ["drowning", "gun shot"],
    detective: "Others",
    characters: [""]
  },
  {
    title: "The Mirror Crack'd from Side to Side",
    pageCount: 501,
    publishDate: 1967,
    deathCount: 2,
    murderMethods: ["stabbing", "poison"],
    detective: "Others",
    characters: ["Colonel Race"]
  }
];

const characters = [
  { name: "Captain Hastings", avatar: "https://api.adorable.io/avatars/100/chastings@adorable.io.png" },
  { name: "Inspector Japp", avatar: "https://api.adorable.io/avatars/100/japp@adorable.io.png" },
  { name: "Ariadne Oliver", avatar: "https://api.adorable.io/avatars/100/ariadne@adorable.io.png" },
  { name: "Superintendent Battle", avatar: "https://api.adorable.io/avatars/100/battle@adorable.io.png" },
  { name: "Colonel Race", avatar: "https://api.adorable.io/avatars/100/race@adorable.io.png" },
  { name: "The Bantrys", avatar: "https://api.adorable.io/avatars/100/bantrys@adorable.io.png" },
  { name: "Sir Henry Clithering", avatar: "https://api.adorable.io/avatars/100/sirhenryclithering@adorable.io.png" },
  { name: "Lady Bundle Brent", avatar: "https://api.adorable.io/avatars/100/missbundle@adorable.io.png" },
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
  {icon: "face", method: "poison"}, 
  {icon: "star", method: "stabbing"}, 
  {icon: "face", method: "electrocution"}, 
  {icon: "face", method: "throat cut"}, 
  {icon: "face", method: "hit and run"}, 
  {icon: "face", method: "gun shot"}, 
  {icon: "face", method: "blow to the head"}, 
  {icon: "face", method: "strangling"}, 
  {icon: "face", method: "drowning"}, 
  {icon: "face", method: "falling/being pushed"}, 
  {icon: "face", method: "heart attack"}, 
  {icon: "face", method: "body burnt"}, 
  {icon: "face", method: "crushed"}, 
  {icon: "face", method: "septicemia"}, 
  {icon: "face", method: "suffocation"}
]

export {
  data,
  characters,
  detectives,
  murderMethods
};






