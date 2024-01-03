// THE FIRST STEPS CODING STARTS HERE

var formSection = document.querySelector(".form_section");
var contentFilled = document.querySelector(".fORM");
var nAmE = document.getElementById("fullName");
var eMAIL = document.getElementById("mAIL");
var contactNumber = document.getElementById("number");
var sectionTwo = document.querySelector(".step-two");
const nextStepone = document.getElementById("exit-step1");

//BUTTONS TO SHOW STAGES


const indicateStgOne = document.querySelector(".stepsA");
const indicateStgTwo = document.querySelector(".stepsB");
const indicateStgThree = document.querySelector(".stepsC");
const indicateStgFour  = document.querySelector(".stepsD");

//THE BUUTONS BELOW ARE IN STEP

var monthButton = document.getElementById("month_button");
var yearButton = document.getElementById("yearly_button");


contentFilled.addEventListener("submit", e=>{
    e.preventDefault();
    checkInmput();
})

let about = [];

const checkInmput = ()=>{
    var FormData = {};
    if (nAmE.value == ""){
        document.getElementById("error_messn").style.display = "block";
        nAmE.classList.toggle("error");
        return;
    }

    else{
        FormData.name = String(nAmE.value);
    }

    if (eMAIL.value == ""){
        document.getElementById("error_messm").style.display = "block";
        eMAIL.classList.toggle("error");
        return
    }

    else {
        let currentMail = eMAIL.value;
        var verifyPattern =  /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
        if(verifyPattern.test(currentMail)=== true){

            currentMail = eMAIL.value.trim();
             FormData.mail = String( eMAIL.value.trim());
        }

        else{
            document.getElementById("error_messm").textContent = "This must be mail";
            eMAIL.classList.toggle("error");
            return
        }
    }

    if (contactNumber.value == ""){
        document.getElementById("error_messp").style.display = "block"
        contactNumber.classList.toggle("error");
        return
    }

    else{
        FormData.contacts = Number(contactNumber.value);
    }

    about.push(FormData);
    console.log(about)
    formSection.classList.toggle("success");
    sectionTwo.classList.add("start2");
    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.add("indicate");

}

var month = document.querySelector(".monthtly_step2");
var year = document.querySelector(".yearly_step2");


priceOne = document.querySelector(".name_price1");
priceTwo = document.querySelector(".name_price2");
priceThree = document.querySelector(".name_price3");


var freeA = document.createElement("li");
var freeAd = document.createElement("li");
var freeP = document.createElement("li");


let stepTwoOject = {planz: "(Monthly)"}

var yearlyStepTwo = ()=>{

    document.getElementById("priceA").textContent = "$90/yr";
    document.getElementById("priceAd").textContent = "$120/yr";
    document.getElementById("priceP").textContent = "$150/yr";

    freeA.setAttribute("id", "freeAc");
    freeA.textContent = "2 months free";
    priceOne.appendChild(freeA);

    freeAd.setAttribute("id", "freeAd");
    freeAd.textContent = "2 months free";
    priceTwo.appendChild(freeAd);
    
    freeP.setAttribute("id", "pRo");
    freeP.textContent = "2 months free";
    priceThree.appendChild(freeP);

    stepTwoOject.planz = "(Yearly)";

}

var disAbleYearly = ()=>{
    document.getElementById("priceA").textContent = "$9/mo";
    document.getElementById("priceAd").textContent = "$15/mo";
    document.getElementById("priceP").textContent = "$12/mo";


    priceOne.removeChild(freeA);
    priceTwo.removeChild(freeAd);
    priceThree.removeChild(freeP);

    stepTwoOject.planz = "(Monthly)";

}

// DETERMINING FUCTION OF PRICE OF STEP THREE
var onliservicePrice = document.getElementById("step_3_cost");
var storagePrice  = document.getElementById("step_3_costLS");
var customprofulrPrice = document.getElementById("step_3_costC");

//INITIAL PRICES TO BE DISPLAYED BY DEFAULT

onliservicePrice.textContent = "+$1/mo";
storagePrice.textContent = "+$2/mo";
customprofulrPrice.textContent = "+$2/mo";

