
// ==================================
// 1. FIND OUR HTML ELEMENTS
// ==================================

const envelope = document.getElementById("envelope");

const button = document.getElementById("openButton");

const reveal = document.getElementById("reveal");

const enterButton = document.getElementById("enterGarden");

const main = document.querySelector(".invitation");

const garden = document.getElementById("garden");


// ==================================
// 2. OPEN THE INVITATION
// ==================================

function openInvitation() {

    // Prevent opening more than once

    if (envelope.classList.contains("open")) {
        return;
    }

    // Open the envelope

    envelope.classList.add("open");

    // Reveal the map

    reveal.classList.add("visible");

    // Update button text

    button.textContent = "Your garden awaits ♡";

    // Disable button

    button.disabled = true;

    // Update accessibility information

    envelope.setAttribute("aria-expanded", "true");

    reveal.setAttribute("aria-hidden", "false");

}


// ==================================
// 3. BUTTON CLICK
// ==================================

button.addEventListener("click", openInvitation);


// ==================================
// 4. ENVELOPE CLICK
// ==================================

envelope.addEventListener("click", openInvitation);


// ==================================
// 5. KEYBOARD ACCESS
// ==================================

envelope.addEventListener("keydown", function(event) {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openInvitation();

    }

});
// ==================================
// 6. ENTER THE GARDEN
// ==================================
enterButton.addEventListener("click", function() {

    // Fade out the treasure map
    document.body.classList.add("fade-out");

    // Wait 700 milliseconds
    setTimeout(function() {

        // Enter the garden
        main.classList.add("entered");

        // Return to the top of the page
        window.scrollTo(0, 0);

        // Fade the garden into view
        document.body.classList.remove("fade-out");

    }, 700);

});
/* ==============================
   FLOWER LOVE NOTES
============================== */

const flowerMessages = {
    "hibiscus": {
        title: "Miss Hibiscus 🌺",
        message: "Of all the flowers in the world, this one will always remind me of you."
    },

    "protea": {
        title: "Protea",
        message: "This one has Greek roots, just like you! So I guess this one's for all your transformations, big and small. I hope you never stop discovering new versions of yourself. ♡"
    },

    "bougainvillea": {
        title: "Bougainvillea",
        message: "I saw these flowers and thought they were beautiful. And naturally, I wanted you to have them. ♡"
    },

    "jasmine": {
        title: "νυχτολούλουδο",
        message: "Funny how a flower can hold an entire memory. For me, νυχτολούλουδο will always smell like summer evenings, bike rides around the island, and being close to you. ♡"
    },

    "tiger-lily": {
        title: "Tiger Lily",
        message: "For your adventurous spirit and all the places we'll discover together."
    },

    "sunflower": {
        title: "Sunflower",
        message: "Remember when you got yellow on that personality test? You're basically sunshine in human form.There's something so beautiful about the way you approach life with playfulness and optimism. I hope you never lose that part of yourself. The world is brighter with it, and so is mine."
    },

    "orchid": {
        title: "Orchid",
        message: "Some things are simply one of a kind. Like you.Orchids are apparently a symbol of rare beauty, so naturally I had to get one for my rare little specimen. 😂"
    },

    "carnation": {
        title: "Carnation",
        message: "This one's a little thank you. For the laughs, the adventures, the silly conversations, and all the little things you do that make my days better. I notice more than you think. ♡"
    },

    "calla-lily": {
        title: "Calla Lily",
        message: "Calla lilies symbolize new beginnings, and I like that. There's still so much of life we haven't experienced, so many places we haven't seen, and so many memories we haven't made. I hope we get to discover a whole lot of them together. "
    },

    "balloon-flower": {
        title: "Balloon Flower",
        message: "A tiny balloon flower for a love that's anything but tiny. To infinity and beyond, my favourite human. "
    },

    "venus-flytrap": {
        title: "Venus Flytrap",
        message: "Psst... between you and me, I think this one's plotting something. I've caught it looking at the other flowers suspiciously. Keep an eye on it, will you? 👀"
    },

    "spider-lily": {
        title: "Spider Lily",
        message: "Well, well, well... look what you've found!(an easter egg aka my tattoo) No matter how far life takes us, there will always be a little piece of me with you."
    }
};

const flowerNote = document.getElementById("flowerNote");
const noteTitle = document.getElementById("noteTitle");
const noteMessage = document.getElementById("noteMessage");
const closeNote = document.getElementById("closeNote");

const flowers = document.querySelectorAll(".garden-flower");

let previousFocus = null;

flowers.forEach(function(flower) {
    flower.setAttribute("role", "button");
    flower.setAttribute("tabindex", "0");

    const flowerType = Object.keys(flowerMessages).find(function(type) {
        return flower.classList.contains(type);
    });

    if (!flowerType) return;

    flower.setAttribute(
        "aria-label",
        "Read the " + flowerMessages[flowerType].title + " note"
    );

    function showNote() {
        previousFocus = document.activeElement;

        noteTitle.textContent = flowerMessages[flowerType].title;
        noteMessage.textContent = flowerMessages[flowerType].message;

        flowerNote.classList.add("visible");
        flowerNote.setAttribute("aria-hidden", "false");
        closeNote.focus();
    }

    flower.addEventListener("click", showNote);

    flower.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showNote();
        }
    });
});

function hideNote() {
    flowerNote.classList.remove("visible");
    flowerNote.setAttribute("aria-hidden", "true");

    if (previousFocus) previousFocus.focus();
}

closeNote.addEventListener("click", hideNote);

flowerNote.addEventListener("click", function(event) {
    if (event.target === flowerNote) {
        hideNote();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" &&
        flowerNote.classList.contains("visible")) {
        hideNote();
    }
});