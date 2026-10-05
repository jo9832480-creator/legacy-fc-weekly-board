// ============================================================
// LEGACY FC - WEEKLY FOOTBALL BOARD
// ============================================================


// ------------------------------------------------------------
// WEEKLY DATA
// Update this section every week.
// ------------------------------------------------------------

const weeklyData = {

    week: "Week 5",

    formation: "4-A-SIDE",

    cleanSheets: 11,

    goalsScored: 11,


    // --------------------------------------------------------
    // TEAM OF THE WEEK
    // EXACTLY 4 PLAYERS
    // --------------------------------------------------------

    teamOfTheWeek: [

        {
            number: 1,
            position: "GK",
            name: "VOLTAGE",
            x: 50,
            y: 84
        },

        {
            number: 5,
            position: "DEF",
            name: "JOSHUA",
            x: 50,
            y: 62
        },

        {
            number: 8,
            position: "MID",
            name: "SOMTO",
            x: 50,
            y: 40
        },

        {
            number: 9,
            position: "ATT",
            name: "SIR MIKE",
            x: 50,
            y: 18
        }

    ],


    // --------------------------------------------------------
    // SQUAD
    // --------------------------------------------------------

    squad: [

        {
            name: "JAMES",
            position: "Defender"
        },

        {
            name: "ADETOLA",
            position: "Defender"
        },

        {
            name: "GABRIEL",
            position: "Defender"
        },

        {
            name: "ALATIC DC",
            position: "Defender"
        },

        {
            name: "BABARICK",
            position: "Defender"
        },

        {
            name: "BROS JACK",
            position: "Defender"
        },


        {
            name: "DAVID",
            position: "Midfielder"
        },

        {
            name: "ABEL",
            position: "Midfielder",
            captain: true
        },

        {
            name: "JOSHUA",
            position: "Midfielder"
        },

        {
            name: "DREMMZ",
            position: "Midfielder"
        },

        {
            name: "WINNER",
            position: "Midfielder"
        },

        {
            name: "MOSHOOD",
            position: "Midfielder"
        },

        {
            name: "BROS LUCKY",
            position: "Midfielder"
        },

        {
            name: "PHILIP",
            position: "Midfielder"
        },

        {
            name: "MAZI",
            position: "Midfielder"
        },

        {
            name: "BROS TOBI",
            position: "Midfielder"
        },

        {
            name: "ABDUL",
            position: "Midfielder"
        },

        {
            name: "RAZAQ",
            position: "Midfielder"
        },

        {
            name: "MILLS",
            position: "Midfielder"
        },

        {
            name: "NUGWA",
            position: "Midfielder"
        },

        {
            name: "VOLTAGE",
            position: "Midfielder"
        },


        {
            name: "SAMUEL",
            position: "Attacker"
        },

        {
            name: "SIRMIKE",
            position: "Attacker"
        },

        {
            name: "SHARPMAN",
            position: "Attacker"
        },

        {
            name: "BALLO JR",
            position: "Attacker"
        },

        {
            name: "BROS CASH",
            position: "Attacker"
        },

        {
            name: "PEDRO",
            position: "Attacker"
        },

        {
            name: "ELVIS",
            position: "Attacker"
        },

        {
            name: "SOMTO",
            position: "Attacker"
        },

        {
            name: "VETIGO",
            position: "Attacker"
        }

    ],


    // --------------------------------------------------------
    // COACHING STAFF
    // --------------------------------------------------------

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


    // --------------------------------------------------------
    // MONTHLY HONOURS
    // --------------------------------------------------------

    honours: [

        {
            code: "MID",
            title: "Midfielder of the Month",
            reviewed: true,

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


        {
            code: "DEF",
            title: "Defender of the Month",
            reviewed: true,

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


        {
            code: "ATT",
            title: "Attacker of the Month",
            reviewed: true,

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

    ],


    // --------------------------------------------------------
    // GOLDEN BOOT
    // --------------------------------------------------------

    goals: [

        {
            name: "Sir Mike",
            value: 13
        },

        {
            name: "Samuel",
            value: 6
        },

        {
            name: "Mazi",
            value: 5
        },

        {
            name: "Ballo",
            value: 4
        },

        {
            name: "Sharpman",
            value: 2
        },

        {
            name: "Bros Lucky",
            value: 2
        },

        {
            name: "Winner",
            value: ""
        },

        {
            name: "Dremmz",
            value: 2
        },

        {
            name: "Joshua",
            value: 2
        },

        {
            name: "Somto",
            value: 2
        },

        {
            name: "Adetola",
            value: 1
        },

        {
            name: "Abdul",
            value: 1
        },

        {
            name: "Pedro",
            value: 1
        },

        {
            name: "Babarick",
            value: 1
        },

        {
            name: "Gabriel",
            value: 1
        },

        {
            name: "Philip",
            value: 1
        },

        {
            name: "Banker",
            value: 1
        }

    ],


    // --------------------------------------------------------
    // ASSISTS / PLAYMAKER
    // --------------------------------------------------------

    assists: [

        {
            name: "Winner",
            value: 9
        },

        {
            name: "Joshua",
            value: 5
        },

        {
            name: "Ballo",
            value: 4
        },

        {
            name: "Sharpman",
            value: 3
        },

        {
            name: "Philip",
            value: 3
        },

        {
            name: "Samuel",
            value: 2
        },

        {
            name: "Mazi",
            value: 1
        },

        {
            name: "Nugwa",
            value: 1
        },

        {
            name: "Pedro",
            value: 1
        },

        {
            name: "Voltage",
            value: 1
        }

    ],


    // --------------------------------------------------------
    // DISCIPLINE & FITNESS
    // --------------------------------------------------------

    discipline: {

        yellowCards: [

            {
                name: "Gabriel",
                reason: "Handball"
            },

            {
                name: "Bros Lucky",
                reason: "Foul Play"
            }

        ],


        redCards: [

            {
                name: "Mazi",
                reason: "serious foul play"
            },

            {
                name: "Mazi Pitch Invasion",
                reason: "5k"
            }

        ],


        suspended: [

            {
                name: "Nil",
                reason: "Nil",
                details: "Nil"
            }

        ],


        injured: [

            {
                name: "Abel",
                duration: "1 week",
                type: "Knee injury"
            }

        ]

    }

};


// ============================================================
// RENDER WEEK
// ============================================================

function renderWeek() {

    const weekLabel = document.getElementById("weekLabel");

    if (!weekLabel) return;

    weekLabel.textContent =
        `⚽ Matchday Report — ${weeklyData.week}`;
}


// ============================================================
// RENDER TEAM STATS
// ============================================================

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


// ============================================================
// RENDER TEAM OF THE WEEK PITCH
// ============================================================

function renderPitch() {

    const pitch =
        document.getElementById("pitch");

    if (!pitch) return;


    // Remove old player dots.

    const oldPlayers =
        pitch.querySelectorAll(".player-dot");

    oldPlayers.forEach(player => {

        player.remove();

    });


    // Make sure the pitch itself is positioned correctly.

    if (getComputedStyle(pitch).position === "static") {

        pitch.style.position = "relative";

    }


    // --------------------------------------------------------
    // EXACTLY 4 PLAYERS
    // --------------------------------------------------------

    weeklyData.teamOfTheWeek
        .slice(0, 4)
        .forEach((player, index) => {


            const playerDot =
                document.createElement("div");


            playerDot.className =
                "player-dot";


            // Store which player this is.

            playerDot.dataset.playerIndex =
                index;


            // Position the player.

            playerDot.style.left =
                `${player.x}%`;

            playerDot.style.top =
                `${player.y}%`;


            // IMPORTANT FOR MOBILE DRAGGING
            // Prevent the browser from treating
            // the touch as normal page scrolling.

            playerDot.style.touchAction =
                "none";

            playerDot.style.userSelect =
                "none";

            playerDot.style.webkitUserSelect =
                "none";

            playerDot.style.cursor =
                "grab";


            playerDot.innerHTML = `

                <div class="player-number">
                    ${player.number}
                </div>

                <div class="player-position">
                    ${player.position}
                </div>

                <div class="player-name">
                    ${player.name}
                </div>

            `;


            pitch.appendChild(playerDot);


            // Attach the real drag functionality.

            enablePlayerDrag(
                playerDot,
                pitch,
                player,
                index
            );

        });

}


// ============================================================
// REAL PLAYER DRAG FUNCTION
// Works with:
// - iPhone
// - Android
// - Mouse
// - Trackpad
// - Touchscreen
// ============================================================

function enablePlayerDrag(
    playerDot,
    pitch,
    player,
    playerIndex
) {


    let dragging = false;

    let pointerId = null;

    let offsetX = 0;

    let offsetY = 0;


    // --------------------------------------------------------
    // WHEN USER TOUCHES / CLICKS PLAYER
    // --------------------------------------------------------

    playerDot.addEventListener(
        "pointerdown",
        function (event) {

            // Only use the primary pointer.

            if (!event.isPrimary) return;


            dragging = true;

            pointerId =
                event.pointerId;


            playerDot.style.cursor =
                "grabbing";


            playerDot.classList.add(
                "dragging"
            );


            // Capture the pointer.
            //
            // This means the player keeps receiving
            // pointer movements even if the finger/mouse
            // moves outside the player.

            try {

                playerDot.setPointerCapture(
                    event.pointerId
                );

            } catch (error) {

                // Ignore capture errors.

            }


            // Get current sizes.

            const pitchRect =
                pitch.getBoundingClientRect();

            const playerRect =
                playerDot.getBoundingClientRect();


            // Calculate where inside the player
            // the user grabbed it.

            offsetX =
                event.clientX -
                (
                    playerRect.left +
                    playerRect.width / 2
                );


            offsetY =
                event.clientY -
                (
                    playerRect.top +
                    playerRect.height / 2
                );


            // Prevent accidental scrolling,
            // selecting text, etc.

            event.preventDefault();

        },
        {
            passive: false
        }
    );


    // --------------------------------------------------------
    // WHEN PLAYER IS MOVED
    // --------------------------------------------------------

    playerDot.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) return;

            if (
                pointerId !==
                event.pointerId
            ) {
                return;
            }


            const pitchRect =
                pitch.getBoundingClientRect();


            const playerRect =
                playerDot.getBoundingClientRect();


            // Calculate the player's center.

            let newX =
                event.clientX -
                pitchRect.left -
                offsetX;


            let newY =
                event.clientY -
                pitchRect.top -
                offsetY;


            // ------------------------------------------------
            // KEEP PLAYER INSIDE THE PITCH
            // ------------------------------------------------

            const halfWidth =
                playerRect.width / 2;

            const halfHeight =
                playerRect.height / 2;


            newX =
                Math.max(
                    halfWidth,
                    Math.min(
                        pitchRect.width -
                        halfWidth,
                        newX
                    )
                );


            newY =
                Math.max(
                    halfHeight,
                    Math.min(
                        pitchRect.height -
                        halfHeight,
                        newY
                    )
                );


            // Convert pixels to percentages.

            const xPercent =
                (
                    newX /
                    pitchRect.width
                ) * 100;


            const yPercent =
                (
                    newY /
                    pitchRect.height
                ) * 100;


            // Move the player.

            playerDot.style.left =
                `${xPercent}%`;

            playerDot.style.top =
                `${yPercent}%`;


            // Save the new position
            // in the current page data.

            player.x =
                xPercent;

            player.y =
                yPercent;


            event.preventDefault();

        },
        {
            passive: false
        }
    );


    // --------------------------------------------------------
    // WHEN USER RELEASES PLAYER
    // --------------------------------------------------------

    playerDot.addEventListener(
        "pointerup",
        function (event) {

            if (
                pointerId !==
                event.pointerId
            ) {
                return;
            }


            stopDragging();

        }
    );


    // --------------------------------------------------------
    // IF BROWSER CANCELS THE TOUCH
    // --------------------------------------------------------

    playerDot.addEventListener(
        "pointercancel",
        function (event) {

            if (
                pointerId !==
                event.pointerId
            ) {
                return;
            }


            stopDragging();

        }
    );


    // --------------------------------------------------------
    // FINISH DRAGGING
    // --------------------------------------------------------

    function stopDragging() {

        dragging = false;

        playerDot.style.cursor =
            "grab";

        playerDot.classList.remove(
            "dragging"
        );


        if (
            pointerId !== null &&
            playerDot.hasPointerCapture &&
            playerDot.hasPointerCapture(pointerId)
        ) {

            try {

                playerDot.releasePointerCapture(
                    pointerId
                );

            } catch (error) {

                // Ignore release errors.

            }

        }


        pointerId = null;

    }

}


