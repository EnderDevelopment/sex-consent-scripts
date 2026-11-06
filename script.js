const scenes = {
  shore: {
    title: "The shore at dusk",
    text: "Rain stipples the harbor. A lantern blinks from the old signal house, although the building has been empty for years. Beside you, Mina studies a folded map.",
    choices: [
      { label: "Ask Mina what the map shows", next: "map" },
      { label: "Walk to the signal house", next: "door" },
      { label: "Search the tide pools for clues", next: "pools" }
    ]
  },
  map: {
    title: "A map with a missing corner",
    text: "Mina turns the paper toward the light. A route ends at a mark shaped like a crescent moon. The missing corner seems to have been torn away recently.",
    choices: [
      { label: "Follow the marked route together", next: "cove" },
      { label: "Ask Mina to wait while you inspect the map", next: "mapInspect" },
      { label: "Head to the signal house with the map", next: "door" }
    ]
  },
  door: {
    title: "The signal house door",
    text: "The iron door is shut, but a narrow beam of gold spills beneath it. Three knocks sound from somewhere inside. Mina looks to you for a decision.",
    choices: [
      { label: "Knock three times and wait", next: "answer" },
      { label: "Look for another entrance", next: "back" },
      { label: "Call out to whoever is inside", next: "voice" }
    ]
  },
  pools: {
    title: "Things left by the tide",
    text: "Between the rocks you find a brass key and a glass bead that glows faintly blue. Their surfaces are clean, as if they were placed here moments ago.",
    choices: [
      { label: "Take the key to the signal house", next: "key" },
      { label: "Show the glowing bead to Mina", next: "bead" },
      { label: "Leave the objects and follow the shoreline", next: "shoreline" }
    ]
  },
  mapInspect: {
    title: "The map's hidden mark",
    text: "Held against the lantern light, the paper reveals a second route beneath the ink. It leads to a sheltered cove and a note: 'Bring a light that remembers.'",
    choices: [
      { label: "Tell Mina about the hidden route", next: "cove" },
      { label: "Search for a light that remembers", next: "bead" }
    ]
  },
  cove: {
    title: "The sheltered cove",
    text: "A stone arch frames the dark water. Under it rests a small lantern with a blue glass pane. The flame inside pulses gently, matching the rhythm of the waves.",
    choices: [
      { label: "Light the lantern and approach the arch", next: "arch" },
      { label: "Ask Mina to read the note aloud", next: "note" },
      { label: "Carry the lantern back to the signal house", next: "key" }
    ]
  },
  key: {
    title: "A lock that fits",
    text: "The brass key turns smoothly. Beyond the door, a spiral stair climbs into darkness. The blue bead in your pocket gives one quiet flash.",
    choices: [
      { label: "Climb the stairs with Mina", next: "stairs" },
      { label: "Use the blue bead to light the stairs", next: "stairsLight" },
      { label: "Close the door and return to the shore", next: "shore" }
    ]
  },
  bead: {
    title: "A light that remembers",
    text: "The bead brightens in Mina's hand. She recognizes it from an old harbor story: a memory-light, said to guide someone home when the way has been forgotten.",
    choices: [
      { label: "Bring the memory-light to the signal house", next: "stairsLight" },
      { label: "Follow its glow toward the cove", next: "arch" }
    ]
  },
  shoreline: {
    title: "The long way around",
    text: "At the end of the beach, a trail climbs above the harbor. From the ridge, you can see the signal house window blinking in a pattern: two short flashes, one long.",
    choices: [
      { label: "Return and answer the signal", next: "answer" },
      { label: "Follow the ridge trail to its end", next: "ridge" }
    ]
  },
  answer: {
    title: "A reply in the window",
    text: "You tap twice, then once. The golden light steadies. A voice from inside says, 'At last. Which way did the tide leave the door?'",
    choices: [
      { label: "Describe the route to the sheltered cove", next: "cove" },
      { label: "Ask who is speaking", next: "voice" },
      { label: "Say you came to help", next: "welcome" }
    ]
  },
  voice: {
    title: "Someone answers",
    text: "A calm voice replies, 'I keep the harbor's last light. It will go out before moonrise unless someone remembers its name.' Mina unfolds the map again.",
    choices: [
      { label: "Ask Mina to read the name on the map", next: "name" },
      { label: "Offer the glowing bead as a new light", next: "beadEnding" }
    ]
  },
  back: {
    title: "Around the building",
    text: "Behind the house, a narrow window is open. On the sill is a little notebook, its pages held down by a smooth blue stone.",
    choices: [
      { label: "Read the notebook beside the window", next: "name" },
      { label: "Take the stone and return to the door", next: "key" }
    ]
  },
  arch: {
    title: "The moonlit arch",
    text: "The lantern reveals words carved into the stone: 'Say what you wish to keep, and let the tide carry the rest.' Mina waits beside you as the water rises.",
    choices: [
      { label: "Tell Mina you want to keep the harbor's stories", next: "storyEnding" },
      { label: "Ask Mina what she wants to keep", next: "minaEnding" },
      { label: "Set the lantern beneath the arch and listen", next: "quietEnding" }
    ]
  },
  note: {
    title: "The note remembered",
    text: "Mina reads the old handwriting: 'A light is not a flame. It is a promise passed from one keeper to the next.' The lantern brightens as she speaks.",
    choices: [
      { label: "Carry the lantern to the signal house", next: "welcome" },
      { label: "Ask Mina to become the next keeper", next: "minaEnding" }
    ]
  },
  stairs: {
    title: "The keeper's room",
    text: "At the top, an old keeper sits beside a dark lamp. He smiles when he sees you. 'The harbor can find its way now,' he says, and offers Mina the lamp's empty glass.",
    choices: [
      { label: "Accept the glass and keep the harbor stories", next: "storyEnding" },
      { label: "Invite Mina to choose what happens next", next: "minaEnding" }
    ]
  },
  stairsLight: {
    title: "The stairs wake up",
    text: "The blue light fills the stairwell. At the top, the keeper recognizes it and whispers its name: 'Home.' The dark lamp catches the glow, and the harbor lights answer one by one.",
    choices: [
      { label: "Stay with Mina to watch the lights return", next: "lightEnding" },
      { label: "Ask the keeper to tell you the lantern's history", next: "storyEnding" }
    ]
  },
  ridge: {
    title: "The ridge above the harbor",
    text: "The trail ends at a watch post with a clear view of every harbor light. The signal house blinks again, waiting for your answer.",
    choices: [
      { label: "Return to answer the signal", next: "answer" },
      { label: "Watch the lights until the tide turns", next: "quietEnding" }
    ]
  },
  name: {
    title: "The name in the old ink",
    text: "Mina reads the faded word: 'Home.' The lantern gives a soft chime. Somewhere upstairs, a lamp begins to glow.",
    choices: [
      { label: "Take the name to the keeper upstairs", next: "stairsLight" },
      { label: "Say the name together at the doorway", next: "welcome" }
    ]
  },
  welcome: {
    title: "The keeper opens the door",
    text: "The old keeper welcomes you into the warm signal room. He gives Mina a small brass compass and asks her to help guide the next boats safely into harbor.",
    choices: [
      { label: "Help Mina take up the keeper's work", next: "minaEnding" },
      { label: "Ask the keeper to teach you the harbor signals", next: "lightEnding" }
    ]
  },
  storyEnding: {
    title: "Ending: Keeper of stories",
    text: "The harbor light shines through the night. You and Mina gather the stories of the old keepers and leave them in the signal house for whoever comes next.",
    ending: true
  },
  minaEnding: {
    title: "Ending: Mina's new course",
    text: "Mina accepts the compass. The next evening, her first signal guides a fishing boat safely home. You stand on the shore together as the harbor answers with light.",
    ending: true
  },
  quietEnding: {
    title: "Ending: The quiet tide",
    text: "You sit beneath the arch until moonrise. The water carries the old words out to sea, while the lantern keeps one steady flame for everyone finding their way home.",
    ending: true
  },
  lightEnding: {
    title: "Ending: The harbor remembers",
    text: "One by one, the harbor lights return. Mina learns the keeper's signals, and you learn the routes between them. No ship has to search alone tonight.",
    ending: true
  },
  beadEnding: {
    title: "Ending: A light shared",
    text: "The keeper places the blue bead in the old lamp. Its glow joins the golden flame, and the signal house shines with a light that belongs to everyone who helped carry it.",
    ending: true
  }
};

