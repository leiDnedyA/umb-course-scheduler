import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            UMass Boston Scheduler
          </Link>
          <div className="flex gap-4">
            <Link href="/schedule" className="text-foreground hover:text-gray-400 transition-colors">
              Schedule
            </Link>
            <Link href="/about" className="text-foreground hover:text-gray-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 