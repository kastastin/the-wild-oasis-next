import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="relative border-b border-primary-900 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