//INITIAL PRICES TO BE DISPLAYED BY DEFAULT ENDS HERE      
var stepThreepriceFunction = ()=>{
  if (stepTwoOject.planz === "(Monthly)"){
      onliservicePrice.textContent = "+$1/mo";
      storagePrice.textContent = "+$2/mo";
      customprofulrPrice.textContent = "+$2/mo";
  }

  else{
      onliservicePrice.textContent = "+$10/yr";
      storagePrice.textContent = "+$20/yr";
      customprofulrPrice.textContent = "+$20/yr";
  }
}

// DETERMINING FUCTION OF PRICE OF STEP THREE ENDS HERE

var durationAtThree = ()=>{
    if(stepTwoOject.planz === "(Monthly)"){
        document.getElementById("total_cost_perperiod").textContent = "(per month)";
    }
    else{
        document.getElementById("total_cost_perperiod").textContent = "(per year)";
    }
}

var durationContainer = document.querySelector(".duration_container");
var switchContainer = document.querySelector(".switch_step1_or_tep2");


var optionChosen = document.getElementById("pLaN");
var specifyP = document.getElementById("specp");
var plansPrice = document.getElementById("pLaN_PrIcE");


let acadePrice = 0;
let advancePrice = 0;
let proPrice = 0;

var zeroPricesinTwo = ()=>{
    acadePrice = 0;
    advancePrice = 0;
    proPrice = 0;
}

var ac = document.getElementById("arcade");
ac.addEventListener("click", ()=>{
    stepTwoOject.name = "Arcade";
    ac.classList.toggle("ops");
    ad.classList.remove("ops");
    pr.classList.remove("ops");
    optionChosen.textContent =  stepTwoOject.name;
    specifyP.textContent = stepTwoOject.planz;

    if(stepTwoOject.planz === "(Monthly)"){
        plansPrice.textContent = "$9/mo";
        acadePrice = 9;
    }
    else{
        plansPrice.textContent = "$90/yr";
        acadePrice = 90;
    }
})

var ad = document.getElementById("advance");
ad.addEventListener("click", ()=>{
    stepTwoOject.name = "Advance";
    ac.classList.remove("ops");
    pr.classList.remove("ops");
    ad.classList.toggle("ops");

    optionChosen.textContent =  stepTwoOject.name;
    specifyP.textContent = stepTwoOject.planz;

    if(stepTwoOject.planz === "(Monthly)"){
        plansPrice.textContent = "$12/mo";
        advancePrice = 12;
    }

    else{
        plansPrice.textContent = "$120/yr";
        advancePrice = 120;
    }
})

var pr =document.getElementById("pro");
pr.addEventListener("click", ()=>{
    stepTwoOject.name = "Pro";
    ac.classList.remove("ops");
    ad.classList.remove("ops");
    pr.classList.toggle("ops");
    optionChosen.textContent =  stepTwoOject.name;
    specifyP.textContent = stepTwoOject.planz;

    if(stepTwoOject.planz === "(Monthly)"){
        plansPrice.textContent = "$15/mo";
        proPrice = 15;
    }
    else{
        plansPrice.textContent = "$150/yr";
        proPrice = 120;
    }
})


// DETERMINER DTERMINE IF ITS'S MONTHLY OR YEARLY


const bactTone = document.getElementById("back_to_one");

bactTone.addEventListener("click", ()=>{
    formSection.classList.remove("success");
    sectionTwo.classList.remove("start2");
    indicateStgOne.classList.remove("deFault");
    indicateStgTwo .classList.remove("indicate");
})

document.getElementById("to_step_three").addEventListener("click", ()=>{
    sectionTwo.classList.add("goback");
    document.querySelector(".ADS-ON").classList.add("out");

    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.remove("indicate");
    indicateStgThree.classList.add("indicate");
})

// STEP TWO PEROD SELECTION

window.onload = ()=>{
    document.getElementById("month_button").classList.toggle("sel");
    document.getElementById("yearly_button").classList.remove("sel");
    
}

var plansContainer = document.querySelector(".plans_container");

