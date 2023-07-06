function areYouPlayingBanjo(name) {
    // Implement me
    let splitName = name.split('');
    if(splitName[0] === "R" || splitName[0] === "r"){
      return name +  " plays banjo";
    }else{
      return name +  " does not play banjo";
    }
  }