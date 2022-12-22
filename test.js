document.getElementById('start').addEventListener('click', function(){
    
    document.getElementById('index').style.display = "none";
    document.getElementById('set-1').style.display = "block";

    
}); //테스트 스타트


document.getElementById('answer-11').addEventListener('click', function(){
    
    document.getElementById('set-1').style.display = "none";
    document.getElementById('set-2').style.display = "block";
    
});

document.getElementById('answer-12').addEventListener('click', function(){
    
    document.getElementById('set-1').style.display = "none";
    document.getElementById('set-2').style.display = "block";

});

document.getElementById('answer-21').addEventListener('click', function(){
    
    document.getElementById('set-2').style.display = "none";
    document.getElementById('set-3').style.display = "block";
    
});

document.getElementById('answer-22').addEventListener('click', function(){
    
    document.getElementById('set-2').style.display = "none";
    document.getElementById('set-3').style.display = "block";

});

document.getElementById('answer-31').addEventListener('click', function(){
    
    document.getElementById('set-3').style.display = "none";
    document.getElementById('set-4').style.display = "block";
    
});

document.getElementById('answer-32').addEventListener('click', function(){
    
    document.getElementById('set-3').style.display = "none";
    document.getElementById('set-4').style.display = "block";

});

document.getElementById('answer-41').addEventListener('click', function(){
    
    document.getElementById('set-4').style.display = "none";
    document.getElementById('set-5').style.display = "block";
    
});

document.getElementById('answer-42').addEventListener('click', function(){
    
    document.getElementById('set-4').style.display = "none";
    document.getElementById('set-5').style.display = "block";

});




//여기서부터 결과

var one = document.getElementsByName('one');
var two = document.getElementsByName('two');
var three = document.getElementsByName('three');
var four = document.getElementsByName('four');
var five = document.getElementsByName('five');


function hideDiv(e){
  document.getElementById('middle').style.display="none";
    document.getElementById('result-' + e).style.display = "block";
    document.querySelector('html').style.backgroundImage=`url(./image/${e}.jpg)`;
}

function shareTwitter(e) {
    const sendone = "[당신에게 추천하는 2022 드라마는?]%0A";
    const sendtwo = "%0A%0A드라마 취향 테스트 결과를 공유해보세요";
    var sendText = document.getElementsByClassName("result-name")[e]; // 전달할 텍스트
    var sendUrl = "2022drama.ml/"; // 전달할 URL
    
    window.open("https://twitter.com/intent/tweet?text=" + sendone + sendText.innerText + sendtwo + "&url=" + sendUrl);
}

