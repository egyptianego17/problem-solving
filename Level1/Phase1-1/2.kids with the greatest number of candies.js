/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var result = [];
    for (var i=0;i<candies.length;i++)
    {
        var otherCandies = [...candies];
        otherCandies.splice(i, 1); 
        result[i] = (candies[i] + extraCandies) >= Math.max(...otherCandies);
    }
    return result
};