///// PDF Stuff /////
const { degrees, PDFDocument, rgb, StandardFonts, PDFTextField, PDFRadioGroup, PDFDropdown } = PDFLib

const btn = document.querySelector('#fillForm');

// pdfBtn.addEventListener("click", fillForm);
// pdfBtn.addEventListener("click", () => {
//     fillForm()
//       .then(() => {
//         console.log("Form filled successfully!");
//       })
//       .catch((error) => {
//         console.log("Error:", error)
//         const erMsg = "Not enough info to complete character sheet";
//         callError(erMsg);
//       });
// });

async function fillForm() {
    // Fetch the PDF with form fields
    const formUrl = "Assets/ezd6PCform.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    // Get the form containing all the fields
    const form = pdfDoc.getForm();

    //Find form fields and set the default font size
    const fields = form.getFields();

    fields.forEach(field => {

        if (field instanceof PDFTextField) {
            const type = "Text Field";
            const name = field.getName();
            console.log(`${type}: ${name}`);
        }
        if (field instanceof PDFRadioGroup) {
            const type = "Radio Group";
            const name = field.getName();
            const options = field.getOptions()
            console.log(`${type}: ${name} | ` + 'Options:', options);
        }
        if (field instanceof PDFDropdown) {
            const type = "Dropdown";
            const name = field.getName();
            const options = field.getOptions()
            console.log(`${type}: ${name} | ` + 'Options:', options)
        }
    });

    // Set metadata
    pdfDoc.setTitle("EZD6 CS");
    pdfDoc.setAuthor("EZ Tools, by TBG");

    // Get all fields in the PDF by their names
    const nameField = form.getTextField('Name');
    const speciesField = form.getTextField('Species');
    const inclField = form.getTextField('Inclinations');
    inclField.setFontSize(12); //default huge for some reason


    const boonsField = form.getTextField('Boons');
    const sorcDetailsField = form.getTextField('Sorcery');
    const gearField = form.getTextField('Equipment');
    const karmaDrop = form.getDropdown('Karma');
    const karmaOptions = karmaDrop.getOptions();

    const wealthGroup = form.getRadioGroup('Group1');
    const wealthOptions = wealthGroup.getOptions();

    const detailsField = form.getTextField('Equipment 2');
    const featuresField = form.getTextField('Features');
    featuresField.setFontSize(13); //default strange size

    const sorcCircleField = form.getTextField('Circle');
    const armorField = form.getTextField('Armor');

    const potionsField = form.getTextField('Potions');
    const scrollsField = form.getTextField('Scrolls');
    const weaponsField = form.getTextField('Weapons');
    const pathField = form.getTextField('Path');
    const strikesField = form.getTextField('Strikes');
    strikesField.setFontSize(60); //more legible
    strikesField.setAlignment(1); //1 for center in pdf-lib

    const heroDrop = form.getDropdown('Hero Die');
    const heroOptions = heroDrop.getOptions();

    const aSaveDrop = form.getDropdown('Armor Save');
    aSaveDrop.setOptions(['2+', '3+', '4+', '5+', '6'])
    const aSaveOptions = aSaveDrop.getOptions();

    const healthField = form.getTextField('Health');
    const aspectsField = form.getTextField('Aspects');

    // Fill in pdf fields
    //if (app.name) {nameField.setText(app.name)};
    nameField.setText(app.name)
    speciesField.setText(app.species);
    wealthGroup.select(wealthOptions[wealthDropFix]);
    
    if (app.inclinations.length <= 0) {
        getInclinations(1);
        console.log("Auto rolled Inclinations")
    };

    inclField.setText(
        app.inclinations.join('\n')
    );

    karmaDrop.select(karmaOptions[app.karma]);
    
    if (app.boons) {boonsField.setText(app.boons.join(", "))};

    if (app.path === "Conjurer") {
        sorcCircleField.setText(app.circleTxt);
        sorcDetailsField.setText("Pages 35-39 detail the Circles of Sorcery. ");
    }
    
    gearField.setText(app.equipment.join(", "));
    detailsField.setText(app.description);
    featuresField.setText(app.features);
    
    armorField.setText("M. Save: " + app.miracleSave);

    //heroDrop.select(heroOptions[1]); //set by default
    
    aSaveDrop.select(aSaveOptions[aSaveOption]);

    healthField.setText(app.strikes);
    aspectsField.setText(app.story);

    if (app.potions) {
        potionsField.setText(
            app.potions.join('\n'),
        );
    };
    if (app.scrolls) {
        scrollsField.setText(
            app.scrolls.join('\n'),
        );
    };
    weaponsField.setText("Decide on your weaponry (pg. 40)");
    pathField.setText(app.path);
    strikesField.setText(app.strikes);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    download(pdfBytes, app.name, "application/pdf");
};