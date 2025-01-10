///// PDF Exporter Functions /////
const { PDFDocument, rgb } = PDFLib;

async function generateCharacterPDF() {
    try {
        // Load the background image
        const backgroundImageUrl = '/Assets/csheet.jpg';
        const backgroundBytes = await fetch(backgroundImageUrl).then(res => res.arrayBuffer());

        // Create a new PDF
        const pdfDoc = await PDFDocument.create();

        // Add a page and set dimensions
        const page = pdfDoc.addPage([600, 800]); // Width x Height

        // Embed the background image
        const bgImage = await pdfDoc.embedJpg(backgroundBytes);
        page.drawImage(bgImage, {
            x: 0,
            y: 0,
            width: page.getWidth(),
            height: page.getHeight(),
        });

        // Define the character's properties
        const character = {
            name: app.name,
            aspectA: app.aspects[0],
            aspectB: app.aspects[1],
            edge: app.getCurrentPath().edges.find(a => a.hasIt == true).name,
            ...Array.from({ length: app.calcAllIncl().length }, (_, index) => {
                return { [`inclination${index + 1}`]: app.calcAllIncl()[index].name };
            }).reduce((acc, curr) => ({ ...acc, ...curr }), {}), // Merge
            // inclination1: app.calcAllIncl()[0].name,
            // inclination2: app.calcAllIncl()[1].name,
            // inclination3: app.calcAllIncl()[2].name,
            // inclination4: app.calcAllIncl()[3].name,
            // inclination5: app.calcAllIncl()[4].name,
            // inclination6: app.calcAllIncl()[5].name,
            armor: app.getCurrentPath().armor.value,
            avoidance: app.getCurrentPath().avoidance,
            miasma: app.getCurrentPath().miasmaResist,
            karma: app.karma,
            path: app.getCurrentPath().name,
            items: "ITEMS",
            equip1: app.equipment[0],
            ...Array.from({ length: 5 }, (_, index) => {
                const gearStart = index * 2; // Start index for gear pairs
                const gearEnd = gearStart + 2; // End index for gear pairs
                return { [`equip${index + 2}`]: app.gear.slice(gearStart, gearEnd).join(", ") };
            }).reduce((acc, curr) => ({ ...acc, ...curr }), {}), // Merge into character object
            // equip2: `${app.gear[0]},  ${app.gear[1]}`,
            // equip3: `${app.gear[2]},  ${app.gear[3]}`,
            // equip4: `${app.gear[4]},  ${app.gear[5]}`,
            // equip5: `${app.gear[6]},  ${app.gear[7]}`,
            // equip6: `${app.gear[8]},  ${app.gear[9]}`,
            //equip2: app.gear[1],
            // equip2: app.gear[0],
            // equip2: app.gear[0],
            // equip2: app.gear[0],
            // equip1: app.gear[app.gear.length -1],
        };

        // Set the font and write the character data on the page
        const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        const fontSize = 12;

        // Define x and y positions for each property
        const propertyPositions = {
            name: { x: 200, y: 725 },
            aspectA: { x: 150, y: 637 },
            aspectB: { x: 150, y: 602 },
            edge: { x: 400, y: 618 },
            // inclination1: { x: 90, y: 475 },
            // inclination2: { x: 90, y: 445 },
            // inclination3: { x: 90, y: 415 },
            // inclination4: { x: 90, y: 385 },
            armor: { x: 374, y: 290 },
            avoidance: { x: 455, y: 263 },
            miasma: { x: 528, y: 285 },
            karma: { x: 523, y: 174,},
            path: { x: 250, y: 679 },
            items: { x: 171, y: 234 },
            equip1: { x: 90, y: 231 },
            // equip2: { x: 90, y: 173 },
            // equip3: { x: 90, y: 144 },
            // equip4: { x: 90, y: 115 },
            // equip5: { x: 90, y: 86 },
            // equip6: { x: 90, y: 57 },
        };

        const maxInclItems = Math.min(app.calcAllIncl().length, 10);
        const inclStartY = 475;
        const inclX = 90;
        const itemLinepacing = 29; // Spacing between each item

        for (let i = 1; i <= maxInclItems; i++) {
            propertyPositions[`inclination${i}`] = {
                x: inclX,
                y: inclStartY - (i - 1) * itemLinepacing,
            };
        }

        const maxGearItems = app.gear.length; // Define maximum number of gear items
        const gearStartY = 202; // Starting Y position for gear items
        const gearX = 90; // Fixed X position for gear items
        //const gearSpacing = 29; // Spacing between each item

        for (let i = 1; i <= maxGearItems; i++) {
            propertyPositions[`equip${i}`] = {
                x: gearX,
                y: gearStartY - (i - 1) * itemLinepacing, // Adjust Y position based on index
            };
        }

        Object.keys(character).forEach((key) => {
            if (propertyPositions[key]) {
                const { x, y } = propertyPositions[key];
                page.drawText(`${character[key]}`, {
                    x: x,
                    y: y,
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0), // Black
                });
            }
        });

        // Save the PDF
        const pdfBytes = await pdfDoc.save();

        // Trigger download
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${character.name}_Character_Sheet.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error)
        callError("Error generating PDF. Please insure all info is completed.");
    }
};