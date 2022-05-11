import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./components/LinkList/LinkList";
import Options from "./components/Options/Options";
import Shipping from "./components/Shipping/Shipping";
//import { BiBot } from 'react-icons/bi';
import MyAvatar from "./components/MyAvatar";

const config = {
  botName:"Stella",
  initialMessages: [
    createChatBotMessage("Hi, I'm Stella the bot. How can I help you?", {
      widget:"Options",
    })
  ],

  widgets: [
    {
      widgetName:"Options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName:"shippingLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text:"Shipping rates",
            url:
            "https://www.healthpost.co.nz/help-support/delivery/",
            id: 1,
          },
          {
            text:"Shipping zones",
            url:
            "https://info.healthpost.co.nz/delivery-worldwide/international-delivery-options",
            id: 2,
          }
        ]
      }
    },
    
    //Shipping widget first layer
    {
      widgetName:"shippingOptions",
      widgetFunc: (props) => <Shipping {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#2FA4FF",
    },
    chatButton: {
      backgroundColor: "#2FA4FF",
    },
  },

  customComponents: {
    header:() => <div style={{backgroundColor:"#2FA4FF", padding:"5px",borderRadius:"3px", fontSize:"15px", display:"flex", justifyContent:"left"}}>
      Hi there!👋I'm Stella the Bot.</div>,
    
    //botAvatar:() => <BiBot />,
    botAvatar:(props) =><MyAvatar {...props} />,
    
  }
}

export default config;