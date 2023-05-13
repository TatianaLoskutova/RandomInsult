let generateRandomInsult = function () {
    let randomBodyParts = ["глаз", "нос", "череп"];
    let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    // Соединяем случайные строки в предложение:
    let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives)
        + " " + pickRandomWord(randomWords) + "!!!";
return randomString;
};
generateRandomInsult();
"У тебя череп словно унылая дубина!!!"
generateRandomInsult();
"У тебя нос словно дурацкая мартышка!!!"
generateRandomInsult();
"У тебя глаз словно вонючая муха!!!"