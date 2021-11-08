
const PasswordGenerator = (setting)=>{
    const caracter ={
        characterNumber:  '0 1 2 3 4 5 6 7 8 9',
        symbol:  '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        capitalLetter:  'A B C D E F G H J K L M N O P Q R S T U V W X Y Z',
        letter: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }
    let caracterFinal='';
    let pass='';
    for(let props in setting){
        if(setting[props]===true){
            caracterFinal += caracter[props]+' ';
        }
    }
    
    caracterFinal += caracter.letter;
    caracterFinal = caracterFinal.trim();
    caracterFinal = caracterFinal.split(' ');
    for(let i=0;i<setting.characterNumber;i++){
        pass+=caracterFinal[Math.floor(Math.random()*caracterFinal.length)];
    }
    return pass;
}

export default PasswordGenerator;