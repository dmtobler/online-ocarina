$(document).ready(function () {

    "use strict";

    var userInputs = [];

    $('h2').fadeIn(2000);

    setTimeout(function () {
        $('h1').fadeIn(2000);
    }, 2000);

    setTimeout(function () {
        $('img').fadeIn(2000);
        $('#keyIconContainer').fadeIn(2000);
    }, 3500);

    //************** GENERATE TRANSIENT KEY PRESS NOTES **************

    function createAudio(audioFile) {
        var sound = document.createElement('audio');
        sound.id = 'audio-player';
        sound.controls = 'controls';
        sound.src = audioFile;
        sound.type = 'audio/wav';
        return sound;
    }

    //************** KEYCODE FOR KEYDOWN NOTES **************

    document.addEventListener('keydown', function(e) {

        switch (e.keyCode) {
            case 39:
                var rightNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_A_med.wav");
                rightNote.play();
                $("#keyIconContainer").html("<i class='fa fa-arrow-right'></i>");
                break;

            case 37:
                var leftNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_B_med.wav");
                leftNote.play();
                $("#keyIconContainer").html("<i class='fa fa-arrow-left'></i>");
                break;

            case 38:
                var upNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_D2_med.wav");
                upNote.play();
                $("#keyIconContainer").html("<i class='fa fa-arrow-up'></i>");

                break;

            case 65:
                var aNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_D_med.wav");
                aNote.play();
                $("#keyIconContainer").html("A");

                break;

            case 40:
                var downNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_F_med.wav");
                downNote.play();
                $("#keyIconContainer").html("<i class='fa fa-arrow-down'></i>");
                break;

        }
    });


    //************** SEQUENCE CODES **************


    var sequences = [
        // Konami --------------------------------------------------
        // ↑ ↑ ↓ ↓ ← → ← → B A Enter
        {name: "Konami... <br>wrong game!", seq: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]},

        // Zelda's Lullaby -----------------------------------------
        // ← ↑ → ← ↑ →
        {name: "Zelda's Lullaby", seq: [37, 38, 39, 37, 38, 39], song: "assets/audio/zeldas-lullaby.mp3"},

        // Epona's Song ---------------------------------------------
        // ↑ ← → ↑ ← →
        {name: "Epona's Song", seq: [38, 37, 39, 38, 37, 39], song: "assets/audio/eponas-song.mp3"},

        // Saria's Song ---------------------------------------------
        // ↓ → ← ↓ → ←
        {name: "Saria's Song", seq: [40, 39, 37, 40, 39, 37], song: "assets/audio/sarias-song.mp3"},

        // Song of Storms -------------------------------------------
        // A ↓ ↑ A ↓ ↑
        {name: "Song of Storms", seq: [65, 40, 38, 65, 40, 38], song: "assets/audio/song-of-storms.mp3"},

        // Sun's Song -----------------------------------------------
        // → ↓ ↑ → ↓ ↑
        {name: "Sun's Song", seq: [39, 40, 38, 39, 40, 38], song: "assets/audio/suns-song.mp3"},

        // Song of Time ---------------------------------------------
        // → A ↓ → A ↓
        {name: "Sun's Song", seq: [39, 65, 40, 39, 65, 40], song: "assets/audio/song-of-time.mp3"},

        // Minuet of Forest -----------------------------------------
        // A ↑ ← → ← →
        {name: "Minuet of Forest", seq: [65, 38, 37, 39, 37, 39], song: "assets/audio/minuet-of-forest.mp3"},

        // Bolero of Fire -------------------------------------------
        // ↓ A ↓ A → ↓ → ↓
        {name: "Bolero of Fire", seq: [40, 65, 40, 65, 39, 40, 39, 40], song: "assets/audio/bolero-of-fire.mp3"},

        // Serenade of Water ----------------------------------------
        // A ↓ → → ←
        {name: "Serenade of Water", seq: [65, 40, 39, 39, 37], song: "assets/audio/serenade-of-water.mp3"},

        // Requiem of Spirit ----------------------------------------
        // A ↓ A → ↓ A
        {name: "Requiem of Spirit", seq: [65, 40, 65, 39, 40, 65], song: "assets/audio/requiem-of-spirit.mp3"},

        // Nocturne of Shadow ---------------------------------------
        // ← → → A ← → ↓
        {name: "Nocturne of Shadow", seq: [37, 39, 39, 65, 37, 39, 40], song: "assets/audio/nocturne-of-shadow.mp3"},

        // Prelude of Light -----------------------------------------
        // ↑ → ↑ → ← ↑
        {name: "Prelude of Light", seq: [38, 39, 38, 39, 37, 38], song: "assets/audio/prelude-of-light.mp3"},

        // Song of Healing ------------------------------------------
        // ← → ↓ ← → ↓
        {name: "Song of Healing", seq: [37, 39, 40, 37, 39, 40], song: "assets/audio/song-of-healing.mp3"},

        // Inverted Song of Time ------------------------------------
        // ↓ A → ↓ A →
        {name: "Inverted Song of Time", seq: [40, 65, 39, 40, 65, 39], song: "assets/audio/inverted-song-of-time.mp3"},

        // Song of Double Time --------------------------------------
        // → → A A ↓ ↓
        {name: "Song of Double Time", seq: [39, 39, 65, 65, 40, 40], song: "assets/audio/song-of-double-time.mp3"},

        // Sonata of Awakening --------------------------------------
        // ↑ ← ↑ ← A → A
        {name: "Sonata of Awakening", seq: [38, 37, 38, 37, 65, 39, 65], song: "assets/audio/sonata-of-awakening.mp3"},

        // Song of Soaring ------------------------------------------
        // ↓ ← ↑ ↓ ← ↑
        {name: "Song of Soaring", seq: [40, 37, 38, 40, 37, 38], song: "assets/audio/song-of-soaring.mp3"},

        // Goron Lullaby --------------------------------------------
        // A → ← A → ← → A
        {name: "Goron Lullaby", seq: [65, 39, 37, 65, 39, 37, 39, 65], song: "assets/audio/goron-lullaby.mp3"},

        // New Wave Bossa Nova --------------------------------------
        // ← ↑ ← → ↓ ← → 
        {name: "New Wave Bossa Nova", seq: [37, 38, 37, 39, 40, 37, 39], song: "assets/audio/new-wave-bossa-nova.mp3"},

        // Elegy of Emptiness ---------------------------------------
        // → ← → ↓ → ↑ ←
        {name: "Elegy of Emptiness", seq: [39, 37, 39, 40, 39, 38, 37], song: "assets/audio/elegy-of-emptiness.mp3"},

        // Oath to Order --------------------------------------------
        // → ↓ A ↓ → ↑
        {name: "Oath to Order", seq: [39, 40, 65, 40, 39, 38], song: "assets/audio/oath-to-order.mp3"}
    ];


    // Check for sequences in user keyboard input - if so, play sequence song and reset userInput

    $(document).keyup(function(event) {
        userInputs.push(event.keyCode);
        sequences.forEach(function (sequence) {
            if(userInputs.join(",").includes(sequence.seq.join(","))) {
                $("#correctSeqSound")[0].play();
                $("h2").html("You played...");
                $("h1").html(sequence.name);
                $("#correctSeqSong").attr("src", sequence.song)[0].play();
                userInputs = [];
            }
        });

    });

});