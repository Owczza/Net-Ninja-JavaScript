for (age = 0; age < 10; age++){
  console.log("You are under 10.");
}
document.write("You are now over 10.");

var links = document.getElementByTagName("a");
for (i = 1; i <= links.length; i++){
  console.log("This is the link no." + i)
}
document.write("All links now looped.");
