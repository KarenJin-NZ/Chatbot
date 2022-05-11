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

 // handle shipping rates
 handleShippingRates = () => {
   const message = this.createChatBotMessage (
     "$5.9 for all orders within New Zealand. $6.5 for all orders in Australia."
   );

   this.updateChatbotState(message);
 }

 // handle shipping zones
 handleShippingZones = () => {
   const message = this.createChatBotMessage(
     "We ship to all locations in New Zealand, and Australia."
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