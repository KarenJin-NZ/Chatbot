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

 // handleShipping
 handleShippingOptions = () => {
   const message = this.createChatBotMessage (
     "Awesome, what would you like to know?",
     {
       widget:"shippingOptions",
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