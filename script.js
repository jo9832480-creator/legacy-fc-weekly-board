 /* ============================================================
   LEGACY FC — OFFICIAL WEEKLY BOARD
   WEEK 1 DATA
   ============================================================ */

const weeklyData = {

    week: "Week 1",

    /* ========================================================
       TEAM OF THE WEEK
       EXACTLY 4 PLAYERS
       ======================================================== */

    teamOfTheWeek: [

        {
            number: 5,
            position: "DEF",
            name: "JOSHUA",
            x: 50,
            y: 68
        },

        {
            number: 8,
            position: "MID",
            name: "SOMTO",
            x: 50,
            y: 50
        },

        {
            number: 10,
            position: "MID",
            name: "WINNER",
            x: 50,
            y: 32
        },

        {
            number: 9,
            position: "ATT",
            name: "SIR MIKE",
            x: 50,
            y: 14
        }

    ],

    /* ========================================================
       TEAM STATISTICS
       ======================================================== */

    cleanSheets: 6,
    goalsScored: 14,

    /* ========================================================
       SQUAD
       ======================================================== */

    squad: [

        { name: "JAMES", position: "Defender" },
        { name: "ADETOLA", position: "Defender" },
        { name: "GABRIEL", position: "Defender" },
        { name: "ALATIC DC", position: "Defender" },
        { name: "BABARICK", position: "Defender" },
        { name: "BROS JACK", position: "Defender" },

        { name: "DAVID", position: "Midfielder" },
        { name: "ABEL", position: "Midfielder", captain: true },
        { name: "JOSHUA", position: "Midfielder" },
        { name: "DREMMZ", position: "Midfielder" },
        { name: "WINNER", position: "Midfielder" },
        { name: "MOSHOOD", position: "Midfielder" },
        { name: "BROS LUCKY", position: "Midfielder" },
        { name: "PHILIP", position: "Midfielder" },
        { name: "MAZI", position: "Midfielder" },
        { name: "BROS TOBI", position: "Midfielder" },
        { name: "ABDUL", position: "Midfielder" },
        { name: "RAZAQ", position: "Midfielder" },
        { name: "MILLS", position: "Midfielder" },
        { name: "NUGWA", position: "Midfielder" },
        { name: "VOLTAGE", position: "Midfielder" },

        { name: "SAMUEL", position: "Attacker" },
        { name: "SIRMIKE", position: "Attacker" },
        { name: "SHARPMAN", position: "Attacker" },
        { name: "BALLO JR", position: "Attacker" },
        { name: "BROS CASH", position: "Attacker" },
        { name: "PEDRO", position: "Attacker" },
        { name: "ELVIS", position: "Attacker" },
        { name: "SOMTO", position: "Attacker" },
        { name: "VETIGO", position: "Attacker" }

    ],

    /* ========================================================
       COACHING STAFF
       ======================================================== */

    staff: [

        {
            name: "JOHNNY",
            role: "Head Coach"
        },

        {
            name: "SHARPMAN",
            role: "Club President"
        },

        {
            name: "ABEL",
            role: "CAPTAIN"
        }

    ],

    /* ========================================================
       MONTHLY HONOURS
       ======================================================== */

    honours: {

        month: "July 2026",

        description: "Awarded by the coaching panel",

        midfielder: {

            code: "MID",

            title: "Midfielder of the Month",

            contenders: [
               "Winner",
               "Joshua",
                "Philip",
                "Bros Tobi",
                "Mazi",
               "David",
               "Somto",
               "Voltage",
               "Nugwa"
            ],

            winners: []

        },

        defender: {

            code: "DEF",

            title: "Defender of the Month",

            contenders: [
                "Alatic DC",
                "James",
                "Adetola",
                "Bros Jack",
                "Gabriel",
                "Babarick"
            ],

            winners: []

        },

        attacker: {

            code: "ATT",

            title: "Attacker of the Month",

            contenders: [
                "Sir Mike",
                "Sharpman",
                "Samuel",
                "Ballo",
                "Pedro",
                "Bros Cash"
            ],

            winners: []

        }

    },

    /* ========================================================
       GOAL SCORERS
       TOTAL = 14
       ======================================================== */

    goals: [

        {
            name: "Somto",
            value: 5
        },

        {
            name: "Winner",
            value: 3
        },

        {
            name: "Sir Mike",
            value: 2
        },

        {
            name: "Joshua",
            value: 1
        },

        {
            name: "Samuel",
            value: 1
        },

        {
            name: "Mazi",
            value: 1
        },

        {
            name: "Vetigo",
            value: 1
        }

    ],

    /* ========================================================
       ASSISTS
       ======================================================== */

    assists: [

        {
            name: "Voltage",
            value: 3
        },

        {
            name: "Joshua",
            value: 3
        },

        {
            name: "Samuel",
            value: 2
        },

        {
            name: "Ballo",
            value: 1
        },

        {
            name: "Vetigo",
            value: 1
        }

    ],

    /* ========================================================
       DISCIPLINE & FITNESS
       ======================================================== */

    discipline: {

        yellowCards: [

            {
                name: "Mazi",
                reason: "Foul Play"
            },

            {
                name: "Bros Lucky",
                reason: "Foul Play"
            },

            {
                name: "Prince",
                reason: "Foul Play"
            },

            {
                name: "Chidera",
                reason: "Foul Play"
            },

            {
                name: "Somto",
                reason: "Bad Behavior"
            },

            {
                name: "Sanni",
                reason: "Bad Behavior"
            }

        ],

        redCards: [

            {
                name: "Samuel",
                reason: "Serious Foul Play"
            }

        ],

        suspended: [],

        injured: [

            {
                name: "Abel",
                duration: "1 month",
                type: "Knee injury"
            }

        ]

    }

};


