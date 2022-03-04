switch(true){
  case (x >= 20 && x<=100):
    return true;
    break;
  case (x >= 101 && x <= 400):
    return false;
    break;
  default:
    return null;
    break;
}
}

console.log(find(1))