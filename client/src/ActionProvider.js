class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 greet() {
   const greetingMessage = this.createChatBotMessage("Hi, friend.");
   this.updateChatbotState(greetingMessage);
 }

 handleShipping = () => {
   const message = this.createChatBotMessage (
     "Brilliant, what would you like to know?",
     {
       widget:"shippingLinks",
     }
   );

   this.updateChatbotState(message);
 }

 handleSpecials = () => {
  const message = this.createChatBotMessage (
    "Fantastic, I have found specials in the following 5 categories. Which category would you like to know?",
    {
      widget:"specialsLinks",
    }
  );

  this.updateChatbotState(message);
}

 updateChatbotState(message) {
  this.setState(prevState => ({
    ...prevState, messages: [...prevState.messages, message]
  }))
 }

}

export default ActionProvider;