
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = [];
   if (matrix) {
    for (i=0; i<matrix.length; i++) {
        if (i%2==0){
        for (z=0; z<matrix[i].length; z++) {
            array.push(matrix[i][z]);
        }}
        else {
             for (z=matrix[i].length-1; z>=0; z--) {
                array.push(matrix[i][z]);
            }}
    }};
  return array;
}
