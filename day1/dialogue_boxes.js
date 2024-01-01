// Javascript Alert, Prompt and the Confirm method

/* This creates a dialogue boxes for the users to request a response from the user and to pause all the code in background until the request is satisfied.

all these are the methods of the windows object. This object is the highest level object that JavaScript can deal with in a browser.*/

windows.alert("hello world");

/*Writing the windows is not necessary. Its presence is assumed even if omitted. */

alert("hello world");

/*the end of line for javascript is semi-colon (;) */


//other methods

windows.document.write("hello world");
document.write("hello world"); //it give output in the terminal box
window.alert( message ); //shows an alert box
window.confirm( message ); //show a confirmation box on your website window
window.prompt( message, default_response ); //prompt box take input from user. default response is the default text in the text box of the prompt window
