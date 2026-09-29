import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/certificates/CertificateCard";
import CertificateModal from "../components/certificates/CertificateModal";
import certificates from "../data/certificates";

function Certificates() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = certificates.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="page-shell">
      <SectionTitle
        title="Certificates"
        description="Professional certifications, achievements, and learning milestones that support my software development journey."
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <CertificateCard
              certificate={certificate}
              onView={() => setSelectedId(certificate.id)}
            />
          </li>
        ))}
      </ul>

      {selected ? (
        <CertificateModal
          certificate={selected}
          onClose={() => setSelectedId(null)}
        />
      ) : null}
    </div>
  );
}

export default Certificates;
