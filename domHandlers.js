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

    // survivorTalentsArray.forEach(talent => {
    //     const button = document.createElement("button");
    //     button.classList.add("glide-sml");
    //     button.textContent = talent;
    //     button.setAttribute("onclick", `getInclinations(2, this)`);
    //     document.getElementById("survivor-talents-list").appendChild(button);
    //     // document.getElementById("talents-holder").style.display = "block";
    // });

    // if (app.physMutatationsMin >= 1) {
    //     physicalMutationsArray.forEach(talent => {
    //         const button = document.createElement("button");
    //         button.classList.add("glide-sml");
    //         button.textContent = talent;
    //         button.setAttribute("onclick", `getInclinations(2, this)`);
    //         document.getElementById("phys-mutations-list").appendChild(button);
    //         document.getElementById("phys-mutations-holder").style.display = "block";
    //     });
    // };

    // if (app.mentalMutationsMin >= 1) {
    //     mentalMutationsArray.forEach(talent => {
    //         const button = document.createElement("button");
    //         button.classList.add("glide-sml");
    //         button.textContent = talent;
    //         button.setAttribute("onclick", `getInclinations(2, this)`);
    //         document.getElementById("mental-mutations-list").appendChild(button);
    //         document.getElementById("mental-mutations-holder").style.display = "block";
    //     });
    // };

    // if (app.dnaModsMin >= 1) {
    //     dnaModsArray.forEach(talent => {
    //         const button = document.createElement("button");
    //         button.classList.add("glide-sml");
    //         button.textContent = talent;
    //         button.setAttribute("onclick", `getInclinations(2, this)`);
    //         document.getElementById("dna-mods-list").appendChild(button);
    //         document.getElementById("dna-mods-holder").style.display = "block";
    //     });
    // };

    // if (app.bioSynthMin >= 1) {
    //     bioSynthPackagesArray.forEach(talent => {
    //         const button = document.createElement("button");
    //         button.classList.add("glide-sml");
    //         button.textContent = talent;
    //         button.setAttribute("onclick", `getInclinations(2, this)`);
    //         document.getElementById("bio-synth-list").appendChild(button);
    //         document.getElementById("bio-synth-holder").style.display = "block";
    //     });
    // };
};