import "./button.scss";

export function Button({ text, type, htmlType, ...props }) {
  return (
    <button {...props} className={`button ${htmlType}`} type={type}>
      {text}
    </button>
  );
}
