/* Modules */
import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

/* Components */
import Header from "../customHeader";
import StandardMessageForm from "../customMessageForms/StandardMessageForm";
import Ai from "../customMessageForms/Ai";
import AiCode from "../customMessageForms/AiCode";
import AiAssist from "../customMessageForms/AiAssist";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    import.meta.env.VITE_DEFAULT_USER,
    import.meta.env.VITE_DEFAULT_SECRET
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("Chat with the AI")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }

          if (chatProps.chat?.title.startsWith("Code Questions with the AI")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }

          if (
            chatProps.chat?.title.startsWith("Text completion on input box AI")
          ) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