/* ============================================================
   WEEK LABEL
   ============================================================ */

function renderWeek() {

    const element = document.getElementById("weekLabel");

    if (!element) return;

    element.textContent = weeklyData.week;
}


/* ============================================================
   TEAM STATISTICS
   ============================================================ */

function renderTeamStats() {

    const cleanSheets =
        document.getElementById("cleanSheets");

    const goalsScored =
        document.getElementById("goalsScored");

    if (cleanSheets) {
        cleanSheets.textContent =
            weeklyData.cleanSheets;
    }

    if (goalsScored) {
        goalsScored.textContent =
            weeklyData.goalsScored;
    }

}


/* ============================================================
   PLAYER POSITION STORAGE
   ============================================================ */

function getSavedPlayerPositions() {

    const storageKey =
        `legacyFC_${weeklyData.week}_positions`;

    try {

        const saved =
            localStorage.getItem(storageKey);

        return saved
            ? JSON.parse(saved)
            : null;

    } catch (error) {

        return null;

    }

}


function savePlayerPositions() {

    const storageKey =
        `legacyFC_${weeklyData.week}_positions`;

    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify(
                weeklyData.teamOfTheWeek
                    .slice(0, 4)
                    .map(player => ({
                        name: player.name,
                        x: player.x,
                        y: player.y
                    }))
            )
        );

    } catch (error) {

        /* Storage unavailable.
           The drag feature still works. */

    }

}


function loadPlayerPositions() {

    const saved =
        getSavedPlayerPositions();

    if (!saved) return;

    saved.forEach(savedPlayer => {

        const player =
            weeklyData.teamOfTheWeek.find(
                item =>
                    item.name === savedPlayer.name
            );

        if (!player) return;

        if (
            typeof savedPlayer.x === "number" &&
            typeof savedPlayer.y === "number"
        ) {

            player.x = savedPlayer.x;
            player.y = savedPlayer.y;

        }

    });

}


/* ============================================================
   DRAG PLAYER
   ============================================================ */

function makePlayerDraggable(
    playerDot,
    player,
    pitch
) {

    let dragging = false;

    playerDot.style.touchAction = "none";
    playerDot.style.cursor = "grab";

    playerDot.addEventListener(
        "pointerdown",
        function (event) {

            event.preventDefault();

            dragging = true;

            playerDot.style.cursor = "grabbing";
            playerDot.style.zIndex = "100";

            try {
                playerDot.setPointerCapture(
                    event.pointerId
                );
            } catch (error) {
                /* Ignore if pointer capture
                   is unavailable. */
            }

            updatePlayerPosition(
                event,
                player,
                playerDot,
                pitch
            );

        }
    );


    playerDot.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) return;

            event.preventDefault();

            updatePlayerPosition(
                event,
                player,
                playerDot,
                pitch
            );

        }
    );


    function stopDragging(event) {

        if (!dragging) return;

        dragging = false;

        playerDot.style.cursor = "grab";
        playerDot.style.zIndex = "10";

        try {
            playerDot.releasePointerCapture(
                event.pointerId
            );
        } catch (error) {
            /* Ignore if pointer capture
               is unavailable. */
        }

        savePlayerPositions();

    }


    playerDot.addEventListener(
        "pointerup",
        stopDragging
    );

    playerDot.addEventListener(
        "pointercancel",
        stopDragging
    );

    playerDot.addEventListener(
        "lostpointercapture",
        function () {

            if (!dragging) return;

            dragging = false;

            playerDot.style.cursor = "grab";
            playerDot.style.zIndex = "10";

            savePlayerPositions();

        }
    );

}


/* ============================================================
   UPDATE PLAYER POSITION
   ============================================================ */