document.getElementById("yearly_button").addEventListener("click", ()=>{
    document.getElementById("month_button").classList.remove("sel");
    document.getElementById("yearly_button").classList.toggle("sel");

    monthButton.style.background = "hsl(213, 96%, 18%)";
    yearButton.style.background = "white";
    year.style.color = "hsl(213, 96%, 18%)";
    month.style.color = "hsl(231, 11%, 63%)";
    document.querySelectorAll(".two_options").forEach((y)=>{
        y.classList.add("yearly");

    });

    yearlyStepTwo();
    stepThreepriceFunction();
    durationAtThree();
    switchContainer .classList.add("change-YeArLy");
    plansContainer.classList.add("yEaRlyS");

    count = -1;
    countTwo = -1;
    countThree = -1;
    onselse();
    lsselse();
    cuspselse();
    zeroPricesinTwo();

    onlinePrice = 0;
    largeStoragePrice = 0;
    customizedProfile = 0;
    undoPushPrices();

    stepTwoOject.name = "";
    ac.classList.remove("ops");
    pr.classList.remove("ops");
    ad.classList.remove("ops");
    stepTwoOject.planz = "";
    specifyP.textContent = "";
    plansPrice.textContent = "";
    optionChosen.textContent = "";
    advancePrice = 0;
    proPrice = 0;
    acadePrice = 0;


})


document.getElementById("month_button").addEventListener("click", ()=>{
    document.getElementById("month_button").classList.toggle("sel");
    document.getElementById("yearly_button").classList.remove("sel");


    monthButton.style.background = "white";
    yearButton.style.background = "hsl(213, 96%, 18%)";
    year.style.color = "hsl(231, 11%, 63%)";
    month.style.color = "hsl(213, 96%, 18%)";


    document.querySelectorAll(".two_options").forEach((y)=>{
        y.classList.remove("yearly")

    });

    
    disAbleYearly();
    stepThreepriceFunction();
    durationAtThree();
    plansContainer.classList.remove("yEaRlyS");
    switchContainer .classList.remove("change-YeArLy");
    // sectionTwo.classList.remove("adjustHeight");

    count = -1;
    countTwo = -1;
    countThree = -1;
    onselse();
    lsselse();
    cuspselse();
    zeroPricesinTwo();
    onlinePrice = 0;
    largeStoragePrice = 0;
    customizedProfile = 0;

    undoPushPrices();

    stepTwoOject.name = "";
    ac.classList.remove("ops");
    pr.classList.remove("ops");
    ad.classList.remove("ops");
    stepTwoOject.planz = "";
    specifyP.textContent = "";
    plansPrice.textContent = "";
    optionChosen.textContent = "";
    advancePrice = 0;
    proPrice = 0;
    acadePrice = 0;

})

// CODE TO REMOVE UNSELECTED LINES OF CODE

let onlinePrice = 0;
let largeStoragePrice = 0;
let customizedProfile = 0;

var removePricevulusOns = ()=>{
    onlinePrice = 0;

}


var removePricevalusLs = ()=>{
    largeStoragePrice = 0;

}

var removePricevulusCusp = ()=>{
    customizedProfile = 0;

}

//STEP TWO PERIOD SELECTION STOPS HERE


var stepTwoData = [];



// STEP THREE CODE


var steptwoPrices = [];



let computationData = [];
 var getPricevalueforOs = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        // computationData.push(1);
        onlinePrice = 1;
    }
    else{
        // computationData.push(10);
        onlinePrice = 10;
    }

 }

 
 var getPricevalueforLs = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        // computationData.push(2);
        largeStoragePrice = 2;
    }
    else{
        // computationData.push(20);
        largeStoragePrice = 20;
    }

 }

 
 var getPricevalueforCp = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        // computationData.push(2);
        customizedProfile = 2;
    }
    else{
        // computationData.push(20);
        customizedProfile = 20;
    }

 }


let steptwoValues = [];

var olpriceToShow = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        steptwoPrices.push("+$1/mo");
        
    }

    else{
        steptwoPrices.push("+$10/yr");
    
    }
}

var lstoragepriceToShow = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        steptwoPrices.push("+$2/mo");
    
    }

    else{
        steptwoPrices.push("+$20/yr");
    }
}

var csppriceToShow = ()=>{
    if (stepTwoOject.planz === "(Monthly)"){
        steptwoPrices.push("+$2/mo");
        
    }

    else{
        steptwoPrices.push("+$20/yr");
    
    }
}


var onlineS = document.querySelector(".online_service");
var largeS = document.querySelector(".large_storage");
var customize = document.querySelector(".costimizable");






var stepThreestores = [];


let count = 0;
var counTer = ()=>{
    count = (count === 1) ? -1:1;
    return count
}


