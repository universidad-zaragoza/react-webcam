// Import Styles
import { useNavigate } from "react-router-dom";
import { useMessages } from "../MessageProvider";
import "./debug.css";

const DebugView = () => {
  const { messages } = useMessages();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="debug-container">
        <div className="debug-container-grid">
          <div className="debug-container-grid-item-traza">
            <ul>
              {messages.map(
                (message, index) => message && <li key={index}>{message}</li>
              )}
            </ul>
          </div>
          <div className="debug-container-grid-item-input-btns">
            <div className="debug-container-grid-item-input-field">
              <div className="input-group mb-3">
                <button onClick={handleClick}>Volver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DebugView;