function updatePlayerPosition(
    event,
    player,
    playerDot,
    pitch
) {

    const rect =
        pitch.getBoundingClientRect();

    if (
        rect.width <= 0 ||
        rect.height <= 0
    ) {
        return;
    }

    let x =
        ((event.clientX - rect.left) /
            rect.width) * 100;

    let y =
        ((event.clientY - rect.top) /
            rect.height) * 100;


    /*
       Keep the player inside the pitch.
       The limits prevent the player from
       disappearing outside the pitch.
    */

    x = Math.max(7, Math.min(93, x));
    y = Math.max(7, Math.min(93, y));


    player.x = x;
    player.y = y;


    playerDot.style.left =
        `${x}%`;

    playerDot.style.top =
        `${y}%`;

}


/* ============================================================
   TEAM OF THE WEEK / PITCH
   ============================================================ */

function renderPitch() {

    const pitch =
        document.getElementById("pitch");

    if (!pitch) return;

    pitch.innerHTML = "";

    /*
       Load previously saved positions
       for this week.
    */

    loadPlayerPositions();

    /*
       IMPORTANT:
       Exactly FOUR players are displayed.
    */

    weeklyData.teamOfTheWeek
        .slice(0, 4)
        .forEach(player => {

            const playerDot =
                document.createElement("div");

            playerDot.className =
                "player-dot";


            playerDot.style.left =
                `${player.x}%`;

            playerDot.style.top =
                `${player.y}%`;


            /* PLAYER NUMBER */

            const avatar =
                document.createElement("div");

            avatar.className =
                "player-avatar";

            avatar.textContent =
                player.number;


            /* PLAYER NAME */

            const name =
                document.createElement("div");

            name.className =
                "player-name";

            name.textContent =
                player.name;


            playerDot.appendChild(avatar);

            playerDot.appendChild(name);

            pitch.appendChild(playerDot);


            /*
               ENABLE REAL MOUSE + TOUCH DRAGGING
            */

            makePlayerDraggable(
                playerDot,
                player,
                pitch
            );

        });

}


/* ============================================================
   SQUAD
   ============================================================ */

function renderSquad() {

    const squadList =
        document.getElementById("squadList");

    if (!squadList) return;

    squadList.innerHTML = "";

    weeklyData.squad.forEach(
        (player, index) => {

            const card =
                document.createElement("div");

            card.className =
                "squad-card";


            const number =
                document.createElement("div");

            number.className =
                "squad-number";

            number.textContent =
                index + 1;


            const info =
                document.createElement("div");

            info.className =
                "squad-info";


            const playerName =
                document.createElement("strong");

            playerName.textContent =
                player.captain
                    ? `${player.name} (C)`
                    : player.name;


            const playerPosition =
                document.createElement("span");

            playerPosition.textContent =
                player.position;


            info.appendChild(playerName);

            info.appendChild(playerPosition);

            card.appendChild(number);

            card.appendChild(info);

            squadList.appendChild(card);

        }
    );

}


/* ============================================================
   COACHING STAFF
   ============================================================ */

function renderStaff() {

    const staffList =
        document.getElementById("staffList");

    if (!staffList) return;

    staffList.innerHTML = "";

    weeklyData.staff.forEach(person => {

        const card =
            document.createElement("div");

        card.className =
            "staff-card";


        const name =
            document.createElement("strong");

        name.textContent =
            person.name;


        const role =
            document.createElement("span");

        role.textContent =
            person.role;


        card.appendChild(name);

        card.appendChild(role);

        staffList.appendChild(card);

    });

}


/* ============================================================
   MONTHLY HONOURS
   ============================================================ */

function renderHonours() {

    const honoursList =
        document.getElementById("honoursList");

    if (!honoursList) return;

    honoursList.innerHTML = "";


    const categories = [

        weeklyData.honours.midfielder,

        weeklyData.honours.defender,

        weeklyData.honours.attacker

    ];


    categories.forEach(category => {

        const card =
            document.createElement("div");

        card.className =
            "honour-card";


        const code =
            document.createElement("div");

        code.className =
            "honour-code";

        code.textContent =
            category.code;


        const title =
            document.createElement("div");

        title.className =
            "honour-title";

        title.textContent =
            category.title;


        const reviewed =
            document.createElement("div");

        reviewed.className =
            "honour-reviewed";

        reviewed.textContent =
            "Reviewed";


        const label =
            document.createElement("div");

        label.className =
            "honour-label";

        label.textContent =
            "Contenders";


        const names =
            document.createElement("div");

        names.className =
            "honour-names";


        category.contenders.forEach(
            playerName => {

                const name =
                    document.createElement("span");

                name.textContent =
                    playerName;

                names.appendChild(name);

            }
        );


        const winner =
            document.createElement("div");

        winner.className =
            "honour-winner";


        if (category.winners.length > 0) {

            winner.textContent =
                `Winner — ${category.winners.join(", ")}`;

        } else {

            winner.textContent =
                "Winner —";

        }


        card.appendChild(code);

        card.appendChild(title);

        card.appendChild(reviewed);

        card.appendChild(label);

        card.appendChild(names);

        card.appendChild(winner);

        honoursList.appendChild(card);

    });

}


