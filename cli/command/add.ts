import fs from 'fs';
import Tree from "console-log-tree";

const defaultDir = './src/app/(auth)/admin';

export const addClientFolder = (folderName: string) => {

    if (!fs.existsSync(defaultDir + '/' + folderName.toLocaleLowerCase())) {
        // If it doesn't exist, create the directory
        fs.mkdirSync(defaultDir + '/' + folderName.toLocaleLowerCase());
        console.log(`Directory '${defaultDir + '/' + folderName}' created. \n`);
    } else {
        console.log(`Directory '${defaultDir + '/' + folderName}' already exists.`);
    }

    return addFiles(folderName)
};


const addFiles = (folderName: string ) => {

    const stubFunctionName = "{_function_name_}"
    const stubEndpointName = "{_endpoint_name_}"

    const files = fs.readdirSync('./cli/stubs').map( file => { return file })

    files.map(async (file) => {
        const reading       = fs.readFileSync("./cli/stubs/" + file, "utf8");
        const firstLetter   = folderName.charAt(0);
        const letters       = folderName.slice(1);
        const functionName  = firstLetter.toUpperCase() + letters;
        const content       = reading.replaceAll(stubFunctionName, functionName).replaceAll(stubEndpointName, folderName.toLocaleLowerCase());

        return createAndWriteFile(folderName, file, content)
    });

    Tree.log({
        "name": `${defaultDir}`,
        "children": [
            {
                "name": `${folderName}`,
                "children": [
                    { "name": "cards.tsx" },
                    { "name": "data-controller.tsx" },
                    { "name": "page.tsx" },
                    { "name": "table.tsx" },
                    { "name": "view-controller.tsx" },
                ]
            },
        ]
    })
    process.exit(0)
}


export const createAndWriteFile = (foldername: string, filename: string, content: string) =>
{
    try {
        return fs.writeFileSync(`./${defaultDir}/${foldername}/${filename.replaceAll('.stub','')}.tsx`, content);
    } catch (err) {
        console.error(err);
    }
}