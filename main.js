function startclassify(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifyer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KvpvxMxmF/model.json",readymodel)

}
function readymodel(){
    console.log("Model is loaded");
    classifyer.classify(gotresult);
}
function gotresult(error,result){

}
