function Compare(a,b) {
    const positionA = a.position;
    const positionB = b.position;
    let comparison = 0;
    if(positionA > positionB){
        comparison = 1;
    }
    else if(positionA < positionB){
        comparison = -1;
    }
    return comparison;
}
export default Compare;