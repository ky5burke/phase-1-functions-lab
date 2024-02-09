// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        let blocks = pickup - 42;
        return blocks
    }
    else if (42 > pickup) {
        let blocks = 42 - pickup;
        return blocks
    }
    return blocks
}

function distanceFromHqInFeet(blockAmount) {
    let feet = (distanceFromHqInBlocks(blockAmount) * 264);
    return feet
}

function distanceTravelledInFeet (start, destination) {
    let result = Math.abs((start - destination)* 264)
    return result
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    console.log(feet)
    if (feet <= 400) {
        return 0
    }
    if (feet > 400 && feet <= 2000) {
        const product = ((feet - 400) * .02);
        return product
    }
    if (feet >= 2001 && feet <2501) {
        return 25
    }
    if (feet > 2500) {
        return 'cannot travel that far';
    }
}

