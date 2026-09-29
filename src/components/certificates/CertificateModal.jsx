import { useEffect, useId, useState } from "react";

function CertificateModal({ certificate, onClose }) {
  const titleId = useId();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          entered
            ? "opacity-100"
            : "opacity-0 motion-reduce:opacity-100"
        }`}
        aria-label="Close certificate details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-card border border-line bg-cream-raised shadow-soft transition duration-200 ease-out motion-reduce:transition-none ${
          entered
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 motion-reduce:scale-100 motion-reduce:opacity-100"
        }`}
      >
        <div className="flex h-64 items-center justify-center bg-wood/45 px-6 py-5 sm:h-80">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <p className="w-fit rounded-md bg-olive-soft px-2.5 py-1 font-display text-sm text-olive">
            {certificate.category}
          </p>
          <h2 id={titleId} className="mt-4 text-2xl sm:text-3xl">
            {certificate.title}
          </h2>
          <p className="mt-2 font-display text-sm text-olive">
            {certificate.organization}
          </p>
          {certificate.supportedBy ? (
            <p className="mt-1 text-sm text-stone">
              Supported by {certificate.supportedBy}
            </p>
          ) : null}
          {certificate.date ? (
            <p className="mt-3 text-charcoal">{certificate.date}</p>
          ) : null}

          <p className="mt-6 font-display text-sm text-olive">Skills</p>
          <ul className="mt-3 space-y-2 text-charcoal">
            {certificate.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          {certificate.description ? (
            <>
              <p className="mt-6 font-display text-sm text-olive">Description</p>
              <p className="mt-2 leading-relaxed text-charcoal">
                {certificate.description}
              </p>
            </>
          ) : null}

          {certificate.relevance ? (
            <>
              <p className="mt-6 font-display text-sm text-olive">
                Portfolio relevance
              </p>
              <p className="mt-2 leading-relaxed text-charcoal">
                {certificate.relevance}
              </p>
            </>
          ) : null}

          <button type="button" className="btn-primary mt-8" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
