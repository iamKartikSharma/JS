// Immediately Invoked Function Expression (IIFE)



(function nane() {
    // named IIFE
    console.log('DB CONNECTED');
    
})(); 


// Agar hume 2 IIFE likhne hai saath toh pehle vale ke end mein ; lagana pdega okay!!!!!!!


//() this is execution call. for ex nane() so, () this is execution call.

//  global scope ke pollution ko hatane ke liye IIFE ka use kiya

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('kartik')
