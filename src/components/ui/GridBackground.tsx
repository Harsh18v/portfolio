export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="gradient-glow absolute inset-0" />
      <div className="grid-bg absolute inset-0" />
    </div>
  );
}