onlineS.addEventListener("click", ()=>{
    counTer()
    if (count ===1){
        onlineS.classList.add("selected");
        document.querySelector(".mark_divA").classList.add("marked");
        stepThreestores.push("Online service");
        olpriceToShow();
        getPricevalueforOs();

    }
    else{
        onselse();
    }
    
})

// ELSE FUNCTIONS

var onselse = ()=>{
    onlineS.classList.remove("selected");
        document.querySelector(".mark_divA").classList.remove("marked");
        removePricevulusOns();


        var indexToremove = stepThreestores.indexOf("Online service");
        if (indexToremove !== -1){
            stepThreestores.splice(indexToremove,1);

        }

        if(stepTwoOject.planz === "(Monthly)"){
            var onlineMonthlyToremove =  steptwoPrices.indexOf("+$1/mo");
            if(onlineMonthlyToremove !== -1){
                steptwoPrices.splice(onlineMonthlyToremove, 1);
            
            }
    
        }

       

        else{
            var onlineYearlyToremove =  steptwoPrices.indexOf("+$10/yr");
            if(onlineYearlyToremove !== -1){
                steptwoPrices.splice(onlineYearlyToremove,1);
                steptwoValues.splice(onlineYearlyToremove,1);
            }
        }
}

///ELSE FUNCTIONS
var lsselse = ()=>{
    largeS.classList.remove("selected");
    document.querySelector(".mark_divB").classList.remove("marked");

    removePricevalusLs();

    var indexToremovel = stepThreestores.indexOf("Larger storage");
    if (indexToremovel !== -1){
        stepThreestores.splice(indexToremovel,1);
    }

    if (stepTwoOject.planz === "(Monthly)"){
         var largeStoraveMonthlyRemove = steptwoPrices.indexOf("+$2/mo");
         if (largeStoraveMonthlyRemove !==-1){
            steptwoPrices.splice(largeStoraveMonthlyRemove, 1);
            
         }

         

    }
    else{
        var largestoreyear = steptwoPrices.indexOf("+$20/yr");
        if(largestoreyear !== -1){
            steptwoPrices.splice(largestoreyear, 1);
        
        }
     }
}

/// ELSE

var undoPushPrices = ()=>{
    steptwoPrices.splice(0, steptwoPrices.length);
 }


////


let countTwo = 0;
var counTerTwo = ()=>{
    countTwo = (countTwo === 1) ? -1:1;
    return countTwo
}


largeS.addEventListener("click", ()=>{
    counTerTwo();
    if (countTwo ===1 ){
        largeS.classList.add("selected");
        document.querySelector(".mark_divB").classList.add("marked");
        stepThreestores.push("Larger storage");
        lstoragepriceToShow();
        getPricevalueforLs();
    }
    else{

        lsselse();
       
    }

    
});




let countThree = 0;
var counTerThree = ()=>{
    countThree = (countThree === 1) ? -1:1;
    return countThree
}

customize.addEventListener("click", ()=>{
    counTerThree();
    if (countThree ===1 ){
        customize.classList.add("selected");
        document.querySelector(".mark_divC").classList.add("marked");
        stepThreestores.push("Customize profile");

        csppriceToShow();
        getPricevalueforCp();
       
    }
    else{

        cuspselse()


    }

})


cuspselse = ()=>{
    customize.classList.remove("selected");
        document.querySelector(".mark_divC").classList.remove("marked");
        removePricevulusCusp();

        var indexToremovec = stepThreestores.indexOf("Customize profile");
        if (indexToremovec !== -1){
            stepThreestores.splice(indexToremovec,1);
        }

        if(stepTwoOject.planz === "(Monthly)"){
            var custpMonthlytoremove = steptwoPrices.indexOf("+$2/mo");
            if(custpMonthlytoremove !== -1){
                steptwoPrices.splice(custpMonthlytoremove, 1);
            }


        }
        else{
            var custprofYearlyToremove = steptwoPrices.indexOf("+$20/yr");
            if(custprofYearlyToremove !== -1){
                steptwoPrices.splice(custprofYearlyToremove, 1);
            }
        }

}




var totalDisplay = document.getElementById("total_cost_price");


