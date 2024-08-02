function showCapital(){
    var country1=document.getElementById('country');
    var countryselected=country1.value;
    var capitalselected=document.getElementById('capital');
    switch(countryselected){
        case 'India':
            capitalselected.innerText="New Delhi";
            break;
            case 'China':
            capitalselected.innerText="Beijing";
            break;
            case 'Germany':
            capitalselected.innerText="Berlin";
            break;
            case 'Russia':
            capitalselected.innerText="Moscow";
            break;
            case 'USA':
            capitalselected.innerText="Washington DC";
            break;
            default:
            capitalselected.innerText="";
            break;

            
    } 
}