import javascriptLogo from '../assets/tech/javascript.svg';
import reactLogo from '../assets/tech/react.svg';
import firebaseLogo from '../assets/tech/firebase.svg';
import htmlLogo from '../assets/tech/html.svg';
import cssLogo from '../assets/tech/css.svg';
import tailwindLogo from '../assets/tech/tailwind.svg';
import phpLogo from '../assets/tech/php.svg';
import mysqlLogo from '../assets/tech/mysql.svg';
import nextjsLogo from '../assets/tech/nextjs.svg';
import typescriptLogo from '../assets/tech/typescript.svg';
import supabaseLogo from '../assets/tech/supabase.svg';

const logos = {
  javascript: javascriptLogo,
  react: reactLogo,
  firebase: firebaseLogo,
  html: htmlLogo,
  css: cssLogo,
  tailwind: tailwindLogo,
  php: phpLogo,
  mysql: mysqlLogo,
  nextjs: nextjsLogo,
  typescript: typescriptLogo,
  supabase: supabaseLogo,
};

export function TechBadge({ name }) {
  const logo = logos[name.toLowerCase().replace(/[^a-z0-9]/g, '')];

  return (
    <span className="tech-badge">
      {logo && <img src={logo} alt="" aria-hidden="true" />}
      <span>{name}</span>
    </span>
  );
}