// ============================================================
// RENDER SQUAD
// ============================================================

function renderSquad() {

    const container =
        document.getElementById("squadList");

    if (!container) return;


    container.innerHTML = "";


    weeklyData.squad.forEach(
        (player, index) => {

            const card =
                document.createElement("div");


            card.className =
                "squad-card";


            card.innerHTML = `

                <div class="squad-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="squad-info">

                    <div class="squad-name">

                        ${player.name}

                        ${
                            player.captain
                                ? ` <span class="captain-badge">C</span>`
                                : ""
                        }

                    </div>

                    <div class="squad-position">
                        ${player.position}
                    </div>

                </div>

            `;


            container.appendChild(card);

        }
    );

}


// ============================================================
// RENDER STAFF
// ============================================================

function renderStaff() {

    const container =
        document.getElementById("staffList");

    if (!container) return;


    container.innerHTML = "";


    weeklyData.staff.forEach(member => {

        const card =
            document.createElement("div");


        card.className =
            "staff-card";


        card.innerHTML = `

            <div class="staff-name">
                ${member.name}
            </div>

            <div class="staff-role">
                ${member.role}
            </div>

        `;


        container.appendChild(card);

    });

}


// ============================================================
// RENDER MONTHLY HONOURS
// ============================================================

function renderHonours() {

    const container =
        document.getElementById("honoursList");

    if (!container) return;


    container.innerHTML = "";


    weeklyData.honours.forEach(honour => {

        const card =
            document.createElement("div");


        card.className =
            "honour-card";


        const winnerHTML =
            honour.winners &&
            honour.winners.length > 0

                ? `

                    <div class="honour-winner-label">
                        Winner
                    </div>

                    <div class="honour-winner">
                        ${honour.winners.join(" · ")}
                    </div>

                `

                : "";


        card.innerHTML = `

            <div class="honour-code">
                ${honour.code}
            </div>

            <div class="honour-title">
                ${honour.title}
            </div>

            <div class="honour-reviewed">
                Reviewed
            </div>

            <div class="honour-label">
                Contenders
            </div>

            <div class="honour-names">
                ${honour.contenders.join(" · ")}
            </div>

            ${winnerHTML}

        `;


        container.appendChild(card);

    });

}


