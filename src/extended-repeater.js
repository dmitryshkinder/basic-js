module.exports = function repeater(str, options) {
    const separator_default = '+';
    const addition_separator_default = '|';

    let result = '';

    str = String(str);

    if(options["separator"] === undefined){
        options.separator = separator_default;
    }

    if(options["additionSeparator"] === undefined){
        options.additionSeparator = addition_separator_default;
    }

    if(options["repeatTimes"] === undefined){
        options.repeatTimes = 0;
    }

    if(options["additionRepeatTimes"] === undefined){
        options.additionRepeatTimes = 0;
    }
    
    if(options["addition"] === undefined){
        options.addition = '';
    }else if(options["addition"] === null){
        options.addition = 'null';
    }

    if(options.repeatTimes >= 0){
        let i = 0;
        
        do{
            result += str;
            result += options.addition;


            if(options.additionRepeatTimes > 1){
                for(let j = 1; j < options.additionRepeatTimes; j++){
                    result += options.additionSeparator;
                    result += options.addition;
                }
            }

            if(i < options.repeatTimes - 1){
                result += options.separator;
            }

            i++;
        }while (i < options.repeatTimes);
    }

    return result;

};
  