import Image from "next/image";

interface IconProps {
  className?: string;
}

export const GithubIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <Image
    src="/images/icons/Github.svg"
    alt="GitHub"
    width={24}
    height={24}
    className={className}
  />
);

export const LinkedInIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <Image
    src="/images/icons/LinkedIn.svg"
    alt="LinkedIn"
    width={24}
    height={24}
    className={className}
  />
);

export const MailIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <Image
    src="/images/icons/Message - Fill.svg"
    alt="Email"
    width={24}
    height={24}
    className={className}
  />
);

export const ArrowDownIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <Image
    src="/images/icons/Chevron Down.svg"
    alt="Arrow Down"
    width={16}
    height={16}
    className={className}
  />
);

export const ArrowRightIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <Image
    src="/images/icons/Arrow Right.svg"
    alt="Arrow Right"
    width={20}
    height={20}
    className={className}
  />
);

export const SendIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <Image
    src="/images/icons/Send.svg"
    alt="Send"
    width={20}
    height={20}
    className={className}
  />
);
