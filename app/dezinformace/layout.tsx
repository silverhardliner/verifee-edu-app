import "./styles.css"
import {Kumbh_Sans} from "next/font/google"
import { Open_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({
    subsets: ['latin'],
    display: 'swap'
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
})


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={kumbh_sans.className}>
      <div className={`header-footer mb-7 ${open_sans.className}`}>VERIFEE EDUCATION</div>
      <div className="px-36">{children}</div>
      <div className={`header-footer mt-7 ${open_sans.className}`}>VERIFEE EDUCATION</div>
    </div>
  );
}
