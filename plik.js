var getTriangleArea=function(a, h){
if (a <= 0 || h<=0) {
	alert ("Nieprawidlowe dane");
}
else {
return a*h/2;
}

}

console.log(getTriangleArea(10, 6))
<script>
var triangle1Area = getTriangleArea(10, 15);
    triangle1Area2 = getTriangleArea(12, 5);
    triangle1Area3 = getTriangleArea(1, 11);
</script>