/* ============================================================
   GOALS & ASSISTS
   ============================================================ */

function renderLeaders() {

    renderLeaderList(
        "goalsList",
        weeklyData.goals
    );

    renderLeaderList(
        "assistsList",
        weeklyData.assists
    );

}


/* ============================================================
   LEADER LIST
   ============================================================ */

function renderLeaderList(
    elementId,
    players
) {

    const container =
        document.getElementById(elementId);

    if (!container) return;

    container.innerHTML = "";


    const contenders =
        document.createElement("div");

    contenders.className =
        "reviewed";

    contenders.textContent =
        "Contenders";

    container.appendChild(
        contenders
    );


    players.forEach(player => {

        const row =
            document.createElement("div");

        row.className =
            "leader-row";


        const playerName =
            document.createElement("span");

        playerName.className =
            "leader-player";

        playerName.textContent =
            player.name;


        const value =
            document.createElement("strong");

        value.className =
            "leader-value";

        value.textContent =
            player.value;


        row.appendChild(playerName);

        row.appendChild(value);

        container.appendChild(row);

    });

}


/* ============================================================
   DISCIPLINE
   ============================================================ */

function renderDiscipline() {

    const disciplineList =
        document.getElementById(
            "disciplineList"
        );

    if (!disciplineList) return;

    disciplineList.innerHTML = "";


    /* YELLOW CARDS */

    weeklyData.discipline.yellowCards
        .forEach(cardData => {

            const card =
                document.createElement("div");

            card.className =
                "discipline-card yellow";


            const title =
                document.createElement("div");

            title.className =
                "discipline-title";

            title.textContent =
                "Yellow Card";


            const player =
                document.createElement("div");

            player.className =
                "discipline-player";

            player.textContent =
                cardData.name;


            const reason =
                document.createElement("div");

            reason.className =
                "discipline-reason";

            reason.textContent =
                `Reason: ${cardData.reason}`;


            card.appendChild(title);

            card.appendChild(player);

            card.appendChild(reason);

            disciplineList.appendChild(card);

        });


    /* RED CARDS */

    weeklyData.discipline.redCards
        .forEach(cardData => {

            const card =
                document.createElement("div");

            card.className =
                "discipline-card red";


            const title =
                document.createElement("div");

            title.className =
                "discipline-title";

            title.textContent =
                "Red Card";


            const player =
                document.createElement("div");

            player.className =
                "discipline-player";

            player.textContent =
                cardData.name;


            const reason =
                document.createElement("div");

            reason.className =
                "discipline-reason";

            reason.textContent =
                `Reason: ${cardData.reason}`;


            card.appendChild(title);

            card.appendChild(player);

            card.appendChild(reason);

            disciplineList.appendChild(card);

        });


    /* SUSPENDED */

    if (
        weeklyData.discipline.suspended.length === 0
    ) {

        const card =
            document.createElement("div");

        card.className =
            "discipline-card none";


        const title =
            document.createElement("div");

        title.className =
            "discipline-title";

        title.textContent =
            "Suspended";


        const player =
            document.createElement("div");

        player.className =
            "discipline-player";

        player.textContent =
            "Nil Nil Nil";


        card.appendChild(title);

        card.appendChild(player);

        disciplineList.appendChild(card);

    }


    /* INJURED */

    weeklyData.discipline.injured
        .forEach(injuredPlayer => {

            const card =
                document.createElement("div");

            card.className =
                "discipline-card injured";


            const title =
                document.createElement("div");

            title.className =
                "discipline-title";

            title.textContent =
                "Injured";


            const player =
                document.createElement("div");

            player.className =
                "discipline-player";

            player.textContent =
                injuredPlayer.name;


            const duration =
                document.createElement("div");

            duration.className =
                "discipline-reason";

            duration.textContent =
                `Duration: ${injuredPlayer.duration}`;


            const type =
                document.createElement("div");

            type.className =
                "discipline-reason";

            type.textContent =
                `Type: ${injuredPlayer.type}`;


            card.appendChild(title);

            card.appendChild(player);

            card.appendChild(duration);

            card.appendChild(type);

            disciplineList.appendChild(card);

        });

}


/* ============================================================
   INITIALIZE
   ============================================================ */

function initializeLegacyFC() {

    renderWeek();

    renderTeamStats();

    renderPitch();

    renderSquad();

    renderStaff();

    renderHonours();

    renderLeaders();

    renderDiscipline();

}


/* ============================================================
   START
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    initializeLegacyFC
);
