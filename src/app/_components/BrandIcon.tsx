// Renders a brand/company logo. Pass `src` for an explicit logo URL (e.g. a
// domain-based logo for companies not on Simple Icons), or `icon` for a Simple
// Icons slug. Plain <img>, so no next/image remote config is required.
export default function BrandIcon({
  name,
  icon,
  src,
}: {
  name: string;
  icon?: string;
  src?: string;
}) {
  const url = src ?? `https://cdn.simpleicons.org/${icon}`;
  return (
    <span className="mono">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={`${name} logo`} loading="lazy" />
    </span>
  );
}
