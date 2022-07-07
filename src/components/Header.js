export default function Header() {
  return (
    <div className="header">
      <h1>
        <a href="/">토익 영단어(고급)</a>
      </h1>
      <div className="menu">
        <a href="/create_word" className="link">
          단어 추가
        </a>
        <a href="/create_day" className="link">
          Day 추가
        </a>
      </div>
    </div>
  );
}
