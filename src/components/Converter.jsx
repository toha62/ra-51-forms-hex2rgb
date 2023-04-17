export default function Converter() {
  return (
    <form action="">
      <input className="user-input box" type="text" maxLength="7" placeholder="Введите код цвета в формате HEX" />
      <input className="result box" type="text" value='' readOnly />
    </form>
  );
}