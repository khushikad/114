// https://teachablemachine.withgoogle.com/models/9898_xu88/

function startbutton() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9898_xu88/model.json", modelloaded);
console.log("work");
}

function modelloaded() {
    classifier.classify(gotresults);


}


function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        document.getElementById("result_label").innerHTML="I can hear " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy " + (results[0].confidence*100).toFixed(2) + " %";

        img1=document.getElementById("img1");
        
       
        if(results[0].label=="cat"){
            img1.src="cat.jpeg";
            
            
        }else if(results[0].label=="dog"){
            img1.src="dog.png";
           
        
        }
    }
    }

    





