import Link from "next/link";

export const NeedAssistanceButton: React.FC<{
  darkMode?: boolean;
}> = ({ darkMode = false }) => (
  <Link
    href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
    target="_blank"
  >
    <button
      className={`text-base ${
        darkMode ? "border-white text-white" : "border-black text-black"
      } border border-2 rounded-full px-6 py-2 w-full hover:bg-primary`}
    >
      Need Assistance?
    </button>
  </Link>
);
