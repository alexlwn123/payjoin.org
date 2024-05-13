// Button component that accounts for the differences between the two buttons using props
// Using the given tailwind classes below
export function Button({ children, variant }) {
  return (
    <button
      className={`text-2xl text-white px-12 py-4 rounded-lg cursor-pointer transition-all w-80 ${
        variant === "primary"
          ? "bg-primary  hover:bg-pink-500 border-none"
          : "border-solid bg-secondary border-white hover:border-pink-200 hover:text-pink-200"
      } `}
    >
      {children}
    </button>
  );
}

export default function HeaderContent() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-8">
      <img
        src="/svg/monad.svg"
        alt="Monad Logo"
        className="w-32 text-primary"
      />

      <h1 className="text-7xl">Payjoin</h1>
      <div className="flex flex-col">
        <h2 className="text-4xl">
          Scale Bitcoin, save fees, preserve privacy.
        </h2>
        <h2 className="text-4xl italic">By Default.</h2>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <a href="/docs/intro">
          <Button variant="primary">Learn More</Button>
        </a>
        <a href="https://payjoindevkit.org/">
          <Button variant="secondary">Payjoin Dev Kit</Button>
        </a>
      </div>
    </div>
  );
}
