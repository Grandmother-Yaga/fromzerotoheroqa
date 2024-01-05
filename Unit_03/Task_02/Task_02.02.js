/*
Create a function that checks whether a phone number is valid or not. 
NOTE: You don’t need to test your function with all possible phone numbers, 
just check if the function will work correctly with the following inputs.

validatePhoneNymber(067 734 4343) → true
validatePhoneNymber(094 643 7432) → true
validatePhoneNymber(083 jfvj 4554) → false
validatePhoneNymber(Anton0938 884) → false
validatePhoneNymber(0437348348) → true
*/

function validatePhoneNymber(phoneNumber) {
  const num = phoneNumber.split(' ').join('');

  const regexp = /\D/gi;
  const result = regexp.test(num);

  if (result) console.log(false);
  else console.log(true);
}

validatePhoneNymber('067 734 4343');
validatePhoneNymber('094 643 7432');
validatePhoneNymber('083 jfvj 4554');
validatePhoneNymber('Anton0938 884');
validatePhoneNymber('0437348348');

// node ./unit_03/task_02/task_02.02.js
