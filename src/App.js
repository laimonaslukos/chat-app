import {ChatEngine} from "react-chat-engine" ;
import "./App.css"
import ChatFeed from "./components/ChatFeed"



const App = () => {
  return (
    <ChatEngine 
    height = "100vh"
    projectID = "39dd2ac6-3958-451e-b5b9-2e135be196f1"
    userName = "Laimonas"
    userSecret = "123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}


export default App;