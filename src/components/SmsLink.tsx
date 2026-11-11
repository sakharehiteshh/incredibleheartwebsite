import { useState, type ComponentPropsWithoutRef } from "react";

const SMS_NUMBER = "+13145572620";
const SMS_DISPLAY = "(314) 557-2620";

/** Phones (and Macs with Messages) can open an sms: link; other computers have no texting app. */
function canOpenSms() {
  return /Android|iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent);
}

/**
 * "Text us" link. On a phone it opens the messaging app. On a computer that
 * can't text, it copies the number and shows it so the visitor can text from their phone.
 */
export function SmsLink({ children, ...rest }: Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const [copied, setCopied] = useState(false);

  return (
    <a
      href={`sms:${SMS_NUMBER}`}
      onClick={(e) => {
        if (canOpenSms()) return;
        e.preventDefault();
        navigator.clipboard?.writeText(SMS_DISPLAY).catch(() => {});
        setCopied(true);
        window.setTimeout(() => setCopied(false), 6000);
      }}
      {...rest}
    >
      {copied ? <span aria-live="polite">Text {SMS_DISPLAY} from your phone (number copied)</span> : children}
    </a>
  );
}
