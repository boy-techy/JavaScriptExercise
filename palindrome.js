function checkpalindrome(){
  var x=document.getElementById("strings").value;
  var start=0;
  var end=(x.length)-1
  while(start<=end){
    if(x.charAt(start)!=x.charAt(end)){
      alert("Not a Palindrome String");
      return;
    }
    start++;
    end--;
  }
  alert("Palindrome String");
}
