import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list = [] }) {
  if (!list.length) {
    return;
  }

  return (
    <ul>
      {list.map(
        message => message.type === 'response' ?
          <li key={message.id}>
            <Response from={message.from.name} time={message.time} message={message.text} />
          </li>
        : message.type === 'message' ?
          <li key={message.id}>
            <Message from={message.from.name} time={message.time} message={message.text} />
          </li>
        : <li key={message.id}>
            <Typing from={message.from.name} time={message.time} message={message.text} />
          </li>
      )}
    </ul>
  );
}