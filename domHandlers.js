function loadInclinations() {
    document.getElementById("incl-header").style.display = "block";
    document.getElementById("talents-holder").style.display = "block";

    if (app.physMutatationsMin >= 1) {
        document.getElementById("phys-mutations-holder").style.display = "block";
    };
    if (app.mentalMutationsMin >= 1) {
        document.getElementById("mental-mutations-holder").style.display = "block";
    };
    if (app.dnaModsMin >= 1) {
        document.getElementById("dna-mods-holder").style.display = "block";
    };
    if (app.bioSynthMin >= 1) {
        document.getElementById("bio-synth-holder").style.display = "block";
    };
};