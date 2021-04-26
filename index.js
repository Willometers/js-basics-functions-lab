function distanceFromHqInBlocks(address) {
    if (address > 42) {
        return address - 42;
    }
    else {
        return 42 - address
    }
}

function distanceFromHqInFeet (address) {
    if (address > 42) {
        return (address - 42) * 264;
    }
    else {
        return (42 - address) * 264;
    } 
}

function distanceTravelledInFeet (block1, block2) {
    if (block1 < block2) {
        return (block2 - block1) * 264;
    }
    else {
        return (block1 - block2) * 264;
    }
}

function calculatesFarePrice (block1, block2) {
    const distance = distanceTravelledInFeet (block1, block2)
    if (distance <= 400) {
        return 0;
      } 
      else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
      } 
      else if (distance > 2000 && distance < 2500) {
        return 25;
      } 
      else {
        return 'cannot travel that far';
      }
    }
    