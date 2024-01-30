export default function ResultNavbar({ onClickSearch }) {
  return (
    <div className="result__navbar">
      <img
        src="/img/ic_burger.png"
        width={16}
        height={13}
        alt="ic-burger"
        className="ic-burger cursor-pointer"
      />
      <img
        src="/img/img_logo-navbar.png"
        width={73}
        height={16}
        alt="ic-logo"
        className="ic-logo cursor-pointer"
        role="presentation"
        onClick={() => {
          window.location.assign("/");
        }}
      />
      <img
        src="/img/ic_search.png"
        width={16}
        height={16}
        alt="ic-search"
        className="ic-search cursor-pointer"
        role="presentation"
        onClick={onClickSearch}
      />
    </div>
  );
}