const titleElement = document.querySelector("#scene-title");
const textElement = document.querySelector("#scene-text");
const choicesElement = document.querySelector("#choices");
const logElement = document.querySelector("#log");
const emptyLogElement = document.querySelector("#log-empty");
const restartButton = document.querySelector("#restart");
let currentScene = "shore";
let history = [];

function renderScene() {
  const scene = scenes[currentScene];
  titleElement.textContent = scene.title;
  textElement.textContent = scene.text;
  choicesElement.replaceChildren();
  for (const choice of scene.choices || []) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice.label;
    button.setAttribute("aria-label", `${choice.label}. Go to ${scenes[choice.next].title}.`);
    button.addEventListener("click", () => {
      history.push({ scene: scene.title, choice: choice.label });
      currentScene = choice.next;
      renderScene();
    });
    choicesElement.append(button);
  }
  if (scene.ending) {
    const note = document.createElement("p");
    note.className = "ending-note";
    note.textContent = "Story complete. Restart to explore a different path.";
    choicesElement.append(note);
  }
  renderHistory();
}

function renderHistory() {
  logElement.replaceChildren();
  emptyLogElement.hidden = history.length > 0;
  for (const entry of history) {
    const item = document.createElement("li");
    item.textContent = `${entry.scene}: ${entry.choice}`;
    logElement.append(item);
  }
}

restartButton.addEventListener("click", () => {
  currentScene = "shore";
  history = [];
  renderScene();
});

renderScene();
