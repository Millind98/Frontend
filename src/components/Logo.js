import './Logo.css';

export default function Logo() {
  return (
    <div className="logo-wrapper">
      <img
        src="/Brothers_2025.webp"
        alt="Brothers Logo"
        className="main-logo"
        style={{ background: 'none', boxShadow: 'none' }}
      />
    </div>
  );
}