document.getElementById("back_to_2").addEventListener("click", ()=>{
    document.querySelector(".ADS-ON").classList.remove("out");
    sectionTwo.classList.remove("goback");

    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.add("indicate");
    indicateStgThree.classList.remove("indicate");

})


var contThreeDisplay1 = document.getElementById("retriever1");
var contThreeDisplay2 = document.getElementById("retriever2");
var contThreeDisplay3 = document.getElementById("retriever3");


var pushThreeSelected = ()=>{
    if(stepThreestores.length ===3){
        document.querySelector(".summaryOfselection").classList.add("three");
        document.querySelector(".filled_selected_for_all_steps").classList.add("three");
    }

    else if(stepThreestores.length === 2){
        document.querySelector(".filled_selected_for_all_steps").classList.add("two");
        document.querySelector(".filled_selected_for_all_steps").classList.remove("three");
    }
    else{
        document.querySelector(".summaryOfselection").classList.remove("three");
        document.querySelector(".filled_selected_for_all_steps").classList.remove("three");
        document.querySelector(".filled_selected_for_all_steps").classList.remove("two");
    }
    contThreeDisplay1.textContent = stepThreestores[0];
    contThreeDisplay2.textContent = stepThreestores[1];
    contThreeDisplay3.textContent = stepThreestores[2];
}

let pholder1 = document.getElementById("service_price");
let pholder2 = document.getElementById("storage_price");
let pholder3 = document.getElementById("cus_pRICE");

 var pushPrices = ()=>{
    pholder1.textContent = steptwoPrices[0];
    pholder2.textContent = steptwoPrices[1];
    pholder3.textContent = steptwoPrices[2];
 }

 var emptyControl = [];

  

document.getElementById("next_from_three").addEventListener("click", ()=>{
    document.querySelector(".ADS-ON").classList.remove("out");
    document.querySelector(".step4").classList.add("show");
    pushThreeSelected();
    pushPrices();
     
    let totalSum = Number(onlinePrice) + Number(largeStoragePrice) + Number(customizedProfile) + Number(acadePrice) + Number(advancePrice) + Number(proPrice);
    let realll = "";
    if(stepTwoOject.planz === "(Monthly)"){
        realll = `$${totalSum}/mo`;
    }
    else{
        realll = `$${totalSum}/yr`;
    }

    totalDisplay.textContent = realll;

    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.remove("indicate");
    indicateStgThree.classList.remove("indicate");
    indicateStgFour.classList.add("indicate");
})

var backTotwoLink = document.getElementById("beginchange-from-two");
backTotwoLink.addEventListener("click", ()=>{
    sectionTwo.classList.remove("goback");
    document.querySelector(".step4").classList.remove("show");
    steptwoPrices = [];
    onlinePrice = 0;
    largeStoragePrice = 0;
    customizedProfile = 0;
    acadePrice = 0;
    advancePrice = 0;
    proPrice = 0;


    //undo 2

    ac.classList.remove("ops");
    ad.classList.remove("ops");
    pr.classList.remove("ops");
    acadePrice = 0;
    advancePrice = 0;
    proPrice = 0;

    //undo stage 3


    count = -1;
    countTwo = -1;
    countThree = -1;
    onselse();
    lsselse();
    cuspselse();
    zeroPricesinTwo();

    onlinePrice = 0;
    largeStoragePrice = 0;
    customizedProfile = 0;
    undoPushPrices();

    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.add("indicate");
    indicateStgThree.classList.remove("indicate");
    indicateStgFour.classList.remove("indicate");

    //undo everything in stage two

    specifyP.textContent = "";
    plansPrice.textContent = "";
    optionChosen.textContent = "";

})

// STEP THREE ENDS HERE

// STEP FOUR STARTS HERE

var stepfour = document.querySelector(".step4");


document.getElementById("bact_to_three").addEventListener("click", ()=>{
    stepfour.classList.remove("show");
    document.querySelector(".ADS-ON").classList.add("out");

    indicateStgOne.classList.add("deFault");
    indicateStgTwo .classList.remove("indicate");
    indicateStgThree.classList.add("indicate");
    indicateStgFour.classList.remove("indicate");
    
    
})
document.getElementById("to_summary").addEventListener("click", ()=>{

    stepfour.classList.add("next");
    document.querySelector(".final").classList.add("show");
    document.querySelector(".attribution").style.display = "flex";

})