const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919390162611?text=Hello%20Dr.%20Chandra%2C%20I%20would%20like%20to%20inquire%20about%20your%20physiotherapy%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl ring-2 ring-white/30 transition-transform duration-200 hover:-translate-y-1 active:scale-95"
      title="WhatsApp: +91 9390162611"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.148-.672-1.612-.921-2.21-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.71.227 1.355.195 1.865.118.569-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.273-.198-.57-.347z" />
        <path d="M12 2.04C6.48 2.04 2.04 6.48 2.04 12S6.48 21.96 12 21.96 21.96 17.52 21.96 12 17.52 2.04 12 2.04zm0 17.64c-2.01 0-3.87-.62-5.43-1.68L4.5 20.5l1.88-2.01A9.94 9.94 0 0 1 2.04 12C2.04 6.86 6.86 2.04 12 2.04S21.96 6.86 21.96 12 17.14 19.68 12 19.68z" opacity="0.2" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
