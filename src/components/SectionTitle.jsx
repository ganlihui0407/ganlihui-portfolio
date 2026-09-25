function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="max-w-2xl">
      {eyebrow ? (
        <p className="font-display text-sm font-medium text-olive">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export default SectionTitle;
