import Image from "next/image";

export default function SignInButton() {
  return (
    <button className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium">
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        width={24}
        height={24}
      />
      <span>Continue with Google</span>
    </button>
  );
}