five.forEach(
element => element.addEventListener('click', function(){ 
    
    document.getElementById('set-5').style.display = "none";
    document.getElementById('middle').style.display = "block";
    
    const chone = document.querySelector('input[name="one"]:checked');
    const chtwo = document.querySelector('input[name="two"]:checked');
    const chthree = document.querySelector('input[name="three"]:checked');
    const chfour = document.querySelector('input[name="four"]:checked');
    const chfive = document.querySelector('input[name="five"]:checked');
    
    var result = [chone.value, chtwo.value, chthree.value, chfour.value, chfive.value];

    var arr = [ [],
        ['answer-11', 'answer-21', 'answer-31', 'answer-41', 'answer-51'],
        ['answer-11', 'answer-21', 'answer-31', 'answer-41', 'answer-52'],
        ['answer-11', 'answer-21', 'answer-31', 'answer-42', 'answer-51'],
        ['answer-11', 'answer-21', 'answer-31', 'answer-42', 'answer-52'],
        ['answer-11', 'answer-21', 'answer-32', 'answer-41', 'answer-51'],
        ['answer-11', 'answer-21', 'answer-32', 'answer-41', 'answer-52'],
        ['answer-11', 'answer-21', 'answer-32', 'answer-42', 'answer-51'],
        ['answer-11', 'answer-21', 'answer-32', 'answer-42', 'answer-52'],
        ['answer-11', 'answer-22', 'answer-31', 'answer-41', 'answer-51'],
        ['answer-11', 'answer-22', 'answer-31', 'answer-41', 'answer-52'],
        ['answer-11', 'answer-22', 'answer-31', 'answer-42', 'answer-51'],
        ['answer-11', 'answer-22', 'answer-31', 'answer-42', 'answer-52'],
        ['answer-11', 'answer-22', 'answer-32', 'answer-41', 'answer-51'],
        ['answer-11', 'answer-22', 'answer-32', 'answer-41', 'answer-52'],
        ['answer-11', 'answer-22', 'answer-32', 'answer-42', 'answer-51'],
        ['answer-11', 'answer-22', 'answer-32', 'answer-42', 'answer-52'],      
        ['answer-12', 'answer-21', 'answer-31', 'answer-41', 'answer-51'],
        ['answer-12', 'answer-21', 'answer-31', 'answer-41', 'answer-52'],
        ['answer-12', 'answer-21', 'answer-31', 'answer-42', 'answer-51'],
        ['answer-12', 'answer-21', 'answer-31', 'answer-42', 'answer-52'],
        ['answer-12', 'answer-21', 'answer-32', 'answer-41', 'answer-51'],
        ['answer-12', 'answer-21', 'answer-32', 'answer-41', 'answer-52'],
        ['answer-12', 'answer-21', 'answer-32', 'answer-42', 'answer-51'],
        ['answer-12', 'answer-21', 'answer-32', 'answer-42', 'answer-52'],
        ['answer-12', 'answer-22', 'answer-31', 'answer-41', 'answer-51'],
        ['answer-12', 'answer-22', 'answer-31', 'answer-41', 'answer-52'],
        ['answer-12', 'answer-22', 'answer-31', 'answer-42', 'answer-51'],
        ['answer-12', 'answer-22', 'answer-31', 'answer-42', 'answer-52'],
        ['answer-12', 'answer-22', 'answer-32', 'answer-41', 'answer-51'],
        ['answer-12', 'answer-22', 'answer-32', 'answer-41', 'answer-52'],
        ['answer-12', 'answer-22', 'answer-32', 'answer-42', 'answer-51'],
        ['answer-12', 'answer-22', 'answer-32', 'answer-42', 'answer-52']        
    ];
    
    if(JSON.stringify(result)==JSON.stringify(arr[1])) {self.setTimeout("hideDiv(1)",1000);};   
    if(JSON.stringify(result)==JSON.stringify(arr[2])) {self.setTimeout("hideDiv(5)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[3])) {self.setTimeout("hideDiv(4)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[4])) {self.setTimeout("hideDiv(10)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[5])) {self.setTimeout("hideDiv(3)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[6])) {self.setTimeout("hideDiv(7)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[7])) {self.setTimeout("hideDiv(4)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[8])) {self.setTimeout("hideDiv(11)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[9])) {self.setTimeout("hideDiv(2)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[10])) {self.setTimeout("hideDiv(6)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[11])) {self.setTimeout("hideDiv(7)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[12])) {self.setTimeout("hideDiv(10)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[13])) {self.setTimeout("hideDiv(2)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[14])) {self.setTimeout("hideDiv(6)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[15])) {self.setTimeout("hideDiv(8)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[16])) {self.setTimeout("hideDiv(9)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[17])) {self.setTimeout("hideDiv(17)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[18])) {self.setTimeout("hideDiv(19)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[19])) {self.setTimeout("hideDiv(14)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[20])) {self.setTimeout("hideDiv(13)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[21])) {self.setTimeout("hideDiv(15)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[22])) {self.setTimeout("hideDiv(16)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[23])) {self.setTimeout("hideDiv(12)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[24])) {self.setTimeout("hideDiv(12)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[25])) {self.setTimeout("hideDiv(16)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[26])) {self.setTimeout("hideDiv(18)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[27])) {self.setTimeout("hideDiv(13)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[28])) {self.setTimeout("hideDiv(11)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[29])) {self.setTimeout("hideDiv(15)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[30])) {self.setTimeout("hideDiv(18)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[31])) {self.setTimeout("hideDiv(14)",1000);};
    if(JSON.stringify(result)==JSON.stringify(arr[32])) {self.setTimeout("hideDiv(11)",1000);};

     })
);









                                  
