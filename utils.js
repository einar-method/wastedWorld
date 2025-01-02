function getDescrip(checker) {
    const form = document.getElementById("📝phys");
    if (checker || !form.value) {
        //we want to generate name
        app.getBody(1);
    } else if (!checker) {
        // we want form value
        if (form.value.length < 100){
            const output = form.value;
            app.getBody(1, output);
        } else  {
            const erMsg = "Please write a shorter description.";
            callError(erMsg);
        }
    }
};

function spinName(checker) {
    const form = document.getElementById("📝name");

    if (checker || !form.value) {
        //we want to generate name
        app.getName(1);  
    } else if (!checker) {
        // we want form value
        if (form.value.length < 35){
            const output = form.value;
            app.getName(1, output);
        } else  {
            const erMsg = "Please pick a shorter name.";
            callError(erMsg);
        }
    }
};