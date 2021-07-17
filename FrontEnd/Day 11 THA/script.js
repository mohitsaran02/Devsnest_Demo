const questions = [
    {
        question : "Who is the first Hokage  ?",
        options : ["Hashirama Senju", "Madara Uchhiha", "Tobirama Senju", "Minato Namikaze"]
    },
    {
        question : "Who is not from Uzumaki clan among the following ?",
        options : ["Sakura", "Nagato", "Karin", "Kushina "]
    },
    {
        question : "Who is not a Legendary Sanin ?",
        options : ["Hiruzen Sarutobi", "Jiraiya", "Orochimaru", "Lady Tsunade"]
    },
    {
        question : "Who is known as the Copy Ninja ?",
        options : ["Kakashi", "Asuma", "Might Guy", "Kurenai"]
    },
    {
        question : "Who is known as the Yellow Flash of Leaf ?",
        options : ["Minato", "Kakashi", "Jiraiya", "Naruto"]
    }
]


const body = document.body;
var score = 0;

function shuffle(arr){
    for(var i=arr.length-1; i>0; i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function reveal(elem){
    let temp = score;
    let options = elem.closest(".options");
    let buttons = options.querySelectorAll("button");
    buttons.forEach((button)=>{
        button.click();
    });
    score = temp;
}

function createOption(option, answer=false){

    const optionHolder = document.createElement("div");
    optionHolder.className = "option";

    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click",()=>{
        if(answer){
            if(!button.classList.contains("correct")){
                score++;
            }
            button.classList.add("correct");
        }
        else{
            button.classList.add("incorrect");
        }
        reveal(button);
    });

    optionHolder.append(button);
    return optionHolder;

}

shuffle(questions);

questions.forEach((currQues, quesNum)=>{

    const container = document.createElement("div");
    container.className = "container";

    const question = document.createElement("div");
    question.className = "question";
    question.innerHTML = `${quesNum + 1}. ${currQues.question}`;
    container.append(question);

    const options = document.createElement("div");
    options.className = "options";
    let optionsArr = [];

    currQues.options.forEach((option, number)=>{
        if(number == 0){
            optionsArr.push(createOption(option, true));
        }
        else{
            optionsArr.push(createOption(option));
        }
    });
    shuffle(optionsArr);
    optionsArr.forEach((option)=>{
        options.append(option);
    });
    container.append(options);
    body.append(container);
});

const result = document.querySelector(".result");
result.addEventListener("click", ()=>{
    result.innerHTML = `${score}/${questions.length}`;
});