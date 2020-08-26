const telephoneCheck = str => {

    //options for validation
    const countryCode = '1';
    const areaCodeNum = 3;
    const phoneNumStart = 3;
    const phoneNumEnd = 4;

    //logic to test # of provided numbers are correct
    let requiredLength = areaCodeNum + phoneNumStart + phoneNumEnd;
    let optionalLength = requiredLength + countryCode.length;

    //logic to find # of numbers provided 
    let strLength = str.replace(/[^0-9]/g, '').length;

    //logic to clear whitespace for teststring - include any non-numeric symbols or letters
    let testString = str.replace(/\s/g, '');
    
    //RegExp to check if country code & formatitng is correct
    const countryCodeRegexp = new RegExp(`^${countryCode}`);
    
    //RegExp to check if area code and phone number is correct
    const numberRegexp = new RegExp(`\^\\d\{${areaCodeNum+phoneNumStart+phoneNumEnd}\}|^\\(\\d\{${areaCodeNum}\}\\)\\d\{${phoneNumStart}\}-?\\d{${phoneNumEnd}}|^\\d{${areaCodeNum}}-\\d{${phoneNumStart}}-\\d{${phoneNumEnd}}`);
    
    
    //check if provided string is too short or too long
    if (strLength < requiredLength || strLength > optionalLength) {
        return false;
    }
    
    //check if country code is provided, then check if country code, area code and phone number are correct
    if (optionalLength == strLength) {
        if (checkPhoneNumber(testString.slice(countryCode.length), numberRegexp) && checkCountryCode(testString, countryCodeRegexp)) {
            return true;
        }
        else return false;
    } 

    //Check if area code and phone number is correct if no country code is provided
    return checkPhoneNumber(testString, numberRegexp);
    
    
    
    
}

const checkCountryCode = (str, regexp) => {
    if (str.match(regexp) == null) return false;
    else return true;
}

const checkPhoneNumber = (str, regexp) => {
    if (str.match(regexp) == null) return false;
    else return true;
}


let answer = telephoneCheck('15555555555');
console.log(answer);


