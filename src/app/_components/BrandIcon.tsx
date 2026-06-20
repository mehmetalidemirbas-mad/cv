// Renders a brand/company logo from Simple Icons' CDN, matching the markup the
// live site uses (a plain <img>, so no next/image remote config is required).
export default function BrandIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <span className="mono">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://cdn.simpleicons.org/${icon}`} alt={`${name} logo`} loading="lazy" />
    </span>
  );
}
