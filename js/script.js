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

            case 83:
                var aNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_D_med.wav");
                aNote.play();
                $("#keyIconContainer").html("S");
                break;

            case 40:
                var downNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_F_med.wav");
                downNote.play();
                $("#keyIconContainer").html("<i class='fa fa-arrow-down'></i>");
                break;

            case 89:
                var rightNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_A_med.wav");
                rightNote.play();
                $("#keyIconContainer").html("Y");
                break;

            case 88:
                var leftNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_B_med.wav");
                leftNote.play();
                $("#keyIconContainer").html("X");
                break;

            case 65:
                var upNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_D2_med.wav");
                upNote.play();
                $("#keyIconContainer").html("A");

                break;

            case 76:
                var aNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_D_med.wav");
                aNote.play();
                $("#keyIconContainer").html("L");

                break;

            case 82:
                var downNote = createAudio("assets/audio/notes/OOT_Notes_Ocarina_F_med.wav");
                downNote.play();
                $("#keyIconContainer").html("R");
                break;

        }
    });


    //************** SEQUENCE CODES **************


    var sequences = [
        // Konami --------------------------------------------------
        // ↑ ↑ ↓ ↓ ← → ← → B A Enter
        {name: "Konami... <br>wrong game!", seq: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]},

        // Zelda's Lullaby -----------------------------------------
        // X A Y X A Y
        // ← ↑ → ← ↑ →
        {name: "Zelda's Lullaby", seq: [88, 65, 89, 88, 65, 89], song: "assets/audio/zeldas-lullaby.mp3"},
        {name: "Zelda's Lullaby", seq: [37, 38, 39, 37, 38, 39], song: "assets/audio/zeldas-lullaby.mp3"},

        // Epona's Song ---------------------------------------------
        // A X Y A X Y
        // ↑ ← → ↑ ← →
        {name: "Epona's Song", seq: [65, 88, 89, 65, 88, 89], song: "assets/audio/eponas-song.mp3"},
        {name: "Epona's Song", seq: [38, 37, 39, 38, 37, 39], song: "assets/audio/eponas-song.mp3"},

        // Saria's Song ---------------------------------------------
        // R Y X R Y X
        // ↓ → ← ↓ → ←
        {name: "Saria's Song", seq: [82, 89, 88, 82, 89, 88], song: "assets/audio/sarias-song.mp3"},
        {name: "Saria's Song", seq: [40, 39, 37, 40, 39, 37], song: "assets/audio/sarias-song.mp3"},

        // Song of Storms -------------------------------------------
        // L R A L R A
        // A ↓ ↑ A ↓ ↑
        {name: "Song of Storms", seq: [76, 82, 65, 76, 82, 65], song: "assets/audio/song-of-storms.mp3"},
        {name: "Song of Storms", seq: [83, 40, 38, 83, 40, 38], song: "assets/audio/song-of-storms.mp3"},

        // Sun's Song -----------------------------------------------
        // Y R A Y R A
        // → ↓ ↑ → ↓ ↑
        {name: "Sun's Song", seq: [89, 82, 65, 89, 82, 65], song: "assets/audio/suns-song.mp3"},
        {name: "Sun's Song", seq: [39, 40, 38, 39, 40, 38], song: "assets/audio/suns-song.mp3"},

        // Song of Time ---------------------------------------------
        // Y L R Y L R
        // → A ↓ → A ↓
        {name: "Song of Time", seq: [89, 76, 82, 89, 76, 82], song: "assets/audio/song-of-time.mp3"},
        {name: "Song of Time", seq: [39, 83, 40, 39, 83, 40], song: "assets/audio/song-of-time.mp3"},

        // Minuet of Forest -----------------------------------------
        // L A X Y X Y
        // A ↑ ← → ← →
        {name: "Minuet of Forest", seq: [76, 65, 88, 89, 88, 89], song: "assets/audio/minuet-of-forest.mp3"},
        {name: "Minuet of Forest", seq: [83, 38, 37, 39, 37, 39], song: "assets/audio/minuet-of-forest.mp3"},

        // Bolero of Fire -------------------------------------------
        // R L R L Y R Y R
        // ↓ A ↓ A → ↓ → ↓
        {name: "Bolero of Fire", seq: [82, 76, 82, 76, 89, 82, 89, 82], song: "assets/audio/bolero-of-fire.mp3"},
        {name: "Bolero of Fire", seq: [40, 83, 40, 83, 39, 40, 39, 40], song: "assets/audio/bolero-of-fire.mp3"},

        // Serenade of Water ----------------------------------------
        // L R Y Y X
        // A ↓ → → ←
        {name: "Serenade of Water", seq: [76, 82, 89, 89, 88], song: "assets/audio/serenade-of-water.mp3"},
        {name: "Serenade of Water", seq: [83, 40, 39, 39, 37], song: "assets/audio/serenade-of-water.mp3"},

        // Requiem of Spirit ----------------------------------------
        // L R L Y R L
        // A ↓ A → ↓ A
        {name: "Requiem of Spirit", seq: [76, 82, 76, 89, 82, 76], song: "assets/audio/requiem-of-spirit.mp3"},
        {name: "Requiem of Spirit", seq: [83, 40, 83, 39, 40, 83], song: "assets/audio/requiem-of-spirit.mp3"},

        // Nocturne of Shadow ---------------------------------------
        // X Y Y L X Y R
        // ← → → A ← → ↓
        {name: "Nocturne of Shadow", seq: [88, 89, 89, 76, 88, 89, 82], song: "assets/audio/nocturne-of-shadow.mp3"},
        {name: "Nocturne of Shadow", seq: [37, 39, 39, 83, 37, 39, 40], song: "assets/audio/nocturne-of-shadow.mp3"},

        // Prelude of Light -----------------------------------------
        // A Y A Y X A
        // ↑ → ↑ → ← ↑
        {name: "Prelude of Light", seq: [65, 89, 65, 89, 88, 65], song: "assets/audio/prelude-of-light.mp3"},
        {name: "Prelude of Light", seq: [38, 39, 38, 39, 37, 38], song: "assets/audio/prelude-of-light.mp3"},

        // Song of Healing ------------------------------------------
        // X Y R X Y R
        // ← → ↓ ← → ↓
        {name: "Song of Healing", seq: [88, 89, 82, 88, 89, 82], song: "assets/audio/song-of-healing.mp3"},
        {name: "Song of Healing", seq: [37, 39, 40, 37, 39, 40], song: "assets/audio/song-of-healing.mp3"},

        // Inverted Song of Time ------------------------------------
        // R L Y R L Y
        // ↓ A → ↓ A →
        {name: "Inverted Song of Time", seq: [82, 76, 89, 82, 76, 89], song: "assets/audio/inverted-song-of-time.mp3"},
        {name: "Inverted Song of Time", seq: [40, 65, 39, 40, 65, 39], song: "assets/audio/inverted-song-of-time.mp3"},

        // Song of Double Time --------------------------------------
        // Y Y L L R R
        // → → A A ↓ ↓
        {name: "Song of Double Time", seq: [89, 89, 76, 76, 82, 82], song: "assets/audio/song-of-double-time.mp3"},
        {name: "Song of Double Time", seq: [39, 39, 65, 65, 40, 40], song: "assets/audio/song-of-double-time.mp3"},

        // Sonata of Awakening --------------------------------------
        // A X A X L Y L
        // ↑ ← ↑ ← A → A
        {name: "Sonata of Awakening", seq: [65, 88, 65, 88, 76, 89, 76], song: "assets/audio/sonata-of-awakening.mp3"},
        {name: "Sonata of Awakening", seq: [38, 37, 38, 37, 65, 39, 65], song: "assets/audio/sonata-of-awakening.mp3"},

        // Song of Soaring ------------------------------------------
        // R X A R X A
        // ↓ ← ↑ ↓ ← ↑
        {name: "Song of Soaring", seq: [82, 88, 65, 82, 88, 65], song: "assets/audio/song-of-soaring.mp3"},
        {name: "Song of Soaring", seq: [40, 37, 38, 40, 37, 38], song: "assets/audio/song-of-soaring.mp3"},

        // Goron Lullaby --------------------------------------------
        // L Y X L Y X L
        // A → ← A → ← → A
        {name: "Goron Lullaby", seq: [76, 89, 88, 76, 89, 88, 76], song: "assets/audio/goron-lullaby.mp3"},
        {name: "Goron Lullaby", seq: [65, 39, 37, 65, 39, 37, 39, 65], song: "assets/audio/goron-lullaby.mp3"},

        // New Wave Bossa Nova --------------------------------------
        // X A X Y R X Y
        // ← ↑ ← → ↓ ← → 
        {name: "New Wave Bossa Nova", seq: [88, 65, 88, 89, 82, 88, 89], song: "assets/audio/new-wave-bossa-nova.mp3"},
        {name: "New Wave Bossa Nova", seq: [37, 38, 37, 39, 40, 37, 39], song: "assets/audio/new-wave-bossa-nova.mp3"},

        // Elegy of Emptiness ---------------------------------------
        // Y X Y R Y A X
        // → ← → ↓ → ↑ ←
        {name: "Elegy of Emptiness", seq: [89, 88, 89, 82, 89, 65, 88], song: "assets/audio/elegy-of-emptiness.mp3"},
        {name: "Elegy of Emptiness", seq: [39, 37, 39, 40, 39, 38, 37], song: "assets/audio/elegy-of-emptiness.mp3"},

        // Oath to Order --------------------------------------------
        // Y R L R Y A
        // → ↓ A ↓ → ↑
        {name: "Oath to Order", seq: [89, 82, 76, 82, 89, 65], song: "assets/audio/oath-to-order.mp3"},
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
