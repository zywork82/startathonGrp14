  // Define button assignments using a dictionary
const buttonAssignments = {
    "buttonSpace": "space",
    "buttonEnter": "enter",
    "buttonBackspace": "backspace",
    "buttonCopy": "copy",
    "buttonPaste": "paste",
    "buttonPageUp": "pageup",
    "buttonPageDown": "pagedown",
    "buttonTab": "tab",
    "buttonArrowUp": "ArrowUp",
    "buttonArrowDown": "ArrowDown",
    "buttonArrowLeft": "ArrowLeft",
    "buttonArrowRight": "ArrowRight",
    "buttonEscape": "escape",
    "buttonHome": "home",
    "buttonEnd": "end",
    "buttonInsert": "insert",
    "buttonDelete": "delete",
    "buttonShift": "shift",
    "buttonCtrl": "ctrl",
    "buttonAlt": "alt",
    "buttonCmd": "cmd",
    "buttonUndo": "Z",
    "buttonRedo": "Y",

    //FOR CALL CENTRE
    "buttonEscalate": "E", // example: Escalate call
    "buttonHold": "H", // example: Put call on hold
    "buttonTransfer": "T", // example: Transfer call
    "buttonMute": "M", // example: Mute call
    "buttonEndCall": "C", // example: End call

    //FOR CASHIERS
    "buttonVoid": "V", // Example: Void transaction
    "buttonDiscount": "D", // Example: Apply discount
    "buttonPriceCheck": "P", // Example: Price check
    "buttonQuantity": "Q", // Example: Change quantity
    "buttonCash": "C", // Example: Cash payment
    "buttonCredit": "X", // Example: Credit card payment
    "buttonDebit": "B", // Example: Debit card payment

    // Add more buttons as needed
  };
  
  // Convert the dictionary to a string
  let fileContent = "";
  for (const button in buttonAssignments) {
    fileContent += `${button} = ${buttonAssignments[button]}\n`;
  }
  
  // Output the file content
  console.log(fileContent);
  
  // You can write this content to a text file using Node.js filesystem module, for example.
  