function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "nepal"){
        var optionArray = ['butwal|Butwal', 'ktm|KTM', 'pokhara|Pokhara', 'biratnagar|Biratnagar'];
    }

    else if(s1.value == "america"){
        var optionArray = ['new york|New York','los angeles|Los Angeles','chicago|Chicago','houston|Houston'];
    }

    else if(s1.value == undefined || s1.value == ""){
        var optionArray =  document.getElementById(s2).setAttribute("disabled", "disabled"); 
    }

    for (var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
}