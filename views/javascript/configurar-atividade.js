window.onload = function(){
    const minNumberOfEntries = 1;
    const maxNumberOfEntries = 10;
    const minNumberOfoptions = 2;
    const maxNumberOfoptions = 4;
    
    let entryCounter = -1; // número de entradas inseridas   
    let optionsCounter = -1; // número de opções inseridas na entrada atual
    let maxOptionsCounter = 0; // número máximo de opções inseridas para uma entrada

    const activityForm = document.getElementById("activityForm")
    const wrapper = document.getElementById("wrapper") 
    const addEntry = document.getElementById("addEntry")
    const addOption = document.getElementById("addOption")

    addEntry.onclick = () => {      
        ++entryCounter  
        addNewEntry()
        optionsCounter = -1
        addOption.disabled = false; 
    }

    addOption.onclick = () => {   
        ++optionsCounter     
        addNewOption()
    }

    activityForm.onsubmit = () => {
        let entriesValues = []
        let optionsValues = []

        entriesValues.push(document.getElementById("entry-0").value)
        entriesValues.push(document.getElementById("entry-1").value)

        document.getElementById("entries").value = entriesValues;
    }

    function addNewEntry(){
        let newEntry = document.createElement("input")
        newEntry.id = "entry-" + entryCounter;
        wrapper.appendChild(newEntry)
    }
    
    function addNewOption(){
        let newOption = document.createElement("input")
        newOption.id = "option-" + entryCounter + "-" + optionsCounter;
        wrapper.appendChild(newOption)
    
        let isCorrectAnswer = document.createElement("input")
        isCorrectAnswer.id = "isCorrectAnswer-" + entryCounter + "-" + optionsCounter;
        isCorrectAnswer.type = "radio";
        wrapper.appendChild(isCorrectAnswer)
    } 
}