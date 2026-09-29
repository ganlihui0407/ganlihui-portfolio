function CertificateCard({ certificate, onView }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-cream-raised shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex h-44 items-center justify-center bg-wood/45 px-4 py-3 sm:h-48">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="w-fit rounded-md bg-olive-soft px-2.5 py-1 font-display text-sm text-olive">
          {certificate.category}
        </p>
        <h3 className="mt-3 text-lg leading-snug">{certificate.title}</h3>
        <p className="mt-2 font-display text-sm text-olive">
          {certificate.organization}
        </p>
        <button
          type="button"
          className="btn-primary mt-5 self-start"
          onClick={onView}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export default CertificateCard;
