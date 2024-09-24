/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;

    for (let i = 0; i < accounts.length; i++) {
        let temp = accounts[i].reduce((accumulative, current) => accumulative + current, 0);
        max = Math.max(max, temp);
    }

    return max;
};
