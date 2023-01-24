
let pii = (function () {
    let name = 'Bryan'
    let _ssn = '987-65-4321';
    getssn = function () {
        return _ssn;
    }
    getname = function () {
        return name;
    }
    return {
        getname: name
    }
    return {
        getssn: getssn
        
    }
}());
console.log(pii.getname);
console.log(pii._ssn);