// ============================================================
// RENDER LEADERS
// ============================================================

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


// ============================================================
// RENDER LEADER LIST
// ============================================================

function renderLeaderList(
    elementId,
    players
) {

    const container =
        document.getElementById(elementId);

    if (!container) return;


    container.innerHTML = `

        <div class="leader-contenders">
            Contenders
        </div>

    `;


    players.forEach(player => {

        const row =
            document.createElement("div");


        row.className =
            "leader-row";


        row.innerHTML = `

            <span class="leader-player">
                ${player.name}
            </span>

            <span class="leader-value">
                ${player.value}
            </span>

        `;


        container.appendChild(row);

    });

}


// ============================================================
// RENDER DISCIPLINE & FITNESS
// ============================================================

function renderDiscipline() {

    const container =
        document.getElementById(
            "disciplineList"
        );

    if (!container) return;


    container.innerHTML = "";


    // --------------------------------------------------------
    // YELLOW CARDS
    // --------------------------------------------------------

    weeklyData.discipline.yellowCards
        .forEach(item => {

            const card =
                document.createElement("div");


            card.className =
                "discipline-card yellow";


            card.innerHTML = `

                <div class="discipline-title">
                    Yellow Card
                </div>

                <div class="discipline-name">
                    ${item.name}
                </div>

                <div class="discipline-reason">
                    Reason: ${item.reason}
                </div>

            `;


            container.appendChild(card);

        });


    // --------------------------------------------------------
    // RED CARDS
    // --------------------------------------------------------

    weeklyData.discipline.redCards
        .forEach(item => {

            const card =
                document.createElement("div");


            card.className =
                "discipline-card red";


            card.innerHTML = `

                <div class="discipline-title">
                    Red Card
                </div>

                <div class="discipline-name">
                    ${item.name}
                </div>

                <div class="discipline-reason">
                    Reason: ${item.reason}
                </div>

            `;


            container.appendChild(card);

        });


    // --------------------------------------------------------
    // SUSPENDED
    // --------------------------------------------------------

    weeklyData.discipline.suspended
        .forEach(item => {

            const card =
                document.createElement("div");


            card.className =
                "discipline-card none";


            card.innerHTML = `

                <div class="discipline-title">
                    Suspended
                </div>

                <div class="discipline-name">
                    ${item.name}
                </div>

                <div class="discipline-reason">
                    ${item.reason}
                </div>

                <div class="discipline-reason">
                    ${item.details}
                </div>

            `;


            container.appendChild(card);

        });


    // --------------------------------------------------------
    // INJURED
    // --------------------------------------------------------

    weeklyData.discipline.injured
        .forEach(item => {

            const card =
                document.createElement("div");


            card.className =
                "discipline-card injured";


            card.innerHTML = `

                <div class="discipline-title">
                    Injured
                </div>

                <div class="discipline-name">
                    ${item.name}
                </div>

                <div class="discipline-reason">
                    Duration: ${item.duration}
                </div>

                <div class="discipline-reason">
                    Type: ${item.type}
                </div>

            `;


            container.appendChild(card);

        });

}


// ============================================================
// INITIALIZE LEGACY FC
// ============================================================

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


// ============================================================
// START WEBSITE
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    initializeLegacyFC
);