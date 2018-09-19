// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (!currency) {
        return {};
    }
    if (currency >= 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    if (currency <= 0){
        return {};
    }
    let ost1, ost2 ,ost3, ost4, ost5;
    let halfsCount = 0;
    let quartersCount = 0;
    let dimesCount = 0;
    let nickelsCount = 0;
    let penniesCount = 0;
    let exchangeResult = [];

    ost1 = currency % 50;
    halfsCount = (currency - ost1)/50;
    ost2 = ost1 % 25;
    quartersCount = (ost1 - ost2)/25;
    ost3 = ost2 % 10;
    dimesCount = (ost2 - ost3)/10;
    ost4 = ost3 % 5;
    nickelsCount = (ost3 - ost4)/5;
    penniesCount = ost4;


    if (halfsCount != 0) {
        exchangeResult['H'] = halfsCount;
    }
    if (quartersCount != 0) {
        exchangeResult['Q'] = quartersCount;
    }
    if (dimesCount != 0) {
        exchangeResult['D'] = dimesCount;
    }
    if (nickelsCount != 0) {
        exchangeResult['N'] = nickelsCount;
    }
    if (penniesCount != 0) {
        exchangeResult['P'] = penniesCount;
    }
    return exchangeResult;
}
