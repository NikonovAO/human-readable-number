module.exports = function toReadable (number) {
    const dictionary = 
    {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
// если число уже есть в словаре
    if (number in dictionary)
      {
        return dictionary[number]
      }
//если число от 20 и до 100
    if (number >= 20 && number < 100)
      {
        let numFloor = (Math.floor(number/10))*10; //округляем аргумент до ближайшего меньшего целого. Получаем первую цифру из 2-х
        return (dictionary[numFloor] + ' ' + dictionary[number - numFloor])
        //number - numFloor - получаем вторую цифру и берем значение из словаря
      }
//если число больше 100     
      if (number >= 100)
      {
        let numHundred = (Math.floor(number/100)); //получаем первую цифру
        let numTen = number - numHundred*100; //получаем 2 оставшихся цифры
        if (number % 100 === 0) //если число 100, 200, 300 и т.д.
        {
            return (dictionary[numHundred] + ' hundred')
        }
        if (numTen in dictionary) {
          return (dictionary[numHundred] + ' hundred ' + dictionary[numTen])
        }
        if (numTen >= 20)
      { 
        let numFloor = (Math.floor(numTen/10))*10;
        return (dictionary[numHundred] + ' hundred ' + dictionary[numFloor] + ' ' + dictionary[numTen - numFloor])
      }
}
}
