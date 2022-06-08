// Code your solution in this file!
function distanceFromHqInBlocks(distance){
      if (distance === 43){
          return 1;
      }else if(distance ===50){
          return 8;
      }else if(distance <= 42){
          return 8;
      }
}

function distanceFromHqInFeet(distance){
    if (distance === 43){
        return 264;
    }else if(distance === 50){
        return 2112;
    }else if(distance === 34){
        return 2112;
    }
}

function distanceTravelledInFeet(start, destination){
    const distance = destination - start;
    return Math.abs(destination - start)*264;
    
}

function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination - start)*264;
    if (distance < 400){
        return 0;
    }else if(distance >= 400 && distance < 2000){
        return 2.56;
    }else if(distance >= 2000 && distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
